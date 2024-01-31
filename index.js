// Write a function that takes a number as an argument and returns 'even' or 'odd'.

// console.log(evenOrOdd(5)); // Output: 'odd'
// console.log(evenOrOdd(4)); // Output: 'even'

// ------------------------------------------------------------

// Create a function that checks if the length of a given string is greater than a specified number. Return true or false.

// console.log(isStringLengthGreaterThan("Hello, World!", 5)); // Output: true

// console.log(isStringLengthGreaterThan("Hello", 5)); // Output: false

// ------------------------------------------------------------

// Implement a function that concatenates two strings and returns the result.

// console.log(concatenateStrings("Hello", "World")); // Output: 'HelloWorld'

// ------------------------------------------------------------

// Write a function using interpolation to generate a string that includes the value of a given variable.

// console.log(interpolateVariable("My age is: ", 25)); // Output: 'My age is: 25'

// console.log(interpolateVariable("My age is: ", 30)); // Output: 'My age is: 25'

// ------------------------------------------------------------

// Develop a function that calculates the sum of numbers in a given range.

// console.log(sumRange(1, 5)); // Output: 15
// console.log(sumRange(1, 6)); // Output: 21

// ------------------------------------------------------------

// Create a function that sums up all odd numbers in a given range using a loop.

// console.log(sumOddNumbersInRange(1, 10)); // Output: 25
// console.log(sumOddNumbersInRange(1, 11)); // Output: 36

// ------------------------------------------------------------

// Implement a function that returns the first element of an array.

// console.log(getFirstElement([1, 2, 3])); // Output: 1
// console.log(getFirstElement([2, 3])); // Output: 2

// ------------------------------------------------------------

// Write a function to get the last element of an array.

// console.log(getLastElement([1, 2, 3])); // Output: 3
// console.log(getLastElement([1, 2, 3, 4])); // Output: 4

// ------------------------------------------------------------

// Build a function to replace an element at a specific index in an array and returns the altered array.

// console.log(replaceElementAtIndex([1, 2, 3], 1, 5)); // Output: [1, 5, 3]
// console.log(replaceElementAtIndex([1, 2, 3], 2, 6)); // Output: [1, 5, 6]

// ------------------------------------------------------------

// Develop a function that removes an element from the beginning of an array.

// console.log(removeFirstElement([1, 2, 3])); // Output: [2, 3]
// console.log(removeFirstElement([0, 1, 2, 3])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// Create a function to remove an element from the end of an array and return the removed element.

// console.log(removeLastElement([1, 2, 3])); // Output: 3
// console.log(removeLastElement([1, 2, 3, 4])); // Output: 4

// ------------------------------------------------------------

// Implement a function to remove an element at a given index in an array and returns the input array.

// console.log(removeElementAtIndex([1, 2, 3], 1)); // Output: [1, 3]
// console.log(removeElementAtIndex([1, 2, 3], 2)); // Output: [1, 2]

// ------------------------------------------------------------

// Write a function that converts all characters in a string to uppercase.

// console.log(toUpperCaseString("hello")); // Output: 'HELLO'
// console.log(toUpperCaseString("world")); // Output: 'WORLD'

// ------------------------------------------------------------

// Create a function to properly capitalize each word in a string of words.

// console.log(capitalizeWords("hello world")); // Output: 'Hello World'
// console.log(capitalizeWords("whats up joe?")); // Output: 'Whats Up Joe?'

// ------------------------------------------------------------

// Develop a function that returns the element at the middle index of an array.

// console.log(getMidIndexElement([1, 2, 3, 4, 5])); // Output: 3

// console.log(getMidIndexElement([1, 2, 3, 4, 5, 6, 7])); // Output: 4

// ------------------------------------------------------------

// Implement a function to calculate the sum of all numbers in an array.

// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// ------------------------------------------------------------

// Create a function that returns the sum of all odd or even numbers in an array.

// console.log(sumOddNumbersArray([1, 2, 3, 4])); // Output: 4
// console.log(sumOddNumbersArray([1, 2, 3, 4, 5])); // Output: 9

