let input = [
    '3,-12,0,0,13,5,1,0,-2'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(',').map(Number)
let avg = 0
let below = []
let above = []

if (array.length>=1 && array.length<=20) {
    for (let i = 0; i < array.length;i++) {
        avg += array[i]/array.length
    }
    for (let i = 0; i<array.length;i++) {
        if (array[i]<avg) {7, 2, -2, 1, -5, 4, 5, -3, 1
            below.push(array[i])
        }
        if (array[i]>avg) {
            above.push(array[i])
        }
    }
    print(`avg: `+ avg.toFixed(2))
    print(`below: ` + below.join(','))
    print(`above: ` + above.join(','))
} 
