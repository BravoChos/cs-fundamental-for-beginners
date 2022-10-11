export class Customer {
  #name;
  #discountRate;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(this.dateToday());
  }

  get discountRate() {
    return this.#discountRate;
  }

  becomePreferred() {
    this.#discountRate += 0.03;
    // assume there are more codes..
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  constructor(startDate) {
    this.#startDate = startDate;
  }
}
