## Notes: Execution Contexts and Hoisting

#### Basic Concepts
- **Expressions**: Everything in JavaScript is an expression, either as a name/value pair or an object.
  - ```javascript
    var number = 10; // name/value pair: number = 10
    var username = 'techSapna'; // name/value pair: username = 'techSapna'
    ```

- **Objects**: A collection of name/value pairs, where the value can be another object.
  - **Example**:
    ```javascript
    var person = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        zip: '10001'
      }
    };
    ```

- **Functions**: Declared using the `function` keyword.
  - **Example**:
    ```javascript
    function greet() {
      console.log('Hello, World!');
    }
    ```

#### Example Code Snippet
- **Simple Code Example**:
  ```javascript
  var number = 10;

  function greet() {
    console.log('Hello, World!');
  }

  console.log(number); // 10
  greet(); // 'Hello, World!'
    ```
- **Variable Access Before Declaration**:
  ```javascript
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10
    ```

- **Function Hoisting Example:**:
  ```javascript
    y(); // 'Hello World!'
    function y() {
      console.log('Hello World!');
    }
  ```

### Hoisting in JavaScript

- **Definition**: JavaScript's behavior of moving function and variable declarations to the top of their containing scope during the compile phase.
- **Clarification**: Internally, JavaScript does not actually move code but sets up memory space for variables and functions.

### Execution Contexts

- **Definition**: When a function is invoked, an activation record (execution context) is created.
  - **Contents**: Information about the function call (call stack), invocation details, parameters, etc.
  - **Purpose**: Manage the code that is running.

- **Creation and Execution Phases**:
  - **Creation Phase**:
    - Memory space is set up for variables and functions.
    - **Variables**: Allocated memory and initialized to `undefined`.
    - **Functions**: Entire function is created in memory.

  - **Execution Phase**:
    - JavaScript engine runs the code line by line.
    - Assigns values to variables, which were initially set to `undefined`.


- **Example**:
  ```javascript
    console.log(myVar); // undefined
    var myVar = 10;

    console.log(myFunc); // function definition
    function myFunc() {
      console.log('Hello from myFunc!');
    }
  ```

- **Variable Declaration and Assignment:**:
  ```javascript
      var score;
      console.log(score); // undefined
      score = 5;
      console.log(score); // 5
    ```

### Summary

- **Key Points**:
  - Variables are initially set to `undefined`.
  - Functions are fully hoisted and available throughout their scope.
