if(true) {
  // a is NOT available outside the if
  const a = 42;
}

for (let index = 0; index < 10; index++) {
  // The index is NOT available outside the for loop
}

// This will output an error. When the variables are nowhere to be found in any scope it is a ReferenceError
console.log(a);
console.log(index);

