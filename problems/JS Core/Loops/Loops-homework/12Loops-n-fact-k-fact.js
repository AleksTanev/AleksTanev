let input = [
    // '5',
    // '2',
    // '6',
    // '5'
    '8',
    '3'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let k = +gets()
let factorial = 1

for (i=n; i>k; i--) {
    factorial = factorial*i
}

print(factorial)