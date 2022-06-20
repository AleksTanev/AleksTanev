import { addFirst } from '../array-op.js';

console.log(`\nTesting addFirst`);

const test1 = () => {
  let error = null;
  try {
    addFirst('string');
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
  const result = addFirst([1, 2, 3], 0);
  if (result.length === 4) {
    console.log(`\x1b[32m  [✔] - should return a new array with one element more\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should return a new array with one element more\x1b[0m`)
  }
};

const test3 = () => {
  const arr = [1, 2, 3];
  addFirst(arr, 0);

  if (arr.length === 3) {
    console.log(`\x1b[32m  [✔] - should not modify the original array\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should not modify the original array\x1b[0m`)
  }
};

const test4 = () => {
  const result = addFirst([1, 2, 3], 0);

  if (result[0] === 0) {
    console.log(`\x1b[32m  [✔] - should add the first element\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should add the first element\x1b[0m`)
  }
};

// Running tests

test1();
test2();
test3();
test4();