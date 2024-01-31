# Study Guide

The assessment is a closed-book examination, and it is expected that you memorize all the syntax.

## Syntax Covered

### Expressions
- Understand and use logical operators (`&&`, `||`, `!`, `!!`)
- Work with comparison operators (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`)
- Differentiate between truthy/falsy values and true/false values

### Datatypes
- Recognize and use the 5 primitive data types:
  - `number`, `string`, `boolean`, `undefined`, `null`
- Utilize `typeof` to determine the data type in JavaScript
- Understand the difference between reference types and immutable types

### Control Flow
- Use if/else/else if statements
  - Familiarize yourself with the syntax
  - Express complex conditional statements
- Employ ternaries for concise conditional expressions

### Variables
- Understand and use `const`, `let`, `var`
  - Master declaration, assignment, and initialization

### Scopes
- Comprehend function scope
- Distinguish global and block scope

### Functions
- Differentiate between a function declaration and a function invocation/call
- Understand the use and distinction between parameters and arguments
- Recognize the difference between input (arguments) and output (the function's `return` value)
- Explore higher-order functions and callbacks
- Differentiate between returning from a function and console logging in a function

### Loops
- Use a `while` loop, classic `for` loop, or `for..of` loop to
  - Iterate over an array or string
  - Implement `break` to stop the execution of a loop
  - Iterate over a range of numbers using `for`, `while`, and classic `for`

### Arrays
- Understand indexing
- Use bracket notation
- Get and set values in an array
- Utilize the `length` property

### Objects
- Assign, update, get, and delete values using bracket and dot notation
- Create dynamic keys using bracket notation

## Native JS Methods

For this section, know how to use methods and understand their return values. For example, using `.push()` evaluates to the new length of the array.

```javascript
const arr = [1, 2, 3, 4];
const returnValueFromUsingPush = arr.push(10);
console.log(returnValueFromUsingPush); // 5
```

### Array
- `length`
- `push`, `pop`
- `shift`, `unshift`
- `slice`
- `join`
- `splice`
- `indexOf`
- `concat`
- `includes`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- `sort` (bonus)
- `...` (spread operator)

### String
- `length`
- `split`
- `slice`
- `toUpperCase`
- `toLowerCase`
- `includes`

### Objects
- `Object.keys`
- `Object.values`
- `Object.entries`
- `Object.assign`
- `...` (spread operator)

### Other
- `Math.min`
- `Math.max`
- `Math.floor`
- `Math.ceil`

## Practical Knowledge

### Given a Variable or Array:
- Determine if a number is even or odd
- Check if a string's length is greater than a given number
- Concatenate two strings
- Use interpolation to incorporate a variable's value in a string
- Sum up a range of numbers
- Sum up all odd/even numbers in a range
- Retrieve the first and last elements of an array
- Replace an element at a given index in an array
- Remove elements from the beginning, end, or a specific index in an array
- Convert a string to uppercase
- Properly capitalize each word in a string
- Return the element at the mid index of an array
- Calculate the sum of all numbers in an array
- Calculate the sum of all odd/even numbers in an array
- Find the max/min number in an array using different methods
- Create a new array with doubled numbers
- Create a new array with only odd numbers
- Find an element in an array or return an error message if it's not present
- Given an object, key, and value, set the key in the object to the value if it doesn't exist
- Create a new array with unique elements from an array with duplicates
- Return an object with elements as keys and their count as values
- Return an array of all keys from an object
- Return an array of all values from an object
- Identify the object with the longest array among an array of objects
- Round a decimal number up or down
- Create a new array with only the values of a specific key from an array of objects

## Objects and Arrays of Objects

### Objects
- Remove a specific property from an object
- Merge two objects into a new object
- Find the object with the longest array value among an array of objects
- Sort objects in ascending order based on a specific property
- Filter objects based on a specified property and value

### Remaining Console Logs:

- Given an array of objects and a key, return a new array of only the values of the corresponding key.
- Write a function that finds the LCM (Least Common Multiple) of two numbers.
- Write a function that finds the longest common prefix among an array of strings.
- Write a function that finds the missing number in an array.
- Write a function that checks if a given string is a valid number.
- Write a function that checks if a given number is a Fibonacci number.