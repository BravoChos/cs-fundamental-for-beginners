interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const chase = new FullTimeEmployee();
const bob = new PartTimeEmployee();
chase.workFullTime();
bob.workPartTime();

const chaseAfterPay = pay(chase);
const bobAfterPay = pay(bob);

const obj = {
  name: "chase",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // chase
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
