# Shallow and Deep Copies in JavaScript

## Overview
Understanding how JavaScript copies variables, especially objects and arrays, is crucial when writing efficient and error-free code. In this guide, we’ll break down the differences between **shallow copies** and **deep copies**, explore how they work with **primitives** and **reference types**, and look at common pitfalls in JavaScript.

---

## Primitives vs. Reference Types

### Primitives
Primitives are simple data types that include:

- **number**
- **string**
- **boolean**
- **null**
- **undefined**
- **symbol**
- **bigint**

When you copy a primitive, a **new value** is created. Changing the new value doesn’t affect the original one.

#### Example:
Let’s say you have the following code:

``` `let a = 10;`  
`let b = a;`  
`b = 20;`  
`console.log(a); // Output: 10` ```

Here, changing `b` doesn’t affect `a`, because they are **independent values**. This is how primitives are copied—**by value**.

### Reference Types
Reference types include:

- **Objects**
- **Arrays**
- **Functions**

When copying a reference type, JavaScript copies the **reference** to the original value. This means both variables now point to the same object in memory.

#### Example:
Consider the following code:

`let obj1 = { name: 'Alice' };`  
`let obj2 = obj1;`  
`obj2.name = 'Bob';`  
`console.log(obj1.name); // Output: Bob`

In this example, changing `obj2` also changes `obj1` because they both point to the **same object** in memory. This is because reference types are copied **by reference**.

---

## What is a Shallow Copy?

A **shallow copy** creates a new object or array, but it only copies the **top-level properties**. If the object or array contains **nested objects or arrays**, the copy will still **reference** the original nested structures.

### Creating a Shallow Copy with `Object.assign()`

#### Example:
Let’s look at this code:

`let original = { name: 'Alice', address: { city: 'Wonderland' } };`  
`let shallowCopy = Object.assign({}, original);`  
`shallowCopy.address.city = 'Neverland';`  
`console.log(original.address.city); // Output: Neverland`

In this example, although we copied `original` into `shallowCopy`, both `original` and `shallowCopy` still share the same **address** object. So, changing the `city` property in `shallowCopy` also affects `original`.

### Shallow Copy of Arrays Using `slice()`

#### Example:
Here’s how it works with arrays:

`let arr = [1, [2, 3]];`  
`let shallowArr = arr.slice();`  
`shallowArr[1][0] = 99;`  
`console.log(arr[1][0]); // Output: 99`

Here, `arr` and `shallowArr` still share the inner array `[2, 3]`. Thus, changing the inner array in `shallowArr` also changes it in `arr`.

---

## What is a Deep Copy?

A **deep copy** creates a completely new object or array, including **all nested objects or arrays**. The copy is **entirely independent** of the original.

### Deep Copy Using `JSON.stringify()` and `JSON.parse()`

#### Example:
Consider this code:

`let original = { name: 'Alice', address: { city: 'Wonderland' } };`  
`let deepCopy = JSON.parse(JSON.stringify(original));`  
`deepCopy.address.city = 'Neverland';`  
`console.log(original.address.city); // Output: Wonderland`

Here, the nested `address` object is fully copied, so changes to `deepCopy` do not affect `original`.

However, be cautious: this method **loses functions** and does not handle **special objects** like `Date` or `undefined`.

### Deep Copy Using a Recursive Function

#### Example:
Here’s an example using a custom recursive function:

`function deepClone(obj) {`  
`if (obj === null || typeof obj !== 'object') return obj;`  
`let copy = Array.isArray(obj) ? [] : {};`  
`for (let key in obj) {`  
`copy[key] = deepClone(obj[key]);`  
`}`  
`return copy;`  
`}`

`let original = { name: 'Alice', address: { city: 'Wonderland' } };`  
`let deepCopy = deepClone(original);`  
`deepCopy.address.city = 'Neverland';`  
`console.log(original.address.city); // Output: Wonderland`

In this example, the custom `deepClone` function ensures that all nested objects and arrays are copied independently.

### Using External Libraries

For deep copying, you can also use popular libraries like Lodash, which provides a `_.cloneDeep()` method that handles various edge cases.

#### Example:
Here’s how you can use Lodash:

`let deepCopy = _.cloneDeep(original);`

---

## Call by Value vs. Call by Reference

When passing variables to functions, **primitives** are passed **by value**, and **objects** or **arrays** are passed **by reference**.

### Call by Value Example:

Consider this example:

`function modifyPrimitive(value) {`  
`value = 100;`  
`}`

`let num = 50;`  
`modifyPrimitive(num);`  
`console.log(num); // Output: 50`

In this case, `num` remains unchanged because it is passed **by value** to the function.

### Call by Reference Example:

Now, take a look at this example:

`function modifyName(obj) {`  
`obj.name = 'Changed';`  
`}`

`let person = { name: 'Alice' };`  
`modifyName(person);`  
`console.log(person.name); // Output: Changed`

Here, `person` is passed **by reference**, so changes inside the function affect the original object.

---

## Key Takeaways

- **Primitives** are copied by value, meaning changes to one variable don’t affect the other.
- **Reference types** are copied by reference, meaning changes to the copy can affect the original.
- **Shallow copies** only copy the first level of an object or array. Nested structures still share references.
- **Deep copies** create entirely independent copies, including nested structures, but require careful handling in JavaScript.
- **Functions** pass primitives by value and objects/arrays by reference, meaning modifications inside functions can affect outside variables.
