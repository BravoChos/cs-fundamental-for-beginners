import invoices from "./invoices.json" assert { type: "json" };
import plays from "./plays.json" assert { type: "json" };

function statement(_invoice, _plays) {
  let result = `Invoice Detail (customer: ${_invoice.customer})\n`;

  for (let perf of _invoice.performances) {
    result += ` ${playFor(perf).name}: ${USD(amountFor(perf))} (${
      perf.audience
    } seat(s))\n`;
  }

  // step 1. split Loop & slide statements
  // let volumeCredits = 0;
  // for (let perf of _invoice.performances) {
  //   volumeCredits += volumeCreditsFor(perf);
  // }
  // step 2. extract function
  // let volumeCredits = totalVolumeCredits();
  // step 3. inline variables
  result += `total amount: $${USD(totalAmount())}\n`;
  result += `extra credits: ${totalVolumeCredits()} points\n`;
  return result;

  function totalAmount() {
    let result = 0;
    for (let perf of _invoice.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of _invoice.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }
}

function amountFor(aPerformance) {
  let result = 0;

  switch (playFor(aPerformance).type) {
    case "family":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
        break;
      }
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown jenre: ${playFor(aPerformance).type}`);
  }

  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type) {
    result += Math.floor(aPerformance.audience / 5);
  }
  return result;
}

function USD(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

console.log(statement(invoices[0], plays));
