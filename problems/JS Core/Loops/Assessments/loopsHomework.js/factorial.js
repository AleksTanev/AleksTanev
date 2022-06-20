function factorial(input) {
  let n = input[0]
  let x = input[1]
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum = i + ((x - 1) * i) / x
  }
  console.log(sum.toFixed(5))
}
factorial(['3', '2'])
