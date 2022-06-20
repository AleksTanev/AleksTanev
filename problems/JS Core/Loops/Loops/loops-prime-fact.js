let input = [
    // '26',
    '15000000'
    // '36'
    // '120'
    // '111'
    // '147'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()

let i = 2
let j
let output = ''

while (i<=n) {                      // this should check all values of i up until n
    j = 2                           // this is necessary to reset j back to 2

    if (n%i == 0) {                 // this basically means that i is a factor of n
        while (j<=i) {              // this will check if i has any factors, other than itself (and 1)
            if (i%j == 0 && i!==j) {
                break
            } else {
                for (n;(n%i== 0 && n>=i);n=n/i) {   //this will make sure to divide n as many times as it contains a single prime factor.
                print(i)                            // e.g. if n is 9 it will divide 9 by 3 and 3
                }
          
              }
        j++
        }
    }
i++
}
