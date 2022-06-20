// const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7]

// // console.log(arr.sort((a, b) => a - b))

// const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];
// const newArr = []

// for (const person of people) {
//     const sorted = Array.from(person).sort().join('')

//     newArr.push(sorted)
// }

// console.log(people.sort())
// console.log(newArr.sort())



// filling matrices!

const matrix = []

const number = 4

for (i = 0;i<number;i++) {
    const row = Array.from({length:number})
    matrix.push(row)
}

// matrix 2 - fills down/up/down/up

// let counter = 1
// let direction = "down"
// let col = 0
// let row = 0

// while (counter <= 16) {
//     if (direction === 'down' && row < number && col<number) {
//         matrix[row][col] = counter
//         counter ++
//         row++
//         if (row === 4) {
//             direction = 'up'
//             col++
//             row--
//         }

//     } else if (direction === 'up' && row >= 0 && col <number) {
//         matrix[row][col] = counter
//         counter++
//         row--
//         if (row === -1) {
//             direction = 'down'
//             row++
//             col++
//         }
//     }
// }
// console.log(matrix)


// matrix 1 - fills - down/down/down/down

// let counter = 1
// let col = 0
// let row = 0

// while (counter <= 16) {
//     if (row < number && col<number) {
//         matrix[row][col] = counter
//         counter ++
//         row++
//         if (row === 4) {
//             col++
//             row = 0
//         }

//     }
// }
// console.log(matrix)


// matrix 3 - diagonals

let counter = 1

