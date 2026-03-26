export interface BookingInput {
  name: string;
  email: string;
  phone: string;
  date: string;
  packageTitle: string;
  packageSlug: string;
  travelers: number;
  pricePerPerson: number;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/; // Indian mobile number

export function validateBookingInput(input: Partial<BookingInput>): ValidationResult {
  const errors: string[] = [];

  if (!input.name || input.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!input.email || !EMAIL_RE.test(input.email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!input.phone || !PHONE_RE.test(input.phone.replace(/\s|-/g, ""))) {
    errors.push("Please enter a valid 10-digit Indian mobile number.");
  }

  if (!input.date) {
    errors.push("Travel date is required.");
  } else {
    const travelDate = new Date(input.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (travelDate < today) {
      errors.push("Travel date cannot be in the past.");
    }
  }

  if (!input.packageTitle || input.packageTitle.trim() === "") {
    errors.push("Please select a package.");
  }

  if (!input.travelers || input.travelers < 1 || input.travelers > 50) {
    errors.push("Number of travelers must be between 1 and 50.");
  }

  if (!input.pricePerPerson || input.pricePerPerson < 1) {
    errors.push("Invalid package price.");
  }

  return { valid: errors.length === 0, errors };
}
