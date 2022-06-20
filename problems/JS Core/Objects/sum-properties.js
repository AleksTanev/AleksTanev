let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

//Solution

let sum = 0

for (var wage in salaries) {
    sum += salaries[wage]
}

console.log(sum)