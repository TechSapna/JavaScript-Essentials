const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const [{ name: firstName }, { name: secondName }] = users;
console.log(firstName); // Output: Alice
console.log(secondName); // Output: Bob

const printPerson = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};
const person = { name: "Alice", age: 30 };
printPerson(person); // Output: Name: Alice, Age: 30
