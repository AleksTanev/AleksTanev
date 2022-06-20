let input = [
    // '2 -1 1 -2 3 3 2 -2 2 1'
    '7 2 -2 1 -5 4 5 -3 1'
    // '2 1 2 1 3 1 6 1 2'
    // '1 2 1 4 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)
let newArray = []

let count = 0

for (let i = 0; i < array.length; i++) {        // filling new array with negative values
    if(array[i]<0) {
        newArray[count] = array[i]
        count++
    }
}

for (let j = 0; j<array.length;j++) {           // filling new array with positive values
    if (array[j]>=0) {
        newArray[count] = array[j]
        count++
    }
}
print(newArray)
