// 'use strict';
// let a = 1;

// function log() {
//   let b = 2;
//   function one() {
//     let c = 3;
//     console.log(a); //a, b, c
//   }

//   one(); // a, b
// }

// // console.log(a);
// log(); // a

// shadow scoping

// let d = 4;

// function two() {
//   let d;
//   d = 5;

//   console.log(d);
// }

// two();
// console.log(d);

// Global assignment

// function two() {
//   e = 5;

//   console.log(e);
// }

// two();
// console.log(e);

// multiple assignment

// let f = 5;

// function three() {
//   // let f = g = 6;
//   g = 6;
//   let f = g;
//   console.log(f);
// }

// three();
// console.log(g, f);

// function four() {
//   // console.log(a); // TDZ
//   let a;
//   console.log(a); // undefined
//   a = 5;
//   console.log(a); // 5
// }

// four();

// const age = 30;

// function five() { // var name;
//   console.log(1, name);

//   if (false) {
//     var name = 'John';
//   }

//   console.log(2, name, age);
// };

// five();
// // console.log(name);


// if (true) {
//   let name = 'Jane';
// }

// console.log(name);

// test = undefined

// TDZ
let name = 'John';

const test = () => { // var age; // undefined
  console.log(age, name);
  
  let b = 2;
  for (var age = 0; age < 30; age++) {
    let a = 1;
    console.log(b);
  }
  console.log(b);
  console.log(age);
};

test(); 

console.log(age);