# Objects and Array Destructuring in JavaScript

## Object Destructuring

- **Basic Example**:
  ```
  const person = { name: 'Alice', age: 30, city: 'New York' };
  const { name, age, city } = person;
  console.log(name); // Output: Alice
  console.log(age); // Output: 30
  console.log(city); // Output: New York
  ```

- **Renaming Variables**:
  ```
  const { name: personName, age: personAge, city: personCity } = person;
  console.log(personName); // Output: Alice
  console.log(personAge); // Output: 30
  console.log(personCity); // Output: New York
  ```

- **Default Values**:
  ```
  const { name, age, country = 'USA' } = person;
  console.log(name); // Output: Alice
  console.log(age); // Output: 30
  console.log(country); // Output: USA
  ```

- **Nested Objects**:
  ```
  const user = { id: 1, info: { name: 'Alice', age: 30 } };
  const { info: { name, age } } = user;
  console.log(name); // Output: Alice
  console.log(age); // Output: 30
  ```

## Array Destructuring

- **Basic Example**:
  ```
  const numbers = [1, 2, 3];
  const [first, second, third] = numbers;
  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(third); // Output: 3
  ```

- **Skipping Elements**:
  ```
  const [first, , third] = numbers;
  console.log(first); // Output: 1
  console.log(third); // Output: 3
  ```

- **Default Values**:
  ```
  const [first, second, third, fourth = 4] = numbers;
  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(third); // Output: 3
  console.log(fourth); // Output: 4
  ```

- **Rest Parameters**:
  ```
  const [first, ...rest] = numbers;
  console.log(first); // Output: 1
  console.log(rest); // Output: [2, 3]
  ```

## Combining Object and Array Destructuring

- **Example**:
  ```
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const [{ name: firstName }, { name: secondName }] = users;
  console.log(firstName); // Output: Alice
  console.log(secondName); // Output: Bob
  ```

## Function Parameters Destructuring

- **Object Destructuring in Function Parameters**:
  ```
  const printPerson = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
  };
  const person = { name: 'Alice', age: 30 };
  printPerson(person); // Output: Name: Alice, Age: 30
  ```

- **Array Destructuring in Function Parameters**:
  ```
  const printNumbers = ([first, second, third]) => {
    console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
  };
  const numbers = [1, 2, 3];
  printNumbers(numbers); // Output: First: 1, Second: 2, Third: 3
  ```
