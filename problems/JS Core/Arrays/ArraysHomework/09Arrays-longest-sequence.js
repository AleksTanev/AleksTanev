let input = [
    '2 -1 1 -2 3 3 2 -2 2 1'
    // '7 2 -2 1 -5 4 5 -3 1'
    // '2 1 2 1 3 1 6 1 2 22 18 -3 44 45 46 47'
    // '1 -2 3 4 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)

let maxSequence = 0
let currSequence = 1
let output = ''
let endOutput = ''


for (let i = 0; i<array.length-1;i++) {

    let currElement = array[i]
    let nextElement = array[i+1]

    if (currElement<nextElement) {
        currSequence++
        if (output === '') {
            output = `${array[i]} ${array[i+1]}`
        } else {
            output += ` ${array[i+1]}`
        }
    } else {
        currSequence = 1
        output = ''
    }
    if (maxSequence<=currSequence) {
        maxSequence = currSequence
        endOutput = output
    }
}

print(maxSequence)
print(endOutput)