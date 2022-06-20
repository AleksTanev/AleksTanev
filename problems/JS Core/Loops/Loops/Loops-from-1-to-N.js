let input = [
    `5`,
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let number = +gets()
let initial = 1
let output = ''

while (initial <= number) {
    output = output + `${initial} `
    initial++
}

print (output)