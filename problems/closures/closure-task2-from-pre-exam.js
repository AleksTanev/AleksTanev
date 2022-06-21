// Function spy


/**
 * 
 * @param {(param: string | number) => any} data 
 * @returns {(param: string | number) => {value: any, calls: number}}
 */
function spyFn (dataFn/* always a function */) {

  const cache = {};

  const innerFn = (param) => { 

    if (param in cache) {
      cache[param].calls++
    } else {
      cache[param] = {
        value: dataFn(param),
        calls: 1
      }
    }

    return cache[param]
  }

  return innerFn

}

const result = spyFn(x=>x*2)

console.log(result(2))
console.log(result(2))
console.log(result(2))
console.log(result(2))
console.log(result(2))

