class Organization {
  #name;
  #country;
  constructor(data) {
    this.data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    return { ...this.data }; // shallow copy, use cloneDeep!
  }
}

const organization = new Organization({
  name: "Nomad Coder",
  country: "KR",
});

organization.name = "Happy Coding";
console.log(organization.name);
console.log(organization.country);
