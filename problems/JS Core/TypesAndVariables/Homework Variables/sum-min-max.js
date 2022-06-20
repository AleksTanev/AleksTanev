let input = [
    '4',
    '4',
    '4',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a = +gets()
let b = +gets()
let c = +gets()

let max = Math.max(a,b,c)
let min = Math.min(a,b,c)

let sum = max+min

print(sum)