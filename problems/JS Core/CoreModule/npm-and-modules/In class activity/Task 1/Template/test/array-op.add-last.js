import { addLast } from '../array-op.js';

console.log(`\nTesting addLast`);

const test1 = () => {
  let error = null;
  try {
    addLast('string');
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
  const result = addLast([1, 2, 3], 4);
  if (result.length === 4) {
    console.log(`\x1b[32m  [✔] - should return a new array with one element more\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should return a new array with one element more\x1b[0m`)
  }
};

const test3 = () => {
  const arr = [1, 2, 3];
  addLast(arr, 4);

  if (arr.length === 3) {
    console.log(`\x1b[32m  [✔] - should not modify the original array\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should not modify the original array\x1b[0m`)
  }
};

const test4 = () => {
  const result = addLast([1, 2, 3], 4);

  if (result[3] === 4) {
    console.log(`\x1b[32m  [✔] - should add the last element\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should add the last element\x1b[0m`)
  }
};

// Running tests

test1();
test2();
test3();
test4();