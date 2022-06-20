let print = this.print || console.log

let input = [
    '10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
    '8',
]

// let input = [
//     '3',
//     '-1',
//     '-2',
//     '-3',
// ]

let n = +input[0]
const arr = []

for (let i = 1; i <= n; i++) {
    arr.push(+input[i])
}

let maxValue = 0
let currValue = 0

for (let i = 0; i<arr.length;i++) {
    currValue = arr[i]
    for (let j = i+1; j<arr.length;j++) {
        currValue += arr[j]
        if (currValue > maxValue) {
            maxValue = currValue
        }
    }
}

print(maxValue)

// for (let i = 0; i<arr.length;i++) {

//     currMax1 = arr.reduce((acc,val) => acc + val)
//     currMax2 = arr.reduceRight((acc,val) => acc + val)
//     maxValues.push(Math.max(currMax1,currMax2))
//     arr.splice(i,1)
//     i--
// }

// print(Math.max(...maxValues))

