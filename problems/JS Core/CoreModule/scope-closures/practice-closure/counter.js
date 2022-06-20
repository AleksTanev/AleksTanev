
const createCounter = (counter = 0) => {

  const increment = function() {
    return counter++
  }

  return increment
}

const counter = createCounter(1)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
