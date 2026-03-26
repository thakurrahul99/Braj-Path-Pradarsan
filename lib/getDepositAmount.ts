/**
 * Calculates the compulsory advance deposit amount based on package price per person.
 *
 * Deposit tiers (per person):
 *   ≤ ₹1,499  → ₹200  (1-day tours)
 *   ₹1,500 – ₹3,999 → ₹500  (2-day yatras)
 *   ₹4,000+   → ₹1,000 (premium/4-day tours)
 */

export interface DepositBreakdown {
  depositPerPerson: number;
  totalDeposit: number;      // deposit × travelers
  totalPackagePrice: number; // pricePerPerson × travelers
  balanceDue: number;        // totalPackagePrice - totalDeposit
}

export function getDepositAmount(
  pricePerPerson: number,
  travelers: number
): DepositBreakdown {
  let depositPerPerson: number;

  if (pricePerPerson <= 1499) {
    depositPerPerson = 200;
  } else if (pricePerPerson <= 3999) {
    depositPerPerson = 500;
  } else {
    depositPerPerson = 1000;
  }

  const totalDeposit = depositPerPerson * travelers;
  const totalPackagePrice = pricePerPerson * travelers;
  const balanceDue = totalPackagePrice - totalDeposit;

  return { depositPerPerson, totalDeposit, totalPackagePrice, balanceDue };
}
