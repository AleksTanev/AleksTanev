let input = [
    '3,-12,0,0,13,5,1,0,-2'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(',').map(Number)

let newArray = []

for (let i = 0; i< array.length; i++) {
    if (array[i] !== 0) {
        newArray.push(array[i])
    }
}
for (let j = 0; j<array.length;j++) {
    if (array[j] === 0) {
        newArray.push(array[j])
    }
}

print(newArray.join(','))