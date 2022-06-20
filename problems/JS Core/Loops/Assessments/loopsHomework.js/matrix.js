function matrix(input) {
  let num = Number(input[0])
  let printCurrentLine = ' '
  let current = 0
  for (let row = 1; row <= num; row++) {
    // current++
    for (let column = num; column >= 1; column--) {
      current++ 
      printCurrentLine += current + ' '       
    }
    console.log(printCurrentLine)
    current = row
    printCurrentLine = ' '
  }
}
matrix(['4'])