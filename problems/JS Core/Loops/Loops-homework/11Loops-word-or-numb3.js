// Word or number 3: Electric Bugaloo // not finished

let input = [
    // '5',
    // 'a',
    // '3',
    // 'ppl',
    // '2',
    // 'e'

    '7',
    'yo',
    'yoyo',
    'yoyoyo',
    '0',
    '-11',
    'x',
    'yo'

    // '2',
    // '3',
    // '-3'

]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let arr = []
let str = []
let sum = 0

for (let i =  0; i<n;i++) {
    arr.push(gets())
}

for (let i = 0; i<n; i++) {
    if (isNaN(arr[i])) {
        str.push(arr[i])
        if (isNaN(arr[i+1]) && arr[i+1] !== undefined) {
            continue
        } else if (!isNaN(arr[i+1]) || arr[i+1]===undefined) {
            print(str.join('-'))
            str = []
        }
    } else if (!isNaN(arr[i])) {
        sum += Number(arr[i])
        if (!isNaN(arr[i+1]) && arr[i+1] !== undefined) {
            continue
        } else if (isNaN(arr[i+1]) || arr[i+1]===undefined) {
            print(sum)
            sum = 0
        }
    }
}
