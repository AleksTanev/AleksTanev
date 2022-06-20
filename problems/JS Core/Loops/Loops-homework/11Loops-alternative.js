// Word or number 3: Electric Bugaloo -> not finished!

let input = [
    '5',
    'a',
    '3',
    'ppl',
    '2',
    'e'

    // '7',
    // 'yo',
    // 'yoyo',
    // 'yoyoyo',
    // '0',
    // '-11',
    // 'x',
    // 'yo'

    // '2',
    // '3',
    // '-3',

]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let a
let str = ''
let count = 0
let countTwo = 0
let sum = 0

for (let i = 0; i<n; i++) {
    a = gets()
    if (isNaN(a)) {
        str = str + a + '-'
        count++
        if (countTwo>=2){
            print(sum)
            countTwo = 0
        }
    } else {
        sum = sum + Number(a)
        countTwo++
        if (count>=2) {
            print(str.slice(0, (str.length - 1)))
            count = 0
        }
    }
}

if (str !== '') {
    print(str.slice(0, (str.length - 1)))
}
if (countTwo>0) {
    print(sum)
}