let name = 'Pesho';

function outer() {
  let a = 0;

  function inner() {
    a++;
    name = name + '_';

    return a;
  }

  return inner;
}

const result = outer();
let result2 = outer();

console.log(result()); // 1
console.log(result()); // 2
console.log(result2()); // 1
console.log(result()); // 3
console.log(result2()); // 2


