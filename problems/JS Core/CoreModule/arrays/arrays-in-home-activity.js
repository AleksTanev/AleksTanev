const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

// const copyArr = [...arr]
// const newArr = copyArr.reverse()    // reverse is a mutable method, that means it will change the original input.
// console.log(newArr)                 // that's why we copy the arr before operating with it.
// console.log(arr)



// const copyArr = arr.slice()             // this is considered the old way of copying an array
// console.log(copyArr)



// console.log(arr.includes(10))           // returns true because arr includes an number value of 10.



// const found = arr.find(el => el > 6)        // return the first element from arr, greater than 6
// console.log(found)



// const unique = [...new Set(arr)]                // this uses the set object to create an array of unique values.
// console.log(unique)                             // by default beasically in Set there can be only unique values.



// const newArr = [1, 2, [3, 4, [5, 6]]];

// const flatArr = newArr.flat(2)
// console.log(flatArr)
// console.log(newArr)




// const array1 = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];

// let currSequence = 1
// let maxSequence = 0
// let currElement = ''
// let maxSeqElement = ''

// const array2 = [...array1].sort(function(a,b){return a-b})

// for(let i = 0; i<array2.length; i++) {
//     if (array2[i] === array2[i+1]) {
//         currSequence++
//         currElement = array2[i]
//         if (currSequence > maxSequence) {
//             maxSequence = currSequence
//             maxSeqElement = currElement
//         }
//     } else {
//         currSequence = 1
//         currElement = ''
//     }
// }

// console.log(maxSeqElement)



// Matrix diagonals:

const row = 4
const col = 4

const matrix = []
let char = 97

for (let i = 0; i < row; i++) {
    let rowArr = []
    for (let j = 0; j < col; j++) {
        rowArr.push(String.fromCharCode(char))
        char++
    }
    matrix.push(rowArr)
}

console.log(matrix)

const mainDiagonal = []
const secondDiagonal = []

for (let i = 0; i < row; i++) {
    mainDiagonal.push(matrix[i][i])
    secondDiagonal.push(matrix[i][col - 1 - i])

}
console.log(mainDiagonal)
console.log(secondDiagonal)







