if (true) {
  var test = true; // if we use "let", console.log will return undefined. That's because var is global.
}

console.log(test)

// with var we can redeclare the same name variable any number of times, without an error.
// with let obviously we cannot.

var user
var user
var user

// no matter where a var variable is defined, it is always red first, meaning at the begining.
// so the below code works

function sayHi() {
  phrase = "Hello";

 console.log(phrase);

  var phrase;
}
sayHi();

// this behaviour is called hoisting/raising

// Important - > LET variables are essentially block variables.