let input = [
    // '256'
    '123.45'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split('')
let newArray = []

for (i=array.length-1;i>=0;i--) {
    newArray.push(array[i])
}

print(newArray.join(''))