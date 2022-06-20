let root = [5,4,8,11,null,13,4,7,2,null,null,null,1]
let targetSum = 22

let n = root.length

// let treeStart = root[0]
// let treeStop = n-1

let currSequence = 1
let currSum = 0

let isLeaf = true
let isConnected = true

let matrix = []
let currIndex = 0
let rowCount = 0
let branchCount = 0

for (let i = 1; i<=n;i *=2) {
    let row = []
    for (j=0;j<i;j++) {
        if (root[currIndex] !== undefined) {
        row.push(root[currIndex])
        currIndex++
        }
    }
    matrix.push(row)
    branchCount = i
    rowCount++
}

let row = 0
let col = 0
let isNumber = true

while (row <= rowCount && isNumber) {

    if (matrix[row][col] === null || matrix[row][col] === undefined) {
        isNumber = false
        if (currSum === targetSum) {
        console.log(true)
        } else if ({

        }
        currSum = 0
    }
    currSum += matrix[row][col]
}

// https://leetcode.com/problems/path-sum/