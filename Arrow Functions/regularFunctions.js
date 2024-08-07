const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // Output: 5

function Person() {
  this.age = 0;

  setInterval(function () {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const person = new Person();
