let input = [
    // '8 3 2 4 5'
    // '2 1 1 6 3'
    '3 10 4 6 5 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let str = gets()
let numbers = str.split(' ')
let length = numbers.length
let odds = 1
let even = 1


for (i=0; i < length; i++) {
    if (i%2 == 0) {
    odds = odds*Number(numbers[i]) 
    } else if (i%2 == 1) {
    even = even*Number(numbers[i])
    }
}
if (odds==even) {
    print(`yes ${odds}`)
} else {
    print(`no ${odds} ${even}`)
}

