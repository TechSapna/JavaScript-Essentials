// Arithmetic Operations
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000


// Assignment Operations
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15
x -= 3; // x = x - 3
console.log(x); // 12
x *= 2; // x = x * 2
console.log(x); // 24
x /= 4; // x = x / 4
console.log(x); // 6
x %= 2; // x = x % 2
console.log(x); // 0

// Comparision Operations
let p = 10;
let q = '10';
console.log(p == q); // true (loose equality)
console.log(p === q); // false (strict equality)
console.log(p != q); // false
console.log(p !== q); // true
console.log(p > 5); // true
console.log(p < 5); // false
console.log(p >= 10); // true
console.log(p <= 10); // true


// Logical Operations
console.log(true || false); // false (OR operator)
console.log(true && true && false); // true  (AND Operator)
console.log(!true); // false (NOT operator)
console.log('abc' && 0 && 1) // 0 

// Ternary Operator
var isSingedIn = true
var buttonText = isSingedIn ? 'Sign Out' : 'Sing In';
console.log(buttonText)

// Type of Operator
console.log(typeof 'Hello'); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (historical quirk)
console.log(typeof Symbol('id')); // symbol

