let input = [
    '2',
    '18',
    '13.5',
]


let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let n = +gets()

for (i=1;i<=n;i++) {
    sum = +gets()
    print((Math.round(sum*0.35+'e2')/100).toFixed(2))
}

