// example 1
class Order {
  // ... assume there are other codes..
  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(value) {
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
  }
}

// example 2
class ProductionPlan {
  // ... assume there are other codes..
  get production() {
    return this._production;
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}
