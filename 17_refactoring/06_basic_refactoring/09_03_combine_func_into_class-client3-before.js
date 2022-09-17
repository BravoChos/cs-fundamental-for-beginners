const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

// Client 1
// const readingClient1 = acquireReading();
// console.log(readingClient1.baseCharge);

// Client 2
// const aReading = acquireReading();
// const base = baseRate(aReading.month, aReading.year) * aReading.quantity;

// function taxThreshold(year) {
//   return 0.1;
// }

// client 3
const aReading = acquireReading();

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

const basicChargeAmount = calculateBaseCharge(aReading);
