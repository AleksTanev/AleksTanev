let input = [
    '3.5',
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let r = +gets()

let perimeter = (Math.round(2*r*Math.PI*100)/100).toFixed(2)
let area = (Math.round(Math.PI*Math.pow(r,2)*100)/100).toFixed(2)

print(perimeter)
print(area)