const createCounter = () => {
  let count = 0;

  return () => {
    return count++;
  };
};

// This returns a function which has closure over the count variable and every time it is invoked it increment it
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
