let input = ['77']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

const n = +gets()
const arr = []

for (let i = 1; i<=n;i++) {
    if (i === 1 || i === 2 || i === 3) {
        arr.push(i)
        continue
    }
    for (let j = 2; j<=Math.floor(i/2);j++) {
        if (i % j === 0) {
            break
        } else if (j === Math.floor(i/2)) {
            arr.push(i)
        }
    }
}

print(arr.join(' '))