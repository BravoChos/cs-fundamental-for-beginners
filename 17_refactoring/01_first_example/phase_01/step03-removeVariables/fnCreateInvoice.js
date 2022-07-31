import invoices from "./invoices.json" assert { type: "json" };
import plays from "./plays.json" assert { type: "json" };

function statement(_invoice, _plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Invoice Detail (customer: ${_invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    stylke: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of _invoice.performances) {
    // const play = _plays[perf.playID];
    // const play = playFor(perf);
    // let thisAmount = amountFor(perf, playFor(perf));
    // let thisAmount = amountFor(perf);

    // save points
    volumeCredits += Math.max(perf.audience - 30, 0);
    // give extra points for every 5 "comedy" customers
    if ("comedy" === playFor(perf).type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // print invoice
    result += ` ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    } seat(s))\n`;
    totalAmount += amountFor(perf);
  }
  result += `total amount: $${format(totalAmount / 100)}\n`;
  result += `extra credits: ${volumeCredits} points\n`;
  return result;
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
console.log(statement(invoices[0], plays));
