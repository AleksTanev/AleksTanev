const add = (a, b) => a + b;
// const createPerson = (name, age, gender) => {
//   return {
//     name,
//     age,
//     gender
//   };
// };


const decorateWithLogging = (func) => {
  let count = 0
  const counterFunc = () => {
  console.log(++count)
  return func
  }
  return counterFunc()
}

const decoratedAdd = decorateWithLogging(add);
const result = decoratedAdd(1, 2);
console.log(result)
// const result2 = decoratedAdd(1, 2);

// const result3 = decoratedAdd(1, 2);

// console.log(globalThis)



// const result = decoratedAdd('Yolo', 1, 'male')
// const result2 = decoratedAdd('Yolo', 1, 'male')


// function three () {
//   console.log(c)
//   var c = 2
// }

// three()
// console.log(c)

// var a = 1
// if (true) {
//   console.log(a)
//   let a = 2
// }

// function outer() {
//   let a= 0;
//   function inner() {
//     a++;

//     return a
//   }
//   return inner
// }

// const result = outer();
// console.log(result())

// const createMemory = () => {
//   const data = []

//   const remember = (x) => {
//     if (!data.includes(x)) {
//       data.push(x)
//     }
//   }

//   const has = (x) => data.includes(x);
    
//   return {
//     remember,
//     has,
//   };
// };

// const memory1 = createMemory();

// memory1.remember(1);

// console.log(memory1.has(1))
// console.log(memory1.has(2))

