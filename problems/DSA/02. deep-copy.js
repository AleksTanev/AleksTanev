import { deepCompareObjects, formatObject } from './common/utils.js';

/**
 * Creates a deep copy of an object using recursion
 * @param {object} object The object to copy
 * @returns {object} The deep copy
 */
const deepCopy = (object) => {

  let copy = {}

  for (const prop in object) {
    if (typeof object[prop] === 'object' && object[prop] !== null) copy[prop] = deepCopy(object[prop])
    copy[prop] = object[prop]
  }

  return copy
};


const obj ={
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: {
      a: 1
    }
  }
}



// const obj1 = {
//   name: 'Pesho',
//   address: {
//     street: 'Al Malinov',
//     number: 31,
//   },
// }

// const obj2 = obj1.address

// deepCopy(obj1)

// obj1.address.number = 32

// console.log(obj2);
