import Razorpay from "razorpay";

// Lazy singleton — validated at request time, not at build/module-eval time.
// This prevents Next.js from crashing during static page-data collection.
let _razorpay: Razorpay | null = null;

export function getRazorpay(): Razorpay {
  if (_razorpay) return _razorpay;

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error(
      "RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment variables"
    );
  }

  _razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  return _razorpay;
}

// Keep a default export for any code that imports the instance directly
export default { getRazorpay };
