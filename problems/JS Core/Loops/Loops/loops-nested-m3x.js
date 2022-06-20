let input = [
    '5',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()

// print(i) print(n)
// print i+1 print n+1
// print i+2
// ... print(n)


let output = ''

for (row=1;row<=n;row++) {
    for (col=0;col<=n-1;col++){
        output = output + `${row+col} `
    }
    print(output)
    output = ''
}
