let nums = [1,1,2,2,2,2]

for (let i = 0; i<nums.length-1; i++) {
    if (nums[i] === nums[i+1]) { 
    nums.splice(i+1,1)
    i--
    }
}
console.log(nums.length,nums)