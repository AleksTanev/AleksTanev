let input = [
  '6 7 3',

  '0 0',

  '2 2',

  '-2 2',

  '3 -1'
]
  
let print = console.log;
let gets = ((arr, index) => () => arr[index++])(input, 0)
  
let arrNandMandJ = gets().split(' ').map(Number)

const rows = arrNandMandJ[0]
const cols = arrNandMandJ[1]
const dirCount = arrNandMandJ[2]

let startCoordinates = gets().split(' ').map(Number)

// here we create an array with coordinates, which are also arrays. Index var will help us locate
let jumpDirections = []
let index = 0

for (let i = 0; i < dirCount; i++) {
  jumpDirections.push(gets().split(' ').map(Number))
}

// print(jumpDirections)

const matrix = []
let fill = 1

for (let i = 0; i < rows; i++) {
  const rowArr = [];
  for (let j = 0; j < cols; j++) {
    rowArr.push(fill++);
  }
  matrix.push(rowArr)
}

// console.table(matrix)

const getDirection = () => {

  if (index >= jumpDirections.length) {
    index = 0
  }
  return jumpDirections[index++]
}

const jumpLanding = (startRow, startCol) => {


  let direction = getDirection()

  let newRow = null
  let newCol = null

  if (startRow + direction[0] >= 0 && startRow + direction[0] < rows) {
    newRow = startRow + direction[0]
  }

  if (startCol + direction[1] >= 0 && startCol + direction[1] < cols) {
    newCol = startCol + direction[1]
  }

  return [newRow, newCol]
}

let startRow = startCoordinates[0]
let startCol = startCoordinates[1]
let jumps = 0
let sum = 0
let escaped = false
let caught = (matrix[startRow][startCol] !== 'x') ? false : true


while (!caught && !escaped) {

  sum += matrix[startRow][startCol]
  matrix[startRow][startCol] = 'x'
  jumps++

  let newCoordinates = jumpLanding(startRow,startCol)

  startRow = newCoordinates[0]
  startCol = newCoordinates[1]
  if (startRow === null || startCol === null) {
    escaped = true
  }

}

if (escaped) {
  print(`escaped ${sum}`)
} else {
  print(`caught ${jumps}`)
}