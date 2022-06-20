// Step 1 - creating a module that returns an object

// const createCounter = (counter = 0) => {

//   const increment = function() {
//     counter++
//   }

//   const decrement = function() {
//     counter--
//   }

//   const getCount = function() {
//     console.log(counter)
//   }

//   return {
//     increment,
//     decrement,
//     getCount,
//   }
// }

// const counter = createCounter(1)
// counter.getCount()
// counter.increment()
// counter.getCount()
// counter.decrement()
// counter.getCount()

// Step 2- creating a module pattern using IIFE

const counter = ((counter = 0) => {
  const increment = function () {
    counter++;
  };

  const decrement = function () {
    counter--;
  };

  const getCount = function () {
    console.log(counter);
  };

  return {
    increment,
    decrement,
    getCount,
  };
})(10);

counter.getCount();
counter.increment();
counter.getCount();
counter.decrement();
counter.getCount();
