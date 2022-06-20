// let input = [
//     '28,1,45,255'
// ]

let input = [
'2,1,0,2'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

const numbers = gets().split(',').map(Number)

const binNumbers = []


// here we create a bit representation of the numbers[] up to 8 symbols with a neste loop
for (const num of numbers) {
    let currNumber = num.toString(2)
    let zerosNeeded = 8 - currNumber.length 
    for (count = 0; count<zerosNeeded;count++) {
        currNumber = '0' + currNumber
    }

    binNumbers.push(currNumber)
}

// we declare the variable that will hold our final output
let finalStr = ''


// this will make the final check/adjustments and create the final result
for (let i = 0; i<binNumbers.length;i++) {
    let newNum = ''
    const arr = Array.from(binNumbers[i])
    if (i % 2 !== 0) {
        arr[1] = '', arr[3] = '', arr[5] = '', arr[7] = ''
        newNum = arr.join('')
    }
    if (i % 2 === 0) {
        arr[0] = '', arr[2] = '', arr[4] = '', arr[6] = ''
        newNum = arr.join('')
    }
    finalStr = finalStr + newNum
}

print(finalStr)