function wordOrNumber(input) {
  let index = 0
  let currentInput = input[index]
  index++
  let reversedText = ''
  let parsed = parseInt(currentInput)
  
 for(let i = 0; i < 5; i++){
  
  if (isNaN(parsed)) {
    for (let position = currentInput.length - 1; position >= 0; position--) {
      reversedText += currentInput.charAt(position)
    }
    console.log(`${reversedText}`)
  }
    
  let currentNum = Number(currentInput)
  if (Number(currentInput) !== NaN){
    let sum = currentNum + 1
      console.log(sum)
  }
  currentInput = input[index]
  index++
 }
}
wordOrNumber(['good', 'TA', '32', '42.5', '-1'])
