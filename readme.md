# Study Guide

The assessment will be a closed-book assessment, so you’re expected to memorize all the syntax.

## Syntax Covered

- Expressions - Know how to use these expressions and understand 
    - Logical operators (&&, ||, !, !!)
    - comparison operators (<,>,<=,>=,==,===, !=, !==)
    - understand truthy/falsy vs. true/false
- Datatypes - 
    - Know by heart the 5 primitive data types we’ve learned 
        - number, string, boolean, undefined, null
    - Use typeof to determine the data type of js 
    - Know the difference between reference types and immutable types
- Control Flow - 
    - If / else / else if statements
        - Know the syntax
        - Be able to express complex conditional statements
    - Ternaries
- Variables - 
    - const, let, var
        - Declaration, assignment, and initialization
- Scopes -
    - Function
    - Global
    - Block scope
- Functions - 
    - differentiate  between a function declaration and a function invocation/call
    - Know how to use and explain the difference between Parameters / Arguments
    - know the difference between input (arguments) and output (the function's `return` value)
    - Higher order functions and callbacks
    - Understand the difference between returning from a function and console logging in a function
Loops - 
    - Know how to use a while loop/ classic for loop / for.. of.. loop to  
        - Iterate over an array or string 
        - Use break to stop the execution of a loop
        - for while and classic for also be able to iterate over a range of numbers
- Arrays - 
    - Indexing
    - Bracket notation
    - Getting a value from an array
    - Setting a value in an array
    - Use length 
- Objects -
    - Assigning/updating/getting/deleting values using bracket and dot notation
    - Creating dynamic keys using bracket notation

## Native JS Methods

For this section you should know how to use the methods and also what the return value is from using them. Example - using `.push()` evaluates to the new length of the array

```js
const arr = [1,2,3,4];
const returnValueFromUsingPush = arr.push(10);
console.log(returnValueFromUsingPush); // 5
```

### Array

- length
- push, pop
- shift, unshift
- slice
- join
- splice
- indexOf
- concat
- includes
- map
- filter
- find
- some
- every
- reduce
- sort (bonus)
- ... (spread operator)

### String

- length
- split
- slice
- toUpperCase
- toLowerCase
- includes

### Objects

- Object.keys
- Object.values
- Object.entries
- Object.assign
- ... (spread operator)

### Other

- Math.min
- Math.max
- Math.floor
- Math.ceil

## Know how to - 

- Given a variable with a number value determine if it's even or odd
- Given a variable with a string value determine if the string's length is greater than a given number
- concat two strings together
- use interpolation to get the value of a variable in a string
- Sum up a range of numbers
- Sum up all the odd/even numbers in a range of numbers
- Get the first element of an array
- Get the last element of an array
- replace an element at a given index in an array
- Remove an element from the beginning of an array
- Remove an element from the end of an array
- Remove an element at a given index in an array
- Given a string turn all it's characters to upper case
- Given a string of words, properly capitalize each word
- Given an array, return the element at the mid index
- Given an array of numbers, return the sum of all numbers
- Given an array of numbers return the sum of all odd/even numbers
- Given an array of numbers return the max/min num
    - Using the accumulator pattern and a loop
    - Using .reduce
    - Using Math.max/min
- Given an array of numbers, return a new array with all the numbers doubled
    - Using a for loop and the accumulator pattern
    - Using .map
- Given an array of numbers, return a new array with only the odd numbers
    - Using a for loop and the accumulator pattern
    - Using .filter
- Given an array and a target element return the element if it's there, or an error message if it't not
    - Using a for loop and the accumulator pattern
    - Using .find
- Given an object, a key and a value, set the key in the object to the value if it doesn't exist and return the object. If the key exist don't change the object and just return it as is.
- Given an array with duplicate elements return a new array with only unique elements
- Given an array return an object with the elements as keys and the count of them as values
- Given an object, return an array of all the keys
- Given an object, return an array of all the values
- Given an array of object where each object has a key pointing to an array, return the object with the longest array
- Given a decimal number round it up/down
- Given an array of objects, and a key return a new array of only the value of the corresponding key

