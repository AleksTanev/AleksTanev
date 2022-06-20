
const func = (arr,start) => {
  let clone = [...arr].slice(start)
  let sum = 0
  for (const el of clone) {
    sum += el
  }
  return sum
}

console.log(func([1,2,3,4,5],2)) 

const funcMap = (arr, type) => {
  const newArr = [];

  for (const el of arr) {
    if (type === Number) {
      newArr.push(Number(el));
    } else if (type === String) {
      newArr.push(String(el));
    } else if (type === Boolean) {
      newArr.push(Boolean(el))
    } else if (type === Array) {
      newArr.push([el])
    } else if (type === Object) {
      newArr.push({Object(el)})
    }
  }
  return newArr
}

console.log(funcMap(['1',2,'1 2', true, false, 0, -1], Object))