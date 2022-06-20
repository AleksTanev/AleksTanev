// example 1 - we want to increase a number with some passed number
// here we have closure on interval

const increase = (interval) => {
  // const fn = (x) => x + interval;

  return (x) => x + interval;
};

const inc1 = increase(1); // { interval = 1} // (x) => x + 1
const inc10 = increase(10); // { interval = 10} // (x) => x + 10

// console.log(inc1(1));
// console.log(inc10(1));

// example 2 - two functions has access to items

const logger = () => {
  const items = [];

  const has = (x) => {
    return items.includes(x);
  };

  const remember = (x) => {
    items.push(x);
  };

  return [has, remember];
};

const [hasItem, rememberItem] = logger();

// console.log(hasItem(1));
// rememberItem(1);
// console.log(hasItem(1));

// example 3

const memoize = (f) => {
  const cache = {};

  return (x) => { // cachedSum(x) => x = 10; f = sum
    if (x in cache) {
      console.log(`cached result for ${x}`);
      return cache[x];
    } else {
      const result = f(x); // const result = sum(10);
      cache[x] = result; // { cache: {'10': 55}}
      console.log(`caching ${x}`);

      return result;
    }
  }
};

const sum = (n) => {
  console.log(`sum called with ${n}`);
  let innerSum = 0;
  for (let i = 1; i <= n; i++) {
    innerSum += i;
  }

  return innerSum;
}

const cachedSum = memoize(sum); // closure 1
const cachedSum2 = memoize(sum); // closure 2

console.log(cachedSum(10));
console.log(cachedSum(11));
console.log(cachedSum(10));

// console.log(cachedSum2(10));
// console.log(cachedSum2(11));
// console.log(cachedSum2(10));