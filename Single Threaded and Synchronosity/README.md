### Notes: Single-Threaded and Synchronous Execution in JavaScript

#### Key Concepts
- **Single-Threaded**:
  - JavaScript executes code using a single thread, meaning it handles one command at a time.
  - This ensures that only one task is processed before moving on to the next.

- **Synchronous Execution**:
  - JavaScript executes code in a sequential order, line by line.
  - Each command waits for the previous one to complete before it is executed.

#### Example Code: Basic Synchronous Execution
- **Code**:
  ```javascript
  function first() {
    console.log('First function');
  }

  function second() {
    console.log('Second function');
  }

  function third() {
    console.log('Third function');
  }

  first();
  second();
  third();
  ```

#### Explanation:
- Functions first, second, and third log messages to the console.
- They are called one after the other, and they execute in the exact order they are called.
- **Output:**
    ```javascript
    First function
    Second function
    Third function
    ```

### Understanding the Call Stack

- **Definition**:
  - The call stack is a data structure that keeps track of function calls.
  - It follows the Last In, First Out (LIFO) principle.

- **Process**:
  1. A function call is added to the call stack.
  2. The function executes, and if it calls other functions, those are added to the stack.
  3. Once a function completes, it is removed from the stack.


- **Example Code: Nested Function Calls**:
    ```javascript
    function first() {
        console.log('First function');
        second();
    }

    function second() {
        console.log('Second function');
        third();
    }

    function third() {
        console.log('Third function');
    }

    first();
    ```

- **Execution Flow**:
    - first calls second, second calls third.
    - Functions are processed in the order they are called.

### Asynchronous Execution (Brief):
- **Example**:
    ```javascript
    console.log('Before timeout');

    setTimeout(() => console.log('Inside timeout'), 1000);

    console.log('After timeout');
    ```

- **Output**:
    ```javascript
        Before timeout
        After timeout
        Inside timeout
    ```

- **Note**: JavaScript uses the event loop to manage asynchronous tasks like setTimeout.


### Summary
- JavaScript is single-threaded and executes code synchronously.
- Functions and commands are processed in sequence using the call stack.
- Asynchronous operations are managed using the event loop, allowing for tasks like setTimeout.