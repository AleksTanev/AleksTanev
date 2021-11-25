let input = ['5'];
  
  let print = this.print || console.table;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let n = +gets()
let matrix = []

for (let i = 0; i<n;i++) {
    let row = []
    for (j=0;j<n;j++) {
        row.push(0)
    }
    matrix.push(row)
}

print(matrix)

let down = 'down'
let up = 'up'
let left = 'left'
let right = 'right'
let direction = right

let cellValue = 1
let maxCellValue = n*n

let row = 0
let col = 0

while (cellValue<=maxCellValue) {
    if (direction === right){
        if (col<n && matrix[row][col] === 0) {
            matrix[row][col] = cellValue
            col++
        } else {
            direction = down
            row++
            col--
            cellValue--
        }
    } else if (direction === down) {
        if (row<n && matrix[row][col] === 0) {
            matrix[row][col] = cellValue
            row++
        } else {
            direction = left
            col--
            cellValue--
            row--
        }
    } else if (direction === left) {
        if (col>=0 && matrix[row][col] === 0) {
            matrix[row][col] = cellValue
            col--
        } else {
            direction = up 
            cellValue--
            col++
            row--
        }
    } else if (direction === up) {
        if (row>=0 && matrix[row][col] === 0) {
        matrix[row][col] = cellValue
        row--
        } else {
            direction = right
            cellValue--
            col++
            row++
        }
    }

    cellValue++
}

print(matrix)