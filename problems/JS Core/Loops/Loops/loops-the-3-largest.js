let input = [
    '5',
    '100',
    '9',
    '-700',
    '0',
    '-100'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let N = +gets()
let i = 0

let largest
let secondLargest
let thirdLargest

if (N>=3 && N<=20) {
    while (i<N) {
        a = +gets()
        
        if (largest == undefined && a>=-500 && a<=500 || largest<=a && a>=-500 && a<=500) {
            thirdLargest = secondLargest
            secondLargest = largest
            largest = a
        } else if (secondLargest == undefined && a>=-500 && a<=500 || a<largest && a>=secondLargest && a>=-500 && a<=500) {
            thirdLargest = secondLargest
            secondLargest = a
        } else if (thirdLargest == undefined && a>=-500 && a<=500 || a<secondLargest && a>=thirdLargest && a>=-500 && a<=500) {
            thirdLargest = a
        }
        i++
    }   
print(`${largest}, ${secondLargest} and ${thirdLargest}`)
}
