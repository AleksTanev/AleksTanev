function numbersNotDevisible(input) {
  let num = input[0]
  let output = ' '
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      continue
    } else if (i % 7 === 0) {
      continue
    }
    output = `${output} ${i}`
  }
  console.log(output)
}
numbersNotDevisible(['10'])
