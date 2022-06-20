let input = [
    '3',
    '2',
    '1',
    '5'
    // '5',
    // '2',
    // '2',
    // '-11',
    // '0',
    // '0'

]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let a
let max
let min
let sum = 0

for (let i = 0; i<n; i++) {
    a = +gets()
    sum = sum + a

    if (a>=max || max == undefined) {
        max = a
    }
    if (a<=min || min == undefined) {
        min = a
    }
}

print(min)
print(max)
print(sum)

// let str = String(sum/n)             // doing this because the condition of the task
// if (str.includes('.')) {            // doesn't say we want a rounded number, and 
//     point = str.indexOf('.')        // example one shows avg to return 2.66 output
//     print(str.slice(0, (point+3)))  // and not 2.67 (which is rounded)

// }


print(Number(Math.floor((sum / n) * 100) / 100))