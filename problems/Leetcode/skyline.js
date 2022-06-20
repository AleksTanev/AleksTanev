let input = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]

let n = input.length
let matrix = []

for (let i = 0; i<n;i++) {
    matrix.push(input[i])
}

console.table(matrix)
console.log(Math.max(matrix[1][2]))

let sumOutput = 0

let row = 0
let col = 0

let isAdjustable = true

for (let i = 0; i<n-1;i++) {
    for (let j = 0; j<n-1;j++) {
    let currHeight = matrix[i][j]
    // console.log(`${Math.max(matrix[i][col])} ${Math.max(matrix[row][i])}`)
        if (currHeight < Math.max.apply(Math,)) {
            if (i === n-1 && isAdjustable) {
            sumOutput += Math.min(Math.max(matrix[i][col]),Math.max(matrix[row][i])) - matrix[row][col]
        }
        continue
    } else {
        isAdjustable = false
        break
    }

    }
}
console.log(sumOutput)
