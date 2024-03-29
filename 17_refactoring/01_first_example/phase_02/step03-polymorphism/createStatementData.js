function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "family":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`unknown jenre: ${aPlay.type}`);
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  // get amount() {
  //   let result = 0;

  //   switch (this.play.type) {
  //     case "family":
  //       result = 40000;
  //       if (this.performance.audience > 30) {
  //         result += 1000 * (this.performance.audience - 30);
  //         break;
  //       }
  //     case "comedy":
  //       result = 30000;
  //       if (this.performance.audience > 20) {
  //         result += 10000 + 500 * (this.performance.audience - 20);
  //       }
  //       result += 300 * this.performance.audience;
  //       break;
  //     default:
  //       throw new Error(`unknown jenre: ${this.play.type}`);
  //   }

  //   return result;
  // }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
    // if ("comedy" === this.play.type) {
    //   result += Math.floor(this.performance.audience / 5);
    // }
    // return result;
  }
}
class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return Math.floor(this.performance.audience / 5);
  }
}

export default function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;

  function enrichPerformance(aPerformance) {
    // const calculator = new PerformanceCalculator(
    //   aPerformance,
    //   playFor(aPerformance)
    // );
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = { ...aPerformance };
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
