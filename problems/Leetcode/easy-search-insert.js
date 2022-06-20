// let nums = [1,3,5,6]
// let target = 7
// let n = nums.length

// for (let i=0;i<n;i++) {
//     if ((nums[i] < target && nums[i+1] > target) || (nums[i]<target && i === n-1)) {
//         console.log(i+1)
//         break
//     } else if (nums[i] === target || nums[0]>target) {
//         console.log(i)
//         break
//     }
// }

// Reshenie 2


let nums = [1,3,5,6]
let target = 7

let start = 0;
let end = nums.length - 1;

while(start <= end){
    let mid = Math.floor((start+end)/2);
    let diff = nums[mid] - target;
    if(diff == 0){
        console.log(mid);
    } else if(diff < 0){
        start = mid + 1
    } else {
        end = mid - 1
    }
}
console.log(start)