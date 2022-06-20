let input = [
    // '3,-12,0,0,13,5,1,0,-2'
    '4,3,2,7,8,2,3,1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(',').map(Number)

let N = array.length
let fullArray = []

for (let i = 1;i<=N;i++) {
    fullArray.push(i)
}
print(fullArray)

for (let i = 0; i<N;i++) {
    for (let j = 0; j<N;j++){
        if (array[j]===fullArray[i]) {
            fullArray.splice(i,1)
            i--
            break
        }
    }
}

print(fullArray.join(','))


// let a = array.length
// let notIncludedList = []

// for (let i = 0; i<array.length;i++) {
//     for (let j = 2; j<=a;j++) {
//         if (array[i]%j === 0 || array[i] === 1) {
//             array.splice(i,1)
//             i--
//             break
//         }
//     }
// }

// print(array.join(','))