let input = [
    // '3,-12,0,0,13,5,1,0,-2'
    '0 15 30'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)

function convertC(x) {
    return  x*9/5 + 32
}

for (let i = 0;i<array.length;i++) {
    print(Math.round(convertC(array[i])))
}