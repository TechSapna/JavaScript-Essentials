const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // Output: 5

// directly returning value without {} and return keyword
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // Output: 5

// understanding this keyword
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const person = new Person();

function regularFunction() {
  console.log(arguments);
}
regularFunction(1, 2, 3); // Output: [1, 2, 3]

const arrowFunction = () => {
  console.log(arguments);
};
arrowFunction(1, 2, 3); // Output: ReferenceError: arguments is not defined
