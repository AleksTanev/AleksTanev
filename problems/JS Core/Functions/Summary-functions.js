// Functions// Summary

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// 1. Function declaration

function showMessage() {
    console.log( 'Hello everyone!' );
  }

showMessage()           // calling the function

// 2. Variables - A variable declared inside a function is only visible inside that function.

function showMessage2() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    console.log( message );
  }

  console.log(message)          // returns an error - not defined.

// 2. ctd. - A function can access outer variables, and modify them.

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // John before the function call

showMessage();

console.log( userName ); // Bob, the value was modified by the function

// If a same-named variable is declared inside the function then it shadows the outer one. 
// For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // John, unchanged, the function did not access the outer variable

// 2 ctd. Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals.
// Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.


// 3. Parameters and Arguments: some terminology

//When a value is passed as a function parameter, it’s also called an argument.

// In other words, to put these terms straight:

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term)
// An argument is the value that is passed to the function when it is called (it’s a call time term).

// We declare functions listing their parameters, then call them passing arguments. Example:

function showMessage(from, text) {

  from = '*' + from + '*'; 

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello");

console.log( from );

// In the example above, one might say: "the function showMessage is declared with two parameters, 
// then called with two arguments: from and "Hello"".



// 4. Default values: If a function is called, but an argument is not provided, then
//    the corresponding value becomes undefined

// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") { // in the absence of argument, the value will be the string "no text given"
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given //


// the = assignment can be used for more complex expressions like:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
// On the other hand, it’s independently called every time when text is missing.

function showMessage(text) {
  // ...

  if (text === undefined) { // An alternative to setting default values, if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message

// …Or we could use the || operator:

function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
}

// Modern JavaScript engines support the nullish coalescing operator ??, 
// it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown



// Returning a value: A function can return a value back to the calling code.
// Most basic example to sum 2 numbers:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3

// The directive return can be in any place of the function. 
// ! When the execution reaches it, the function stops, and the value is returned to the calling code

// It is possible to use return without a value. That causes the function to exit immediately.

// For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}

// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.


// Never add a newline between return and the value
