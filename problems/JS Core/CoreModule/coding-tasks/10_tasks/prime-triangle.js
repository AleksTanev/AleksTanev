let input = ['77']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let N = +gets()

let currDigit = 1
let maxRow = N
let maxCol = N
let divisor = 2
let output = ''

while (currDigit <= maxRow) {
    if (maxRow >=3 && currDigit <=3) {
        output += '1'
        print(output)
        currDigit++
        continue
    }
    while (divisor <= currDigit/2) {
        if (currDigit%divisor === 0) {
            output += '0'
            // print(output)
            break
        } else if (divisor === Math.floor(currDigit/2)) {
            output += '1' 
            print(output)
        }
    divisor++

    }
    divisor = 2
    currDigit++
}