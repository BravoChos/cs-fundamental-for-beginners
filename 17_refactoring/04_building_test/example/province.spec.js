import { Province } from "./Province.js";
import { expect, assert } from "chai";

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}

describe("province", function () {
  let asia;
  this.beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", function () {
    assert.equal(asia.shortfall, 5);
  });
  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
