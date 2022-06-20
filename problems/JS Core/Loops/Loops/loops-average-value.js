let input = [
    '3',
    '1.25',
    '2.5',
    '3',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let total = 0

for (i=1;i<=n;i++) {
    sum = +gets()
    total += sum
}
print((Math.round(total*100/n)/100).toFixed(2))
