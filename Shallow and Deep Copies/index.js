let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10


let obj1 = { name: 'Alice' };
let obj2 = obj1;
obj2.name = 'Bob';
console.log(obj1.name); // Output: Bob


let original = { name: 'Alice', address: { city: 'Wonderland' } };
let shallowCopy = Object.assign({}, original);
shallowCopy.address.city = 'Neverland';
console.log(original.address.city); // Output: Neverland


let originalObj = { name: 'Alice', address: { city: 'Wonderland' } };
let deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.address.city = 'Neverland';
console.log(original.address.city); // Output: Wonderland
