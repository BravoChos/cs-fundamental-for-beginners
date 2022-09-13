class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: "Martin", lastName: "Fowler" });

export function getDefaultOwner() {
  return defaultOwner;
}

const owner = getDefaultOwner();
console.log(owner.firstName);
console.log(getDefaultOwner());
