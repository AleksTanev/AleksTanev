let input = ['33']

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
output = ''

for (i = 0; i<n;i++) {
    for (j = 1; j<=n; j++) {
        output += `${j+i}`
        
    }
    print(output)
    output = ''
}
