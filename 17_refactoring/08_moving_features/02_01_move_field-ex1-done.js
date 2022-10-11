export class Customer {
  #name;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  becomePreferred() {
    this.contract.#discountRate += 0.03;
    // assume there are more codes..
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contact.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }
  get discountRate() {
    return this.#discountRate;
  }
  set discountRate(value) {
    this.#discountRate = value;
  }
}
