const person = { name: "Alice", age: 30, city: "New York" };
console.log(person.name);
console.log(person["age"]);

person.city = "San Francisco";
console.log(person.city);

const person2 = {
  name: "Bob",
  greet() {
    return "Hello, " + this.name;
  },
};
console.log(person.greet()); // Output: Hello, Bob

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values); // Output: ['Alice', 30, 'New York']

const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 30], ['city', 'New York']]

for (const key in person) {
  console.log(key + ": " + person[key]);
}
