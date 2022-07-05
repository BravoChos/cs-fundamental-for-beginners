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
