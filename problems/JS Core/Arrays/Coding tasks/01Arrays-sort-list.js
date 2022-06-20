let input = [
    '2, 3, 1, 5, 6'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let list = gets().split(', ').map(Number)

for (let j = 0; j<list.length;j++) {
    for (let i = j+1; i<list.length;i++) {
        if (list[j]>=list[i]) {
            continue
        } else {
            let a = list[j]
            list[j] = list[i]
            list[i] = a
        }
    }
}
print(list)