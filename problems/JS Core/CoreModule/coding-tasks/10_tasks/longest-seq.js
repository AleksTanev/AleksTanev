let input = [
    '10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()

let arr = []

for (let i = 1; i <= n; i++) {
    arr.push(gets())
}

let currSeq = 1
let maxSeq = 0

for (let i = 0; i<n;i++) {
    if (arr[i] === arr[i+1]) {
        currSeq ++
        if (currSeq > maxSeq) {
            maxSeq = currSeq
        }
    } else {
        currSeq = 1
    }
}

print(maxSeq)