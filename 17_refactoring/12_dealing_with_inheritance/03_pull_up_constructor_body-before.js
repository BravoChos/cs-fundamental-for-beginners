class Party {}

class Employee extends Party {
  #name;
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super();
    this.#name = name;
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  #name;
  #staff;
  constructor(name, staff) {
    super();
    this.#name = name;
    this.#staff = staff;
  }
}

const chase = new Employee("Chase", 123, 13);
const department = new Department("development", chase);
