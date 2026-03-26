import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { sendBookingEmail } from "@/lib/sendBookingEmail";
import { Resend } from "resend";

const BOOKINGS_DIR = path.join(process.cwd(), "bookings");
const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "brajpathpradarshak@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId,
      specialRequests,
    } = await req.json();

    // 1. Verify required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !bookingId) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // 2. HMAC-SHA256 signature verification — blocks fake/tampered payments
    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.warn("[verify-payment] Invalid signature for booking:", bookingId);
      return NextResponse.json({ error: "Invalid payment signature." }, { status: 400 });
    }

    // 3. Load booking record
    const bookingPath = path.join(BOOKINGS_DIR, `${bookingId}.json`);
    if (!fs.existsSync(bookingPath)) {
      return NextResponse.json({ error: "Booking not found." }, { status: 404 });
    }

    const booking = JSON.parse(fs.readFileSync(bookingPath, "utf-8"));

    // 4. Idempotency — do not double-confirm
    if (booking.status === "confirmed") {
      return NextResponse.json({ success: true, bookingId, alreadyConfirmed: true });
    }

    // 5. Save confirmed booking
    const confirmed = {
      ...booking,
      status: "confirmed",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      specialRequests: specialRequests || "",
      confirmedAt: new Date().toISOString(),
    };
    fs.writeFileSync(bookingPath, JSON.stringify(confirmed, null, 2));

    // 6. Send customer confirmation email with PDF invoice — non-blocking
    sendBookingEmail(confirmed).catch((e) =>
      console.error("[verify-payment] Customer email failed:", e)
    );

    // 7. Send owner notification email — non-blocking
    resend.emails
      .send({
        from: "Braj Path Pradarshak Bookings <bookings@brajpathpradarshak.com>",
        to: OWNER_EMAIL,
        subject: `🎉 New Booking: ${confirmed.bookingId} — ${confirmed.packageTitle}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;background:#1a1a2e;color:#fff;border-radius:12px;overflow:hidden;">
            <div style="background:linear-gradient(90deg,#ff9933,#ffd700);height:4px;"></div>
            <div style="padding:24px;">
              <h2 style="color:#ffd700;margin:0 0 4px;">🎉 New Booking Confirmed</h2>
              <p style="color:rgba(255,255,255,0.6);margin:0 0 20px;font-size:13px;">A customer has paid the advance deposit.</p>
              <table style="width:100%;border-collapse:collapse;font-size:13px;">
                ${[
                  ["Booking ID", confirmed.bookingId],
                  ["Payment ID", confirmed.paymentId],
                  ["Customer", confirmed.name],
                  ["Phone", confirmed.phone],
                  ["Email", confirmed.email],
                  ["Package", confirmed.packageTitle],
                  [
                    "Travel Date",
                    new Date(confirmed.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                  ],
                  ["Travelers", `${confirmed.travelers} person(s)`],
                  ["Deposit Paid ✅", `₹${confirmed.totalDeposit.toLocaleString("en-IN")}`],
                  ["Balance Due", `₹${confirmed.balanceDue.toLocaleString("en-IN")}`],
                  ...(confirmed.specialRequests
                    ? [["Special Requests", confirmed.specialRequests]]
                    : []),
                ]
                  .map(
                    ([k, v]) =>
                      `<tr><td style="padding:6px 0;color:rgba(255,255,255,0.5);width:40%;">${k}</td><td style="padding:6px 0;font-weight:700;color:#fff;">${v}</td></tr>`
                  )
                  .join("")}
              </table>
            </div>
            <div style="background:rgba(255,215,0,0.08);padding:12px 24px;text-align:center;font-size:12px;color:#ffd700;">
              Jai Shri Krishna 🙏 · Braj Path Pradarshak
            </div>
          </div>
        `,
      })
      .catch((e) => console.error("[verify-payment] Owner email failed:", e));

    return NextResponse.json({ success: true, bookingId });
  } catch (err) {
    console.error("[verify-payment] Error:", err);
    return NextResponse.json(
      { error: "Verification failed. Please contact support." },
      { status: 500 }
    );
  }
}
