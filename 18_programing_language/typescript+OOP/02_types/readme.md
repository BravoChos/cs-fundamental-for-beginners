# Types is Typescript

## 1. Basic

(example code: 1-basic.ts)

#Note:

- TS eventually convered into JS!
- Select any target TS version available => no compatibility issue.
- Can use Babel
- Types in JS

  - primitive: number, string, boolean, int, symbol, null, undefiend
  - object: function, array ...

### Basic types in TS are ...

1. number
2. string
3. boolean
4. undefined
5. null
6. unknown: not sure what type would be => not recommended!!
7. any: allow any types (joker) => not recommeneded!!
8. void: no returns => ex) console.log(...)
9. never:
10. object: can contain any types in object from

## 2. functions

(example code: 2-function.ts)

A function’s type has the same two parts: the type of the arguments and the return type. When writing out the whole function type, both parts are required. Again this type name helps readability of codes.

### 2.1 Optional and Default Parameters

In JavaScript, every parameter is optional Whereas in typeScript, every parameter is assumed to be required by the function.

We can achieve this optional functionality by adding a `?` to the end of parameters.

> Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution. A parameter can be marked optional by appending a question mark to its name. The optional parameter should be set as the last argument in a function.

Function parameters can also be assigned values by default known as default parameter. However, such parameters can also be explicitly passed values.

### 2.2 Rest Parameter

Rest parameters are treated as a boundless number of optional parameters. When passing arguments for a rest parameter, you can use as many as you want; you can even pass none. The compiler will build an array of the arguments passed in with the name given after the ellipsis `(...)`, allowing you to use it in your function.

## 3. Array and Tuple

(example code: 3-array.ts)

Array: Any JavaScript array, type can be flexible or strict (regarding the element types)
Tuple:: Added by TypeScript: Fixed-length array (not recommended)
(UseCase. react => useState function)

## 4. Alias and Union

(example code: 4-alias.ts and 5-union.ts)

## 5. Intersection and Enums

(example code: 6-intersection.ts and 7-enums.ts)

Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

### Are enums useful?

Not exactly in JS, because type is not secured in JS.
So it's better to use `union` type instead.

Enums might be useful when co-wokring with moblie app developer since there are no union type in app client.

## 6. Inference and assertion

(example code: 8-inference.ts and 9-assertion.ts)

Try not to rely on `inference`, and not recommended using assertion.

## Projects

1. Calculator
2. Game
3. Loading

How to play (example)

```
ts-node game_solution.ts
```
