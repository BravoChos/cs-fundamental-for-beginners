// Example 1
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// Example 2
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // accelerater(a) = force(F) / mass(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // distanceTravelled
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // consider secondaryAcceleration
    const primaryVelocity = acc * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// Example 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
