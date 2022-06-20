let input = [
    // '3',
    // '2',
    // '1',
    // '5'
    '5',
    '2',
    '2',
    '-11',
    '0',
    '0'

]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let a
let b
output = ''

for (let i =1; i<=n;i++) {
    b = a
    a = +gets()
    if (a>b) {
        output = output + '<'
    } else if (a<b) {
        output = output + '>'
    } else if (a==b) {
        output = output + '='
    }
    output = output + `${a}`
}
print(output)