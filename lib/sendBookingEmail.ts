import { Resend } from "resend";
import { generateInvoicePDF } from "./generateInvoicePDF";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailBookingData {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  packageTitle: string;
  date: string;
  travelers: number;
  pricePerPerson: number;
  totalPackagePrice: number;
  depositPerPerson: number;
  totalDeposit: number;
  balanceDue: number;
  paymentId: string;
  createdAt: string;
}

function formatINR(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function sendBookingEmail(data: EmailBookingData) {
  // Generate the PDF invoice
  const pdfBuffer = await generateInvoicePDF(data);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Booking Confirmed</title></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 30px rgba(0,0,0,0.1);max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1a1a2e;padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:20px;font-weight:800;color:#FFD700;letter-spacing:1px;">BRAJ PATH PRADARSHAK</p>
                  <p style="margin:4px 0 0;font-size:11px;color:#FF9933;letter-spacing:0.5px;">Sacred Braj Yatra Specialists · Govardhan, U.P.</p>
                </td>
                <td align="right">
                  <span style="background:#FF9933;color:#fff;font-weight:700;font-size:11px;padding:6px 14px;border-radius:4px;letter-spacing:1px;">BOOKING CONFIRMED</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Gold bar -->
        <tr><td style="height:4px;background:linear-gradient(90deg,#FF9933,#FFD700,#FF9933);"></td></tr>

        <!-- Welcome -->
        <tr>
          <td style="padding:32px 32px 16px;">
            <h2 style="margin:0 0 8px;font-size:22px;color:#1a1a2e;">Jai Shri Krishna! 🙏</h2>
            <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">Dear <strong>${data.name}</strong>, your Braj Yatra booking is confirmed! We're delighted to be your guide on this sacred journey.</p>
          </td>
        </tr>

        <!-- Booking ID badge -->
        <tr>
          <td style="padding:0 32px 24px;">
            <div style="background:#fffbf0;border:2px solid #FFD700;border-radius:10px;padding:16px 20px;text-align:center;">
              <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Your Booking Reference</p>
              <p style="margin:0;font-size:26px;font-weight:800;color:#FF9933;letter-spacing:3px;">${data.bookingId}</p>
              <p style="margin:6px 0 0;font-size:11px;color:#888;">Keep this for your records · Show to your guide</p>
            </div>
          </td>
        </tr>

        <!-- Tour details -->
        <tr>
          <td style="padding:0 32px 24px;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#FF9933;text-transform:uppercase;letter-spacing:1px;">Tour Details</p>
            <table width="100%" style="border-radius:10px;overflow:hidden;border:1px solid #e8d9c0;">
              <tr style="background:#f9f6f0;">
                <td style="padding:10px 16px;font-size:12px;color:#888;width:40%;">Package</td>
                <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#1a1a2e;">${data.packageTitle}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:12px;color:#888;border-top:1px solid #e8d9c0;">Travel Date</td>
                <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#1a1a2e;border-top:1px solid #e8d9c0;">${formatDate(data.date)}</td>
              </tr>
              <tr style="background:#f9f6f0;">
                <td style="padding:10px 16px;font-size:12px;color:#888;border-top:1px solid #e8d9c0;">Travelers</td>
                <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#1a1a2e;border-top:1px solid #e8d9c0;">${data.travelers} person(s)</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:12px;color:#888;border-top:1px solid #e8d9c0;">Rate</td>
                <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#1a1a2e;border-top:1px solid #e8d9c0;">${formatINR(data.pricePerPerson)} per person</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Payment summary -->
        <tr>
          <td style="padding:0 32px 24px;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#FF9933;text-transform:uppercase;letter-spacing:1px;">Payment Summary</p>
            <div style="background:#1a1a2e;border-radius:10px;padding:20px;">
              <table width="100%">
                <tr>
                  <td style="color:rgba(255,255,255,0.6);font-size:12px;padding-bottom:8px;">Total Package Price</td>
                  <td align="right" style="color:#fff;font-size:12px;font-weight:700;padding-bottom:8px;">${formatINR(data.totalPackagePrice)}</td>
                </tr>
                <tr><td colspan="2" style="height:1px;background:rgba(255,215,0,0.2);padding:0;"></td></tr>
                <tr>
                  <td style="color:#FFD700;font-size:13px;font-weight:700;padding-top:12px;">✓ Advance Deposit Paid</td>
                  <td align="right" style="color:#FFD700;font-size:13px;font-weight:700;padding-top:12px;">${formatINR(data.totalDeposit)}</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:10px;">
                    <div style="background:rgba(255,153,51,0.15);border-radius:6px;padding:10px 14px;">
                      <table width="100%">
                        <tr>
                          <td style="color:#FF9933;font-size:12px;font-weight:700;">Balance Due on Arrival</td>
                          <td align="right" style="color:#FF9933;font-size:12px;font-weight:700;">${formatINR(data.balanceDue)}</td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- Notes -->
        <tr>
          <td style="padding:0 32px 24px;">
            <div style="background:#fffbf0;border:1px solid #e8d9c0;border-radius:10px;padding:16px 20px;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#FF9933;text-transform:uppercase;letter-spacing:1px;">Important Notes</p>
              <ul style="margin:0;padding-left:16px;color:#555;font-size:12px;line-height:1.8;">
                <li>Pay the balance <strong>${formatINR(data.balanceDue)}</strong> to your guide on the day of the tour.</li>
                <li>Show this email or the attached PDF to your guide at the meeting point.</li>
                <li>Free cancellation if cancelled 48+ hours before travel date.</li>
                <li>Please arrive at the meeting point 10 minutes early.</li>
              </ul>
            </div>
          </td>
        </tr>

        <!-- Contact -->
        <tr>
          <td style="padding:0 32px 32px;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#FF9933;text-transform:uppercase;letter-spacing:1px;">Need Help?</p>
            <p style="margin:0;font-size:13px;color:#555;">📞 <a href="tel:+919639591697" style="color:#1a1a2e;">+91-96395 91697</a> · <a href="tel:+917078117174" style="color:#1a1a2e;">+91-70781 17174</a></p>
            <p style="margin:4px 0 0;font-size:13px;color:#555;">✉ <a href="mailto:brajpathpradarshak@gmail.com" style="color:#FF9933;">brajpathpradarshak@gmail.com</a></p>
          </td>
        </tr>

        <!-- Footer -->
        <tr><td style="height:4px;background:linear-gradient(90deg,#FF9933,#FFD700,#FF9933);"></td></tr>
        <tr>
          <td style="background:#1a1a2e;padding:16px 32px;text-align:center;">
            <p style="margin:0;font-size:14px;color:#FFD700;font-weight:700;">Jai Shri Krishna 🙏</p>
            <p style="margin:4px 0 0;font-size:11px;color:rgba(255,255,255,0.4);">Braj Path Pradarshak · Govardhan, Mathura · www.brajpathpradarshak.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const result = await resend.emails.send({
    from: "Braj Path Pradarshak <bookings@brajpathpradarshak.com>",
    to: data.email,
    subject: `✅ Booking Confirmed — ${data.bookingId} | ${data.packageTitle}`,
    html,
    attachments: [
      {
        filename: `Booking_${data.bookingId}.pdf`,
        content: pdfBuffer,
      },
    ],
  });

  return result;
}
