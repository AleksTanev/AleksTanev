const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

// let counter = 0

// while (counter<arr.length) {
//     console.log(arr[counter])
//     counter++
// }

// for (let i = 0; i<arr.length;i++) {
//     console.log(arr[i])
// }

// for (const index of arr) {
//     console.log(arr[index])
// }

// for (const el in arr) {
//     console.log(el)
// }

// let counter = 0
// while (counter<Math.floor(arr.length/2)) {
//     console.log(arr[counter])
//     counter++
// }

for (let i = 0; i<arr.length; i++) {
    if (i%2 === 0) {
    console.log(arr[i])
    } else {
        continue
    }
}
