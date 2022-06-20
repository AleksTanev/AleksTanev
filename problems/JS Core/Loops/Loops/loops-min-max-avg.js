let input = [
    '3',
    '2',
    '5',
    '1',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let total = 0
let a = 0
let b = 0

if (n>=1 && n<=1000) {
    for (i=1; i<=n; i++) {
        sum = +gets()
        total += sum

            if (sum<=a || a == 0){
                a = sum
            }
            if (sum>=b || b == 0) {
                b = sum
            }
    }
    print(`min=${(Math.round(a*100)/100).toFixed(2)}`)
    print(`max=${(Math.round(b*100)/100).toFixed(2)}`)
    print(`sum=${(Math.round(total*100)/100).toFixed(2)}`)
    print(`avg=${(Math.round(total/n*100)/100).toFixed(2)}`)


} else {
    print('please enter a valid number')
}