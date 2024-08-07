const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

numbers.forEach((num) => console.log(num * 2)); // Output: 2, 4, 6, 8, 10

const found = numbers.find((num) => num > 3);
console.log(found); // Output: 4

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true

const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false
