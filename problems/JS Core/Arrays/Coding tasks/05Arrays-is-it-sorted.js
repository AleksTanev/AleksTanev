let input = [
    '4',
    '1,2,3,4,5',
    '2,3,4,2',
    '15, 6, 2',
    '-1, -2, -3'
]
    
let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)
  
let N = +gets()

for (let i = 0; i<N;i++) {
    let arr = gets().split(',').map(Number)
    for (let j = 0; j<arr.length-1;j++) {
        if (arr[j]<=arr[j+1]) {
            if (j === arr.length-2)  {
                print('true')
            }
            continue
        } else {
            print('false')
            break
        }
    }
}