// ------------------------------------------------------------

// Write a function to find the maximum number in an array using a loop and the accumulator pattern.

// console.log(findMaxUsingLoop([1, 5, 3, 8, 2])); // Output: 8
// console.log(findMaxUsingLoop([1, 5, 3, 2])); // Output: 5

// ------------------------------------------------------------

// Develop a function to find the minimum number in an array using the .reduce method.

// console.log(findMinUsingReduce([1, 5, 3, 8, 2])); // Output: 1

// console.log(findMinUsingReduce([5, 3, 8, 2])); // Output: 2

// ------------------------------------------------------------

// 20. Create a function to find the maximum number in an array using Math.max.

// console.log(findMaxUsingMathMax([1, 5, 3, 8, 2])); // Output: 8

// 21. Implement a function to create a new array with all numbers doubled using a for loop and the accumulator pattern.

// console.log(doubleNumbersUsingLoop([1, 2, 3])); // Output: [2, 4, 6]

// 22. Write a function to create a new array with all numbers doubled using the .map method.

// console.log(doubleNumbersUsingMap([1, 2, 3])); // Output: [2, 4, 6]

// 23. Develop a function to create a new array with only the odd numbers using a for loop and the accumulator pattern.

// console.log(oddNumbersUsingLoop([1, 2, 3])); // Output: [1, 3]

// 24. Create a function to create a new array with only the odd numbers using the .filter method.

// console.log(oddNumbersUsingFilter([1, 2, 3])); // Output: [1, 3]

// 25. Implement a function to find an element in an array using a for loop and the accumulator pattern.

// console.log(findElementUsingLoop([1, 2, 3], 2)); // Output: 2

// 26. Write a function to find an element in an array using the .find method.

// console.log(findElementUsingFind([1, 2, 3], 2)); // Output: 2

// 27. Develop a function to set a key in an object to a value if it doesn't exist, and return the object. If the key exists, return the object as is.

// console.log(setKeyValueInObject({ key1: 'value1' }, 'key2', 'value2')); 
// Output: { key1: 'value1', key2: 'value2' }

// 28. Create a function to return a new array with only unique elements from an array with duplicate elements.

// console.log(uniqueElementsArray([1, 2, 2, 3])); // Output: [1, 2, 3]

// 29. Write a function to return an object with the elements as keys and the count of them as values.

// console.log(elementsCountObject([1, 2, 2, 3])); 
// Output: { '1': 1, '2': 2, '3': 1 }

// 30. Implement a function to return an array of all the keys in an object.

// console.log(keysArray({ key1: 'value1', key2: 'value2' })); 
// Output: ['key1', 'key2']

// 31. Develop a function to return an array of all the values in an object.

// console.log(valuesArray({ key1: 'value1', key2: 'value2' })); 
// Output: ['value1', 'value2']

// 32. Create a function to find the object with the longest array among an array of objects, each containing a key pointing to an array.

// console.log(objectWithLongestArray([
//   { key: 'array1', value: [1, 2, 3] },
//   { key: 'array2', value: [1, 2, 3, 4, 5] }
// ])); // Output: { key: 'array2', value: [1, 2, 3, 4, 5] }

// 33. Write a function to round up a decimal number.

// console.log(roundUpDecimal(3.14)); // Output: 4

// 34. Implement a function to round down a decimal number.

// console.log(roundDownDecimal(3.14)); // Output: 3

// 35. Develop a function to return a new array of only the values of a specified key from an array of objects.

// console.log(arrayValuesByKey([
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Bob', age: 35 }
// ], 'age')); // Output: [30, 25, 35]

// 36. Write a function to return the value of a decimal number rounded to the nearest whole number.

// console.log(roundToNearestWholeNumber(3.5)); // Output: 4

// 37. Develop a function to return the sum of all numbers in an array using the .reduce method.

// console.log(sumArrayReduce([1, 2, 3, 4])); // Output: 10

