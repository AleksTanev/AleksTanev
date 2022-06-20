// let input = [
//     '6',

//     '1 2 3 4 5 6',
    
//     '2 3 4 5 6 7',
    
//     '6 5 4 3 2 1',
    
//     '3 4 5 6 7 8',
    
//     '4 5 6 7 8 9',
    
//     '9 8 7 6 5 4',
    
//     '3 5 3 -5 -4 -2'
// ]

let input = [
    '5',

    '1 22 3 41 5 2',

    '2 13 4 -5 6 5',
    
    '-6 5 9 31 2 8',
    
    '3 14 5 -6 7 4',
    
    '4 -5 6 -7 8 7',
    
    '-1 -1 3 3 4 -3 -4 3'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)


const n = +gets()

const matrix = []

for (let row = 0; row < n; row++) {
    matrix.push(gets().split(' ').map(Number))
}

const colN = matrix[0].length

const coordinates = gets().split(' ').map(Number)

const sumCoord = function (a, b) {
    let x = Math.abs(a) - 1
    let y = Math.abs(b) - 1
    let sum = 0
    if (a > 0) {
        for (let i = 0; i < y; i++) {
            sum += matrix[x][i]
        }
        for (let row = x; row >= 0 && row < n-1;) {
            if (b < 0) {
                row++
            } else {
                row --
            }
            sum +=matrix[row][y]
        }
    }
    if (a < 0) {
        for (let i = 0; i <= colN - Math.abs(b); i++) {
            sum += matrix[x][colN-1-i]
        }
        for (let row = x; row >= 0 && row < n - 1;) {
            if (b < 0) {
                row++
            } else {
                row --
            }
            sum +=matrix[row][y]
        }
    }

    return sum
}

const values = []

for (let i = 0; i < coordinates.length; i += 2) {
    values.push(sumCoord(coordinates[i],coordinates[i+1]))
}

print(values)
print(Math.max(...values))