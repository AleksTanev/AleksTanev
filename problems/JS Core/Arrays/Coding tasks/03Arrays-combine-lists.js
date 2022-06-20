let input = [
    '2,5,6',
    '7,6,9'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let arrayUno = gets().split(',')
let arrayZwei = gets().split(',')

let newArray = []

for (let i = 0; i<arrayUno.length;i++) {
    newArray.push(arrayUno[i])
    newArray.push(arrayZwei[i])
}
         
print(newArray.join(','))