let input = [
    // '5',
    // 'a',
    // '3',
    // 'ppl',
    // '2',
    // 'e'

    // '7',
    // 'yo',
    // 'yoyo',
    // 'yoyoyo',
    // '0',
    // '-11',
    // 'x',
    // 'yo'

    '2',
    '3',
    '-3'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let a
let str = ''
let sum = 0

for (let i = 0; i<n; i++) {
    a = gets()
    if (isNaN(a)) {
        str = str + a + '-'
    } else {
        sum = sum + Number(a)
    }
}

if (str !== '') {
    print(str.slice(0, (str.length - 1)))
} else {
    print('no words')
}

if (sum !== 0) {
    print(sum)
} else {
    print('0')
}