let input = [
    // '3',
    // '2'
    '5',
    '-4'
    // '4',
    // '3'
    // '7',
    // '0'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let x = +gets()
let factorial = 1
let sum = 1

for (let i = 1; i<=n;i++) {
    factorial = factorial*i
    sum = sum + factorial/(Math.pow(x,i))
}
print(sum.toFixed(5))