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
    const play = _plays[perf.playID];
    let thisAmount = 0;

    switch (play.type) {
      case "family":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
          break;
        }
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown jenre: ${play.type}`);
    }

    // save points
    volumeCredits += Math.max(perf.audience - 30, 0);
    // give extra points for every 5 "comedy" customers
    if ("comedy" === play.type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // print invoice
    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    } seat(s))\n`;
    totalAmount += thisAmount;
  }
  result += `total amount: $${format(totalAmount / 100)}\n`;
  result += `extra credits: ${volumeCredits} points\n`;
  return result;
}

console.log(statement(invoices[0], plays));
