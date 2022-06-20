// var - global & functional scope
var a = 1;

function one() {
  console.log(a);
}

// one();

// if (true) {
//   console.log(a);
// }

// console.log(globalThis.a);

// let/const - block scope

// globalThis.age = 20;

const b = 2;

if (true) {
  const b = 5;
  const c = 3;

  console.log(b);
}

console.log(b);

function two() {
  const d = 4;
}

// console.log(globalThis.age);

