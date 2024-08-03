# JavaScript Data Types and Operators

## Primitive Data Types
- **String**: Represents sequences of characters.
  - Example:
    ```javascript
    let name = 'Alice';
    console.log(name); // Alice
    ```
- **Number**: Represents both integer and floating-point numbers.
  - Example:
    ```javascript
    let age = 30;
    console.log(age); // 30
    ```
- **Boolean**: Represents true or false values.
  - Example:
    ```javascript
    let isLoggedIn = true;
    console.log(isLoggedIn); // true
    ```
- **Null**: Represents the intentional absence of any object value.
  - Example:
    ```javascript
    let emptyValue = null;
    console.log(emptyValue); // null
    ```
- **Undefined**: Indicates a variable that has been declared but not assigned a value.
  - Example:
   ```javascript
    let notAssigned;
    console.log(notAssigned); // undefined
    ```
- **Symbol**: Represents a unique and immutable value, often used as object property keys.
  - Example:
    ```javascript
    let uniqueId = Symbol('id');
    console.log(uniqueId); // Symbol(id)
    ```

## Truthy and Falsy Values
- **Falsy Values**: Values that are considered false in a boolean context:
  - 0
  - '' (empty string)
  - null
  - undefined
  - NaN
  - false
  - Example:
    ```javascript
    console.log(Boolean(0)); // false
    console.log(Boolean('')); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean(NaN)); // false
    console.log(Boolean(false)); // false
    ```
- **Truthy Values**: Values that are considered true in a boolean context:
  - Any non-zero number
  - Non-empty strings
  - Objects and arrays
  - Example:
    ```javascript
    console.log(Boolean(1)); // true
    console.log(Boolean('hello')); // true
    console.log(Boolean({})); // true
    console.log(Boolean([])); // true
    console.log(Boolean(true)); // true
    ```

## Type Coercion and Conversion
- **Type Coercion**: Automatic conversion between types during operations.
  - Example:
    ```javascript
    console.log('5' + 5); // '55' (string concatenation)
    console.log('5' - 2); // 3 (numeric subtraction)
    ```
- **Type Conversion**: Manual conversion of types.
  - Example:
    ```javascript
    let num = '123';
    let convertedNum = Number(num);
    console.log(convertedNum); // 123
    ```

## Operators
- **Arithmetic Operators**: Perform mathematical operations.
  - Example:
    ```javascript
    let a = 10;
    let b = 5;
    console.log(a + b); // 15
    console.log(a - b); // 5
    console.log(a * b); // 50
    console.log(a / b); // 2
    console.log(a % b); // 0
    console.log(a ** b); // 100000
    ```
- **Assignment Operators**: Assign values to variables with shorthand notation.
  - Example:
    ```javascript
    let x = 10;
    x += 5; // x = x + 5
    console.log(x); // 15
    x -= 3; // x = x - 3
    console.log(x); // 12
    x *= 2; // x = x * 2
    console.log(x); // 24
    x /= 4; // x = x / 4
    console.log(x); // 6
    x %= 2; // x = x % 2
    console.log(x); // 0
    ```

- **Comparison Operators**: Compare values and return a boolean result.
  - Example:
    ```javascript
    let p = 10;
    let q = '10';
    console.log(p == q); // true (loose equality)
    console.log(p === q); // false (strict equality)
    console.log(p != q); // false
    console.log(p !== q); // true
    console.log(p > 5); // true
    console.log(p < 5); // false
    console.log(p >= 10); // true
    console.log(p <= 10); // true
    ```

- **Logical Operators**: Combine multiple conditions.
  - Example:
    ```javascript
    let isAdult = true;
    let hasID = false;
    console.log(isAdult && hasID); // false (AND operator)
    console.log(isAdult || hasID); // true (OR operator)
    console.log(!isAdult); // false (NOT operator)
    ```

- **Ternary Operator**: A shorthand for conditional statements.
  - Example:
    ```javascript
    let age = 20;
    let canVote = age >= 18 ? 'Yes' : 'No';
    console.log(canVote); // Yes
    ```

- **Double Not (!!) Operator**: Converts any value to its boolean equivalent.
  - Example:
    ```javascript
    let value = 'Hello';
    console.log(!!value); // true
    value = 0;
    console.log(!!value); // false
    ```

- **typeof Operator**: Determines the type of a variable or value.
  - Example:
    ```javascript
    console.log(typeof 'Hello'); // string
    console.log(typeof 42); // number
    console.log(typeof true); // boolean
    console.log(typeof undefined); // undefined
    console.log(typeof null); // object (historical quirk)
    console.log(typeof Symbol('id')); // symbol
    ```

## Summary
- JavaScript is dynamically typed with six primitive data types.
- Values are either truthy or falsy, influencing conditional statements.
- Operators perform various tasks, including arithmetic, assignment, comparison, and logical operations.
- Type coercion and conversion manage different data types during operations.
