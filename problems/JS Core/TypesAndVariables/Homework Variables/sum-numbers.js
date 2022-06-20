let input = [
    '-2', 
    '0',
    '3'
]
 
let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a = +gets()
let b = +gets()
let c = +gets()

let sum = a+b+c

print(sum)