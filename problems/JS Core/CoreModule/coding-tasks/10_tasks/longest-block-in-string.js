let input = [
    '22xxx'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let str = gets()

const arr = Array.from(str)

let currSeq = 1
let maxSeq = 1
let output = ''

for (let i = 0; i < arr.length; i++) {
    let currOutput = arr[i]
    for (let j = i + 1; j < arr.length;j++) {
        if (arr[i] === arr[j]) {
            currSeq++
            if (currSeq > maxSeq) {
                maxSeq = currSeq
                output = currOutput
            }
        } else {
            break
        }
    }
    currSeq = 1
}

if (output === '') {
    output = str[0]
}

let toPrint = (str.length > 1) ? output.repeat(maxSeq) : str[0]
print(toPrint)


// for (let i = 0; i<arr.length;i++) {
//     currOutput = arr[i]
//     if (arr[i] === arr[i+1]) {
//         currSeq ++
//         if (currSeq > maxSeq) {
//             maxSeq = currSeq
//             output = currOutput
//         }
//     } else {
//         currSeq = 1
//     }
// }

// const temp = output
// let final = ''

// for (let i = 0; i < maxSeq; i++) {
//     final += temp
// }

// print(final)



// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

// let str = gets()

// let currSeq = 1
// let maxSeq = 0
// let output = ''

// if (str.length === 1) {
//     output = str
// } else {
//     for (let i = 0; i < str.length; i++) {
//         let currOutput = str[i]
    
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 currSeq++
//                 currOutput += str[j]
//             } else {
//                 break
//             }
//         }
//         if (currSeq > maxSeq) {
//             maxSeq = currSeq
//             output = currOutput
//         }
//         currSeq = 1
//     }
// }

// print(output)