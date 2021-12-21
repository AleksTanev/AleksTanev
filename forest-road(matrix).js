let input = "5"

let width = +input          // width of the forest

let height = 2*width - 1    // height of the forest

let forest = []

for (let i = 0; i<height;i++) {
    let row = []
    for (let j = 0; j<width;j++) {
        row.push('.')
    }
    forest.push(row)        // creating the forest as a matrix
}

let row = 0
let col = 0
let direction = 'right'

while (col<width && row<height) {
    if (direction === 'right') {
    forest[row][col] = "*"
    console.log(forest[row].join(''))
    row++
    col++
        if (col === width) {
            direction = 'left'
            col--
            col--
        }
    } else if (direction === 'left') {
        forest[row][col] = "*"
        console.log(forest[row].join(''))
        row++
        col--
    }
}
