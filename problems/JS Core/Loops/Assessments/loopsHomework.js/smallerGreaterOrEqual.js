function smallerGreaterOr(input) {
  let num = Number(input[0])
  let index = 1
  let currentNum = input[index]
  index++

  let output = ''
  let numCounter = 0

  for (let i = 1; i < num; i++) {
    let numElement = Number(currentNum)
    currentNum = input[index]
    index++
    numCounter++
    let nextNum = Number(currentNum) 
   
    if (numElement > nextNum) {
      output += `${numElement}>`
    } else if (numElement < nextNum) {
      output += `${numElement}<`
    } else if (numElement === nextNum) {
      output += `${numElement}=`
    }
    
    if (numCounter >= num) {
      output += `${nextNum}`
    }
    numCounter++
  }
  console.log(output)
}
smallerGreaterOr(['3', '2', '5', '1'])
