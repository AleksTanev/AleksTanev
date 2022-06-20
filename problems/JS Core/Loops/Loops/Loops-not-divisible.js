let input = [
    '11',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()
let output = ''

if (n > 1 && n < 1500) {

    for (let i=0; i<=n; i++)  {
        if (i%3 === 0 || i%7 === 0) {
            continue
        }

        output = output + `${i} `
        
    }

print(output)

} else {
    print(`not a number between 1 and 1500`)
}

