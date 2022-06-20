function maxValueFind(input) {
  let num = Number(input[0])
  let index = 1
  let currentInput = input[index]
  index++
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 1; i <= num; i++) {
    let currentNum = Number(currentInput)
    if (currentNum > max) {
      max = currentNum
    }
    currentInput = input[index]
    index++
  }
  console.log(`${max}`)
}
maxValueFind(['3', '1', '2', '3'])