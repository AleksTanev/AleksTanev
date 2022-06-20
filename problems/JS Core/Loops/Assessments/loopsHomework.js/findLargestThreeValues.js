function findLargestThreeValues(input) {
  let num = Number(input[0])
  let index = 1
  let currentNum  = input[index]
  for (let i = 1; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
        if(j < i){
            index = currentNum
            input[j] = input[i]
            input[i] = index
        }
    }
  }
  return input;
}
console.log(findLargestThreeValues([3, 3, 1, 2]))