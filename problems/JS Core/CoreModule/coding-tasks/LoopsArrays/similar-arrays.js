let print = this.print || console.log

let input = [
    '5',
    '3 1 5 2 6',
    '6',
    '4 1 7 9 2 4',
]

let length1 = +input[0]
const arr1 = input[1].split(" ")
let length2 = +input[2]
const arr2 = input[3].split(" ")

const uniqueArr1 = [... new Set(arr1)].map(Number).sort((a, b) => a - b)
const uniqueArr2 = [... new Set(arr2)].map(Number).sort((a, b) => a - b)

const diffNums = []

if (JSON.stringify(uniqueArr1)==JSON.stringify(uniqueArr2)) {
    print(uniqueArr1.length)
} else {
    for (let i = 0;i<uniqueArr1.length;i++) {
        if (uniqueArr2.includes(uniqueArr1[i])) {
            continue
        } else {
        diffNums.push(uniqueArr1[i])
        }
    }
    print(diffNums.join(' '))
}
