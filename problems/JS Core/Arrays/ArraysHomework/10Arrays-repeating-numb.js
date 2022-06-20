let input = [
    // '1 2 3 9 5 4 6 7 7'
    '7 8 2 1 3 1 6 4 12 1'
    // '1 2 3 4 1'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let array = gets().split(' ').map(Number)
let output

for (let j = 0; j < array.length; j++) {        // optimized a bit by setting minimum value of i to j+1 to avoid redundancy
    for (let i = j+1; i < array.length;i++){
        if (array[i] == array[j] && i>j){       // we don't need a doulbe assignment or to find that array[i] == array[j]
            output = array[i]                   // so we added the condition of i>j
            break                               // created the output variable so that the code words with n>2 repetitions
        }
    }
}
print(output)