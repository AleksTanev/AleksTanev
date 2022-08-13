/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
   let output = 0
   let res = {}
   let stack = []
   for (let i = s.length -1; i >= 0; i--) {
     if (s[i] === ')') {
      stack.push(')')
      continue
    } else if (s[i] === '(' && stack.length > 0) {
      stack.pop()
      output += 2
      continue
    } else if (s[i] === '(' && stack.length === 0) {
      res[i] = output
      output = 0
    }

  }

    return Math.max(...Object.values(res), output)
};

console.log(longestValidParentheses('()(()()'))