let input = [
    // '2 1 1 2 3 3 2 2 2 1'
    '2 2 2 6 6 6 6 7 2'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let numbArray = gets().split(' ')

// print(numbArray)

let currentSequence = 1
let maxSequence = 0
let pastElement

for (let i = 0; i < numbArray.length;i++) {
    let currentElement = numbArray[i]
    if (currentElement == pastElement) {
        currentSequence++   
        maxSequence = currentSequence
    } if (currentElement != pastElement) {
        currentSequence = 1
    }
    pastElement = currentElement

}
print(maxSequence)