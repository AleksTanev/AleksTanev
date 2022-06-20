import { removeFirst } from '../array-op.js';

console.log(`\nTesting removeFirst`);

const test1 = () => {
  let error = null;
  try {
    removeFirst('string');
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
  const result = removeFirst([1, 2, 3]);
  if (result.length === 2) {
    console.log(`\x1b[32m  [✔] - should return a new array with one element less\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should return a new array with one element less\x1b[0m`)
  }
};

const test3 = () => {
  const arr = [1, 2, 3];
  removeFirst(arr);

  if (arr.length === 3) {
    console.log(`\x1b[32m  [✔] - should not modify the original array\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should not modify the original array\x1b[0m`)
  }
};

const test4 = () => {
  const result = removeFirst([1, 2, 3]);

  if (result[0] === 2 && result[1] === 3) {
    console.log(`\x1b[32m  [✔] - should remove the first element\x1b[0m`);
  } else {
    console.log(`\x1b[31m  [x] - should remove the first element\x1b[0m`)
  }
};

// Running tests

test1();
test2();
test3();
test4();