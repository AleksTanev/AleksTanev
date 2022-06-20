// 1. Create a forEach function that accepts an array and an fn

const forEach = function (arr, fn) {

  for (const el of arr) {
    fn(el)
  }

}

// 2. Create a filter function which accepts an array and a checkFn and returns a new filtered array.

const filter = function (a) {
  let result = false
  if (a % 2 === 0) {
    result = true
  }
  return result
}

const subtractEven = function (a) {
  let sum = a
  if (checkFn(a)) {
    sum--
  }
  return sum
}

console.log(subtractEven(21))