import { contains } from '../array-op.js';

console.log(`\nTesting contains`);

const test1 = () => {
  let error = null;
  try {
    contains('string');
  } catch(e) {
    error = e;
  }

  if (error !== null) {
    console.log(`\x1b[32m  [✔] - should throw if not an array is passed\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should throw if not an array is passed\x1b[0m`)
  }
};

const test2 = () => {
  const result = contains([1, 2, 3], 2);
  if (result === true) {
    console.log(`\x1b[32m  [✔] - should return true if element is in the array\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should return true if element is in the array\x1b[0m`)
  }
};

const test3 = () => {
  const result = contains([1, 2, 3], 4);
  if (result === false) {
    console.log(`\x1b[32m  [✔] - should return false if element is in the array\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should return false if element is in the array\x1b[0m`)
  }
};

// Running tests

test1();
test2();
test3();