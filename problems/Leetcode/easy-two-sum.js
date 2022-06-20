let nums = [11,15, 7, 2]
let target = 9

let output = []

// for (let i = 0; i<nums.length-1; i++) {
//     for (let j = i+1;j<nums.length;j++) {
//         if (nums[i]+nums[j] === target) {
//             output.push(i, j)
//             break
//         }
//     }
// }
// console.log(output)

// this can be done more optimal without the use of nested loops, using index of and looking at
// the differnce between target and currNum

for (let i = 0; i<nums.length-1; i++) {
    let secondNum = target - nums[i]
    if (nums.indexOf(secondNum,i+1) !== -1) {
        output.push(i,nums.indexOf(secondNum,i+1))
        break
    } 
}
console.log(output)