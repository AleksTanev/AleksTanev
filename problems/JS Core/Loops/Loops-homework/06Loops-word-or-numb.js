let input = [
    // '3',
    // 'word'
    // 'doggy'
    'JavaScript'

]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let str = gets()
let output = ''

if (isNaN(str)) {
    n = str.length
    for (i=n-1; i>=0 ; i--) {
        output = output + str.charAt(i)
    }
    print(output)
} else {
    print(Number(str) + 1)
}

