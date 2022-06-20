function oddEvenProduct(input){
let numLines = Number(input[0])
let index = 1
let currentInput = input[index]
index++
let oddProduct = 1
let evenProduct = 1
let printLine = ' '
for (let i = 1; i <= numLines; i++) {
    let currentLine = Number(currentInput)
  if (i % 2 !== 0) {
    oddProduct *= currentLine
  } else if (i % 2 === 0){
      evenProduct *= currentLine
  }
  currentInput = input[index]
  index++
}
if(oddProduct === evenProduct){
    console.log(`yes ${oddProduct}`)
} else {
    console.log(`no ${oddProduct} ${evenProduct}`)
}
}
oddEvenProduct(['5', '4', '3', '2', '5', '2'])