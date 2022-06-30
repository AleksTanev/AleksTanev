/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const dictionary = new Map()

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    
    if (dictionary.has(target - current)) {
      return [dictionary.get(target-current), i]
    }

    dictionary.set(current, i)
  }
};

const input1 = [2,7,11,15]
const target1 = 9

const input2 = [3,2,4]
const target2 = [6]

const input3 = [3,3]
const target3 = 6

const output = twoSum(input3, target3)
console.log(output)

