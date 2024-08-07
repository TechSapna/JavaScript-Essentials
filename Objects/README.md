# Objects in JavaScript

## Object Literals

- **Object Literal Syntax**: Defines objects with key-value pairs enclosed in curly braces.
  - Example: `const person = { name: 'Alice', age: 30, city: 'New York' };`

- **Accessing Properties**:
  - Dot Notation: `console.log(person.name); // Output: Alice`
  - Bracket Notation: `console.log(person['age']); // Output: 30`

- **Modifying Properties**:
  - `person.city = 'San Francisco';`
  - `console.log(person.city); // Output: San Francisco`

## Methods in Objects

- **Defining Methods**:
  - ES6 Shorthand Syntax: `const person = { name: 'Alice', greet() { return 'Hello, ' + this.name; } };`
  - Regular Function Expression: `const person = { name: 'Alice', greet: function() { return 'Hello, ' + this.name; } };`

- **Arrow Functions as Methods**:
  - Arrow functions do not have their own `this` context. Example: `const person = { name: 'Alice', greet: () => 'Hello, ' + this.name };`
  - To access the object's properties, use a regular function instead.

## Object Utilities

- **`Object.keys()`**:
  - Returns an array of the object’s own enumerable property names.
  - Example: `const keys = Object.keys(person); // Output: ['name', 'age', 'city']`

- **`Object.values()`**:
  - Returns an array of the object’s own enumerable property values.
  - Example: `const values = Object.values(person); // Output: ['Alice', 30, 'New York']`

- **`Object.entries()`**:
  - Returns an array of the object’s own enumerable `[key, value]` pairs.
  - Example: `const entries = Object.entries(person); // Output: [['name', 'Alice'], ['age', 30], ['city', 'New York']]`

## Looping Over Objects

- **Using `for...in` Loop**:
  - Iterates over enumerable properties of an object.
  - Example:
    ```
    for (const key in person) {
      console.log(key + ': ' + person[key]);
    }
    ```

- **Using `Object.keys()` with `forEach`**:
  - Example:
    ```
    Object.keys(person).forEach(key => {
      console.log(key + ': ' + person[key]);
    });
    ```

