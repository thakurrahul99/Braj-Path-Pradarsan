import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import { getRazorpay } from "@/lib/razorpay";
import { validateBookingInput } from "@/lib/validateBookingInput";
import { getDepositAmount } from "@/lib/getDepositAmount";

// Bookings are stored in /bookings/ at the project root (server-side only)
const BOOKINGS_DIR = path.join(process.cwd(), "bookings");

function ensureBookingsDir() {
  if (!fs.existsSync(BOOKINGS_DIR)) {
    fs.mkdirSync(BOOKINGS_DIR, { recursive: true });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate input
    const { valid, errors } = validateBookingInput(body);
    if (!valid) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    const { name, email, phone, date, packageTitle, packageSlug, travelers, pricePerPerson } = body;

    // 2. Calculate deposit
    const deposit = getDepositAmount(Number(pricePerPerson), Number(travelers));

    // 3. Create Razorpay order for deposit amount only (in paise)
    const order = await getRazorpay().orders.create({
      amount: deposit.totalDeposit * 100, // paise
      currency: "INR",
      receipt: `bpp_${Date.now()}`,
      notes: {
        packageTitle,
        travelers: String(travelers),
        travelDate: date,
        customerName: name,
      },
    });

    // 4. Generate unique booking ID
    const shortId = uuidv4().replace(/-/g, "").slice(0, 8).toUpperCase();
    const bookingId = `BPP-${shortId}`;

    // 5. Save pending booking record
    ensureBookingsDir();
    const record = {
      bookingId,
      orderId: order.id,
      status: "pending",
      name,
      email,
      phone,
      packageTitle,
      packageSlug: packageSlug || "",
      date,
      travelers: Number(travelers),
      pricePerPerson: Number(pricePerPerson),
      totalPackagePrice: deposit.totalPackagePrice,
      depositPerPerson: deposit.depositPerPerson,
      totalDeposit: deposit.totalDeposit,
      balanceDue: deposit.balanceDue,
      paymentId: null,
      createdAt: new Date().toISOString(),
    };

    fs.writeFileSync(
      path.join(BOOKINGS_DIR, `${bookingId}.json`),
      JSON.stringify(record, null, 2)
    );

    // 6. Return order details to frontend (no secret key!)
    return NextResponse.json({
      orderId: order.id,
      bookingId,
      depositAmount: deposit.totalDeposit,
      depositPerPerson: deposit.depositPerPerson,
      totalPackagePrice: deposit.totalPackagePrice,
      balanceDue: deposit.balanceDue,
      currency: "INR",
      razorpayKeyId: process.env.RAZORPAY_KEY_ID, // public key — safe to return
    });
  } catch (err) {
    console.error("[create-order] Error:", err);
    return NextResponse.json(
      { error: "Failed to create order. Please try again." },
      { status: 500 }
    );
  }
}
