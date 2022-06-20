let input = [
    '5',
    '2',
    '1',
    '3',
    '2',
    '4',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let product = 1
let i = 0
let odds = 1
let even = 1

while (i<n) {
    if (i%2 == 0) {
    odds = odds*Number(gets()) 
    } else if (i%2 == 1) {
    even = even*Number(gets())
    }
   i++
}
if (odds==even) {
    print(`yes ${odds}`)
} else {
    print(`no ${odds} ${even}`)
}