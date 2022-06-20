let input = [
    // '2 1 1 2 3 3 2 2 2 1'
    // '2 1 2 1 3 1 6 1 2'
    '1 2 1 4 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)

let i = 0
let startsBig = Boolean(array[0]>array[1]) // checking if the wave starts high or low

if (startsBig && array.length>2) {         // if it starts high
    while (i<array.length) {
        if ((i%2 == 1 && (array[i]<array[i+1]) || (i%2 == 0 && array[i]>array[i+1]) || array[i+1] == undefined)) { // checking if each odd number (low) is smaller than the evens
        } else {
            print('No wave')
            break
        }
    i++
        if (i == array.length){
            print('Its a wave')
        }
    }
} else if (!startsBig && array.length>2) {      // if it starts low
    while (i<array.length) {
        if ((i%2 == 1 && array[i]>array[i+1]) || (i%2 == 0 && array[i]<array[i+1]) || array[i+1] == undefined) { // checking if each even number (low) is smaller than the odds
        } else {
            print('No wave')
            break
        }
    i++
        if (i == array.length){                 // if we've reached the end of the array and everything was true, then it's a wave
            print('Its a wave')
        }
    }
} else {
    print('String must be atleast 3 numbers')
}