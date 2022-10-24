// Example 1
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

// Example 2
function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // accelerater(a) = force(F) / mass(m)
  let primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime; // distanceTravelled
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // consider secondaryAcceleration
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }
}

// Example 3
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
