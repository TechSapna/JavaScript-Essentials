# Arrays in JavaScript

## Introduction to Arrays

- **Creating an Array**:
  - `const numbers = [1, 2, 3, 4, 5];`

## `map` Method

- **Description**: Creates a new array by applying a function to each element of the original array.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `const doubled = numbers.map(num => num * 2);`
  - `console.log(doubled); // Output: [2, 4, 6, 8, 10]`

## `filter` Method

- **Description**: Creates a new array with all elements that pass the test implemented by the provided function.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `const evenNumbers = numbers.filter(num => num % 2 === 0);`
  - `console.log(evenNumbers); // Output: [2, 4]`

## `reduce` Method

- **Description**: Executes a reducer function on each element of the array, resulting in a single output value.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);`
  - `console.log(sum); // Output: 15`

## `forEach` Method

- **Description**: Executes a provided function once for each array element. Commonly used for side effects.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `numbers.forEach(num => console.log(num * 2));`
  - `// Output: 2, 4, 6, 8, 10`

## `find` Method

- **Description**: Returns the value of the first element in the array that satisfies the provided testing function.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `const found = numbers.find(num => num > 3);`
  - `console.log(found); // Output: 4`

## `some` Method

- **Description**: Tests whether at least one element in the array passes the test implemented by the provided function. Returns a boolean value.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `const hasEven = numbers.some(num => num % 2 === 0);`
  - `console.log(hasEven); // Output: true`

## `every` Method

- **Description**: Tests whether all elements in the array pass the test implemented by the provided function. Returns a boolean value.
- **Example**:
  - `const numbers = [1, 2, 3, 4, 5];`
  - `const allEven = numbers.every(num => num % 2 === 0);`
  - `console.log(allEven); // Output: false`
