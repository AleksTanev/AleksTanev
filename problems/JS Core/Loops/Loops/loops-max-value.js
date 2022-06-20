let input = [
    '3',
    '07',
    '-1',
    '-200'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let N = +gets()
let value = -200
let i = 0

if (N<=20 && N>=1) {
    while (i<N) {
        a = +gets()
        if (value<=a && a<=200 && a>=-200) {
            value = a
        }
    i++
    }
print(value)
}