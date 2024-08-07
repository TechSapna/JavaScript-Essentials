# JavaScript Essentials for React - Understanding the Scope Chain: Key Notes

## Types of Scoping in JavaScript
- **Global Scope**
  - Variables declared outside any function or block.
  - Accessible anywhere in the code.
  - Example:
    ```
    const globalVar = 'I am a global variable';
    ```

- **Function Scope**
  - Variables declared within a function.
  - Local to that function.
  - Example:
    ```
    function exampleFunction() {
        const functionScopedVar = 'I am a function-scoped variable';
    }
    ```

- **Block Scope**
  - Variables declared with `let` or `const` inside a block.
  - Accessible only within that block.
  - Example:
    ```
    if (true) {
        const blockScopedVar = 'I am a block-scoped variable';
    }
    ```

## What is the Scope Chain?
- The mechanism JavaScript uses to find variables.
- Consists of all variables in the current scope, plus variables in all outer scopes up to the global scope.
- Example:
    ```const globalVar = 'I am a global variable';

    function outerFunction() {
        const outerVar = 'I am an outer variable';

        function innerFunction() {
            const innerVar = 'I am an inner variable';
            console.log(innerVar); // Output: I am an inner variable
            console.log(outerVar); // Output: I am an outer variable
            console.log(globalVar); // Output: I am a global variable
        }

        innerFunction();
    }

    outerFunction();
    ```

## Lexical Scoping
- Scope of a variable is determined by its position in the source code.
- Set when the code is written, not when executed.
- Example:
    ```
    function parentFunction() {
        const parentVar = 'I am a parent variable';

        function childFunction() {
            console.log(parentVar); // Output: I am a parent variable
        }

        childFunction();
    }

    parentFunction();
    ```

## Scope Chain and Execution Contexts
- Scope chain works in coordination with execution contexts.
- An execution context holds information about the environment within which the current code is being executed.
- Each function invocation creates a new execution context.
- Example:
    ```
    const globalVar = 'Global';

    function firstFunction() {
        const firstVar = 'First';

        function secondFunction() {
            const secondVar = 'Second';

            function thirdFunction() {
                const thirdVar = 'Third';
                console.log(globalVar); // Output: Global
                console.log(firstVar); // Output: First
                console.log(secondVar); // Output: Second
                console.log(thirdVar); // Output: Third
            }

            thirdFunction();
        }

        secondFunction();
    }

    firstFunction();
    ```

## Common Pitfalls
- **Accidentally Creating Global Variables**
  - Example:
    ```
    function exampleFunction() {
        undeclaredVar = 'I am global';
    }

    exampleFunction();
    console.log(undeclaredVar); // Output: I am global
    ```

- **Variable Shadowing**
  - Example:
    ```
    const varName = 'Global';

    function exampleFunction() {
        const varName = 'Local';
        console.log(varName); // Output: Local
    }

    exampleFunction();
    console.log(varName); // Output: Global
    ```

  - Use `const` to avoid accidental reassignments and make your code more predictable.

## Summary
- The scope chain determines how variables are resolved in nested functions.
- Follows lexical scoping rules, looking up variables in the current scope, then moving outward to enclosing scopes.
- Closely tied to execution contexts, which form a stack as functions are invoked and completed.
