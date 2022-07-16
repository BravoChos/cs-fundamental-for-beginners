# Object Oriented Programming (OOP)

OOP is a programming `paradigm` based on the concept of 'object' which can contain `data` and `code`.

## Imperative and Procedural Programming

### Disadvantages of Procedural Programming

- The program code is harder to understand and write when Procedural Programming is employed.
- The Procedural code is often not reusable, which may pose the need to recreate the code if is needed to use in another application.
- Difficult to relate with real-world objects.
- Hard to maintain the code.

### Advantage of OOP

- Re-usablility
- Data Redundancy
- Code maintenance
- Security: by use of data hiding and absstractio mechanism
- Easy troubleshooting
- Polymorphism Flexibility
- Productivity, High Quality, Faster Development

## Class

- template
- declare once
- no data in

## Object

- insance of a class
- created many times
- data in

## Method

- Can modify a class state that would apply across all the instances of the class

# 4 Principles of Object-Oriented Programming

The four principles of object-oriented programming (abstraction, inheritance, encapsulation, and polymorphism) are features that - if used properly - can help us write more testable, flexible, and maintainable code.

1. Encapsulation

Encapsulation is accomplished when each object maintains a private state, inside a class. Other objects can not access this state directly, instead, they can only invoke a list of public functions.

The object manages its own state via these functions and no other class can alter it unless explicitly allowed.

In order to communicate with the object, you will need to utilize the methods provided.

2. Abstraction

Abstraction is an extension of encapsulation. It is the process of selecting data from a larger pool to show only the relevant details to the object.

One of the advantages of Abstraction is being able to apply the same information you used for the dating application to other applications with little or no modification.

3. Inheritance

Inheritance is the ability of one object to acquire some/all properties of another object. With inheritance, reusability is a major advantage.

4. Polymorphism (= Many Form)

Polymorphism gives us a way to use a class exactly like its parent so there is no confusion with mixing types. This being said, each child sub-class keeps its own functions/methods as they are.

## Excercise

### Step 1. Create makeCoffee function without OOP

Create a `makeCoffee` funciton, which takes `shots` as a argument and return `CoffeeCup` object. And if beans are all out, then throw and error.

#example solution
(01_without-oop.ts)

```
ts-node 01_without-oop.ts
```

### Step 2. Create CoffeeMake class!

#example solution
(02_class.ts)

### Step 3. Encapsulate CoffeMake class!

`Class Modifier`

| Modifier  | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| public    | No access restriction. Can be accessed from an object or any child class         |
| private   | Can only be accessed from within the class that defines it                       |
| protected | Can only be accessed from within the class that defines it, as well as any child |

#example solution
(03_encapsulation.ts)

### Step 4. Abstraction (feat. interface)

#example
(04_abstraction.ts)

### Step 5. Inheritance

#example
(05_inheritance.ts)

### Step 6. Polymorphism

#example
(06_polymorphism.ts)

### Step 7. Composition

#example
(07_composition.ts)
