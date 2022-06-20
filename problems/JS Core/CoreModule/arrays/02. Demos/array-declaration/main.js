const arr = [1, 2, 3, 4, 5]; // The de facto standard
const arr1 = new Array(1, 2, 3, 4, 5); // Not preferable
const arr2 = Array.of(1, 2, 3, 4, 5); // Create array from a set of values. Still prefer the first one
const arr3 = Array.from(arr); // It is useful to create an array with this method, when you need a specified length
const emptyArray = Array.from({length: 4}); // Creates an array with length 4 and values undefined

console.log(`Array initializer: ${arr}`);
console.log(`Array constructor: ${arr1}`);
console.log(`Array.of(): ${arr2}`);
console.log(`Array.from(): ${arr3}`);
console.log(`Array.from() with custom length: ${emptyArray}`);
console.log(`Length of emptyArray: ${emptyArray.length}`);

