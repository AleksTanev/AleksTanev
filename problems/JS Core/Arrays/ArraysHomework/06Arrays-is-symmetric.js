let input = [
    // '2 1 1 2 3 3 2 2 2 1'
    // '2 2 2 6 6 6 6 7 2'
    // '1 2 3 3 2 1'
    '1 2 3 3 3 3 3 2 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)

for (let i = 0; i<array.length/2;i++) {                    
    if (array[i] != array[array.length-i-1]) {
        print('No')
        break
    } else if (i == Math.floor((array.length-1)/2)) {       // doing this rounding to include odd and even number of elements
        print('Yes')
    }
}