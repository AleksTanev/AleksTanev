/**
 * 1. Define getCounter that has inner function that logs the counter
 * 2. Call fn();
 * 3. Return fn
 * 4. Assign the result of getCounter to variable
 * 5. Call the returned variable - what happens? Why?
 * 6. Calling the function actually is using the function's lexical scope, eventhough getCounter has finished!
 * 7. This is closure - object that stays in the memory and saves the lexical scope of returned function
 * 8. Every time you assign a variable to returned function new closure is created!
 * 9. Assign another call of getCounter to counter2 & call it
 * 10. getCounter is encapsulated - this is one of the benefits of the closure
 */

const log = (x) => console.log(x);

const getCounter = () => {
  let count = 0;

  const fn = () => {
    count++;
    log(count);
  }
 
  return fn; // first call it, then return it
}

const counter = getCounter(); // { count = 0}

counter(); // { count++ // = 1 }
counter();
counter();

// const counter2 = getCounter(); // { count = 0}

// counter2();
// counter();

// Closure, because when a second has passed the setTimeout has finished
setTimeout(() => counter(), 1000);

