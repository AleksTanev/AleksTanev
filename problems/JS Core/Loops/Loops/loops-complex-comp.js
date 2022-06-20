let input = [
    '3',
    '2',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let N = +gets()
let x = +gets()
let i = 1
let factorial = 1
let divisor = 0
let equation = 0
let a = ''

while (i<=N) {

    factorial = factorial*i
    divisor = Math.pow(x,i)
    equation = equation + factorial/divisor
    i++
}
a = +(Math.round(equation*100000)/100000).toFixed(5)
print((Math.round((1+a)*100000)/100000).toFixed(5))

//