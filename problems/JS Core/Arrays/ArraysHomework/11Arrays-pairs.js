let input = [
    '6',
    '1 2 3 4 3 6 5 8 3 9'
    // '2 1 2 1 3 1 6 1 2'
    // '1 2 1 4 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let result = +gets()
let array = gets().split(' ').map(Number)

for (let j = 0; j<array.length;j++) {
    for (let i = j+1; i<array.length;i++){
        if (array[i] + array[j] == result) {
            print(`${array[j]}, ${array[i]}`)
        }
    }
}