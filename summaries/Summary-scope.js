// Try the following: 

// let a = 1
if(true){
  b = 2;
  let c = 3
}
// console.log(a)
console.log(b)
// console.log(c)
// console.log(global)     

// Explanation: b is added to the global object, and is therefore accessible outside of the block.
// note that in 'use strict' the implicit global declaration will throw an error.
// and a bonus note: the correct way to declare global variables is:

global.a = 'This is now global'
console.log(a)

// bonus question: if you declare the global variable a, and then a local scope a, which one do you think
// it will print? Answer: the local one (shadowing?)
// Note also global declaration cannot be accessed prior to the declaration!