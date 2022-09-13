let defaultOwner = new Person({ firstName: "Martin", lastName: "Fowler" });

export function getDefaultOwner() {
  return defaultOwner;
}

// Use Case
const owner = getDefaultOwner();
owner.firstName = "Song"; // possible!!
console.log(owner);
console.log(getDefaultOwner());
