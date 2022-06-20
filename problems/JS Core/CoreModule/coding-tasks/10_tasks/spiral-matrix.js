let input = [
    '3'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)


const n = +gets()

let col = 0
let row = 0
let digit = 1
let direction = 'right'
const matrix = []

for (let i = 0; i < n; i++) {
    const rowArr = []
    for (let j = 0; j < n; j++) {
        rowArr.push('x')
    }
    matrix.push(rowArr)
}

while (digit <= n * n) {

    if (direction === 'right') {
        if (matrix[row][col] === 'x' && col < n) {
            matrix[row][col] = digit
            col++
        } else { 
            direction = 'down'
            col--
            row++
            digit--
        }
    } else if (direction === 'down') {
        if (row<n && matrix[row][col] === 'x') {
            matrix[row][col] = digit
            row++
        } else {
            direction = 'left'
            col--
            row--
            digit--
        }

    } else if (direction === 'left' ) {
        if (col >= 0 && matrix[row][col] === 'x') {
            matrix[row][col] = digit
            col--
        } else {
            direction = 'up'
            col++
            row--
            digit--
        }

    } else if (direction === 'up') {
        if (row >= 0 && matrix[row][col] === 'x') {
            matrix[row][col] = digit
            row--
        } else {
            direction = 'right'
            col++
            row++
            digit--
        }
    }
    digit++
}

print(matrix)

