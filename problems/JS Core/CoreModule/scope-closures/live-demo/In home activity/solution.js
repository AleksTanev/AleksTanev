// task 1
const add = (a, b) => a + b;

const decorateWithLogging = func => {
  let counter = 0;
  const cache = {};
  
  return function(...rest) { // [1, 2]
    counter++;
    const key = rest.join(':');

    console.log(`${func.name || 'anonymous function'} has been called ${counter} time(s)`);

    if (key in cache) {
      // result is already calculated
      console.log(`returning cached value...`);
    } else {
      console.log(`caching...`);
      cache[key] = func(...rest);
    }

    return cache[key];
  }
};

const decoratedAdd = decorateWithLogging(add);
const decoratedTrippleAdd = decorateWithLogging((a, b, c) => a + b + c);
const result = decoratedAdd(1, 2);
const result2 = decoratedAdd(3, 4);
const result3 = decoratedAdd(1, 2);

console.log(result);
console.log(decoratedTrippleAdd(1, 2, 3));