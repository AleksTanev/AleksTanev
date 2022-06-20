let input = [
    // '2 1 1 2 3 3 2 2 2 1'
    '2 2 2 6 6 6 6 7 2'
    // '1 2 3 4 5'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let list = gets().split(' ').map(Number)
let prevElement

for (let i = 0; i < list.length; i++) {
    let currElement = list[i]
    if (currElement < prevElement) {
        print('No')
    } else if (currElement>=prevElement && i == list.length-1) {
        print('Yes')
    }
    prevElement = currElement
}