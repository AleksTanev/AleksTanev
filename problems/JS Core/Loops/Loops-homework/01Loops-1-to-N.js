let input = [
    '3'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let output = ''

for (let i =1; i<=n; i++) {
    output += `${i} `
}
print(output)