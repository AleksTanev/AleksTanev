if (true) {
  // a is available outside the if
  var a = 42;
}

for (var index = 0; index < 10; index++) {
  // The index is available outside the for loop and its value is 10
}

// That is why you must always use let and const!
console.log(a);
console.log(index);

const foo = () => {
  var p = 'Telerik Academy';
};

// Nothing could escape the function scope
// console.log(p);

