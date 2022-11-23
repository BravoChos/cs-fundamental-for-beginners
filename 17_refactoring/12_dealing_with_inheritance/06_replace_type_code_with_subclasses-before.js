class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.validateType(type);
    this.#name = name;
    this.#type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`There are no such type name ${arg}`);
    }
  }

  get type() {
    return this.#type;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

const ellie = new Employee("David", "engineer");
const bob = new Employee("Bob", "manager");
