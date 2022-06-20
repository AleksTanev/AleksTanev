// Functions we want to use
const getName = person => person.name;
const uppercase = string => string.toUpperCase();
const get3Characters = string => string.substring(0, 3);

// with function
const pipeF = (fn1, fn2, fn3) => {
  return (person) => {
    const result1 = fn1(person);
    const result2 = fn2(result1);
    return fn3(result2);
  }
}

// with shorten syntax
const pipeFS = (fn1, fn2, fn3) => (person) => {
  const result1 = fn1(person);
  const result2 = fn2(result1);
  return fn3(result2);
}

// with IIFE
const pipeIIFE = ((fn1, fn2, fn3) => {
  return (person) => {
    const result1 = fn1(person);
    const result2 = fn2(result1);
    return fn3(result2);
  }
})(getName, uppercase, get3Characters)({ name: 'Pesho' });

// What if we want to pipe more than just these three functions?
// Use rest operator to pass unknown number of functions to be piped
// Use reduce to pass each function's result to the next one
const pipe = (...fns) => {

  const inner = (start) => {
    return fns.reduce((s, f) => f(s), start);
  }

  return inner;
};

// Now let's get geeky
const pipeGeeky = (...fns) => (start) => fns.reduce((s, f) => f(s), start);

console.log(pipeF(getName, uppercase, get3Characters)({ name: 'Pesho' }));
console.log(pipeFS(getName, uppercase, get3Characters)({ name: 'Pesho' }));
console.log(pipeIIFE);
console.log(pipe(getName, uppercase, get3Characters)({ name: 'Pesho' }));
console.log(pipeGeeky(getName, uppercase, get3Characters)({ name: 'Pesho' }));