// 38. Create a function to return the product of all numbers in an array using the .reduce method.

// console.log(productArrayReduce([1, 2, 3, 4])); // Output: 24

// 39. Implement a function to calculate the average of numbers in an array.

// console.log(averageArray([1, 2, 3, 4])); // Output: 2.5

// 40. Write a function to calculate the factorial of a given number.

// console.log(factorial(5)); // Output: 120

// 41. Develop a function to return the reverse of a given string.

// console.log(reverseString("hello")); // Output: 'olleh'

// 42. Create a function that checks if a string is a palindrome.

// console.log(isPalindrome("racecar")); // Output: true

// 43. Implement a function to remove white spaces from both ends of a string.

// console.log(trimWhitespace("  hello  ")); // Output: 'hello'

// 44. Write a function to check if a given string contains a specific substring.

// console.log(containsSubstring("Hello, World!", "World")); // Output: true

// 45. Develop a function to convert a temperature from Celsius to Fahrenheit.

// console.log(celsiusToFahrenheit(25)); // Output: 77

// 46. Create a function to generate a random number within a specified range.

// console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10

// 47. Implement a function to shuffle the elements of an array.

// console.log(shuffleArray([1, 2, 3, 4])); // Output: Shuffled array

// 48. Write a function to find the longest word in a given string.

// console.log(findLongestWord("The quick brown fox")); // Output: 'quick'

// 49. Develop a function to find the second largest number in an array.

// console.log(findSecondLargestNumber([1, 5, 3, 8, 2])); // Output: 5

// 50. Create a function to capitalize the first letter of each word in a sentence.

// console.log(capitalizeFirstLetterOfWords("hello world")); // Output: 'Hello World'

// 51. Implement a function to count the occurrences of a specific element in an array.

// console.log(countOccurrences([1, 2, 2, 3], 2)); // Output: 2

// 52. Write a function to remove duplicates from an array.

// console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]

// 53. Develop a function to sort an array of strings in alphabetical order.

// console.log(sortAlphabetically(["banana", "apple", "orange"])); // Output: ['apple', 'banana', 'orange']

// 54. Create a function to check if all elements in an array are of the same type.

// console.log(areAllSameType([1, 2, 'three'])); // Output: false

// 55. Implement a function to find the index of the first occurrence of a given element in an array.

// console.log(findIndexOfElement([1, 2, 3], 2)); // Output: 1

// 56. Write a function to check if a number is prime.

// console.log(isPrime(7)); // Output: true

// 57. Develop a function to reverse the order of elements in an array.

// console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]

// 58. Create a function to merge two sorted arrays into a new sorted array.

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// 59. Implement a function to extract numbers from a string and return them as an array.

// console.log(extractNumbersFromString("Age: 25, Height: 180cm")); // Output: [2, 5, 1, 8, 0]

// 60. Write a function to calculate the area of a rectangle given its length and width.

// console.log(calculateRectangleArea(5, 10)); // Output: 50

// 61. Develop a function to calculate the perimeter of a rectangle given its length and width.

// console.log(calculateRectanglePerimeter(5, 10)); // Output: 30

// 62. Create a function to generate a Fibonacci sequence up to a specified number of terms.

// console.log(generateFibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]

// 63. Implement a function to find the intersection of two arrays.

// console.log(findArrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 64. Write a function to check if a given year is a leap year.

// console.log(isLeapYear(2024)); // Output: true

// 65. Develop a function to convert a binary number to a decimal number.

// console.log(decimalToBinary(10)); // Output: '1010'

// 66. Create a function to reverse the order of words in a sentence.

// console.log(reverseWordsInSentence("Hello, World!")); // Output: 'World! Hello,'

// 67. Implement a function to check if two strings are anagrams.

// console.log(areAnagrams("listen", "silent")); // Output: true

// 68. Write a function to check if a number is a power of two.

// console.log(isPowerOfTwo(16)); // Output: true

// 69. Develop a function to rotate elements in an array to the left by a given number of positions.

// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]

// 70. Create a function to find the difference between two arrays.

// console.log(findArrayDifference([1, 2, 3], [2, 3, 4])); // Output: [1]

// 71. Implement a function to calculate the square root of a given number.

// console.log(calculateSquareRoot(25)); // Output: 5

// 72. Write a function to generate a random password of a specified length.

// console.log(generateRandomPassword(8)); // Output: Random password

// 73. Develop a function to find the union of two arrays.

// console.log(findArrayUnion([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

// 74. Create a function to check if a string is a valid email address.

// console.log(isValidEmailAddress("user@example.com")); // Output: true

// 75. Implement a function to capitalize the first letter of a string.

// console.log(capitalizeFirstLetter("hello")); // Output: 'Hello'

// 76. Write a function to check if a given number is within a specified range.

// console.log(isNumberInRange(5, 1, 10)); // Output: true

// 77. Develop a function to count the number of vowels in a string.

// console.log(countVowels("Hello, World!")); // Output: 3

// 78. Create a function to find the maximum sum of subarray of a given array.

// console.log(maxSumSubarray([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 7

// 79. Implement a function to convert a decimal number to binary.

// console.log(decimalToBinary(10)); // Output: '1010'

// 80. Write a function to check if a given array is sorted in ascending order.

// console.log(isArraySortedAscending([1, 2, 3, 4])); // Output: true

// 81. Develop a function to find the majority element in an array.

// console.log(findMajorityElement([1, 2, 2, 2, 3])); // Output: 2

// 82. Create a function to check if a string contains only digits.

// console.log(containsOnlyDigits("123")); // Output: true

// 83. Implement a function to generate a random color code.

// console.log(generateRandomColorCode()); // Output: Random color code

// 84. Write a function to calculate the area of a circle given its radius.

// console.log(calculateCircleArea(5)); // Output: 78.54

// 85. Develop a function to check if a given string is a valid palindrome sentence.

// console.log(isValidPalindromeSentence("A man, a plan, a canal, Panama!")); // Output: true

// 86. Create a function to find the mode of an array.

// console.log(findArrayMode([1, 2, 2, 3, 3, 4])); // Output: [2, 3]

// 87. Implement a function to convert a Roman numeral to an integer.

// console.log(romanToInteger("XIV")); // Output: 14

// 88. Write a function to check if a given string is a valid URL.

// console.log(isValidURL("https://www.example.com")); // Output: true

// 89. Develop a function to find the greatest common divisor (GCD) of two numbers.

// console.log(findGCD(24, 36)); // Output: 12

// 90. Create a function to reverse the bits of a given number.

// console.log(reverseBits(5)); // Output: 2684354560

// 91. Implement a function to perform basic string compression using the counts of repeated characters.

// console.log(compressString("aaabbbccc")); // Output: 'a3b3c3'

// 92. Write a function to convert a decimal number to hexadecimal.

// console.log(decimalToHexadecimal(255)); // Output: 'FF'

// 93. Develop a function to remove specific characters from a string.

// console.log(removeSpecificCharacters("Hello, World!", "l")); // Output: 'Heo, Word!'

// 94. Create a function to check if a number is a palindrome.

// console.log(isNumberPalindrome(121)); // Output: true

// 95. Implement a function to calculate the sum of digits in a given number.

// console.log(calculateSumOfDigits(123)); // Output: 6

// 96. Write a function to find the least common multiple (LCM) of two numbers.

// console.log(findLCM(12, 18)); // Output: 36

// 97. Develop a function to find the longest common prefix of an array of strings.

// console.log(findLongestCommonPrefix(["apple", "apricot", "apex"])); // Output: 'ap'

// 98. Create a function to find the missing number in an array of consecutive numbers.

// console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4

// 99. Implement a function to check if a given string is an integer or a floating-point number.

// console.log(isValidNumber("123.45")); // Output: true

// 100. Write a function to check if a given number is a Fibonacci number.

// console.log(isFibonacciNumber(21)); // Output: true




