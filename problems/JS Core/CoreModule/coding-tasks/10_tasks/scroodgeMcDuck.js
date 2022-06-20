let input = [
    '4 3',

    '3 2 4',

    '2 0 3',
    
    '1 1 5',
    
    '2 2 5'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

const nAndM = gets().split(' ').map(Number)

const rows = nAndM[0]
// const cols = nAndM[1]

const matrix = []

// starting indices
let startCol = 0
let startRow = 0

let coins = 0


// while creating the matrix, we take an extra step to find the index of the 0, where we start.
for (let i = 0; i < rows; i++) {
    const currRow = gets().split(' ').map(Number)
    if (currRow.indexOf(0) !== -1) {
        startCol = currRow.indexOf(0)
        startRow = i
    }

    matrix.push(currRow)
}

print(matrix)


console.log(startRow,startCol)

const mostCoinCell = (row,col) => {
    let left = matrix[row][col-1]
    let right = matrix[row][col+1]
    let up = matrix[row-1][col]
    let down = matrix[row+1][col]

    if (Math.max(left,right,up,down) === 0) return 'end';

    if (Math.max(left,right,up,down) === left) return [startRow,startCol-1];
    if (Math.max(left,right,up,down) === right) return [startRow,startCol+1];
    if (Math.max(left,right,up,down) === up) return [startRow-1,startCol];
    
    return [startRow+1,startCol];
}

while (mostCoinCell(startRow,startCol) !== 'end') {

    let newCellCoord = mostCoinCell(startRow,startCol)
    
    matrix[newCellCoord[0]][newCellCoord[1]]--
    coins++

    startRow = newCellCoord[0]
    startCol = newCellCoord[1]
}

console.log(coins)

