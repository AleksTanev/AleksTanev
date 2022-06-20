let input = [
    // '2 1 1 2 3 3 2 2 2 1'
    '2 2 2 6 6 6 6 7 2'
    // '1 2 3 4 5'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)

let biggestNumb
let secBiggestNumb

for (let i = 0; i< array.length;i++) {
    let currNumb = array[i]
    if (currNumb >= biggestNumb || biggestNumb == undefined) {
        secBiggestNumb = biggestNumb
        biggestNumb = currNumb
    }
}

print(biggestNumb)
print(secBiggestNumb)