let input = [
    '0',
    '0',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a = +gets()
let b = +gets()

let greater = Math.max(a,b)

print(greater)