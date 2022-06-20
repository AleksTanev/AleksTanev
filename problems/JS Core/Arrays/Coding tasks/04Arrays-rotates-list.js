let input = [
  '1,2,3,4,5',
  '4']
  
  let print = this.print || console.log
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let arr = gets().split(',')
let N = +gets()

for (let i = 0; i<N;i++) {
  let a = arr[0]
  arr.shift()
  arr.push(a)
}
print(arr.join(','))