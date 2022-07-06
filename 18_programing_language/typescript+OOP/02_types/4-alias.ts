{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true; // 💩??

  // More Example) Type: union, literal, aliases
  type Combinable = number | string;
  type ConversionDescriptor = "as-number" | "as-text";

  function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }

  const combinedAges = combine(30, 26, "as-number");
  console.log(combinedAges);

  const combinedStringAges = combine("30", "26", "as-number");
  console.log(combinedStringAges);

  const combinedNames = combine("Max", "Anna", "as-text");
  console.log(combinedNames);
}
