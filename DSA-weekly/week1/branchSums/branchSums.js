function getSumOfBranches(root, memo, sumSoFar = 0) {

  if (!root.left && !root.right) {
    memo.push(sumSoFar + root.value);
    return;
  }

  if (root.left) {
    getSumOfBranches(root.left, memo, sumSoFar + root.value);
  }
  if (root.right) {
    getSumOfBranches(root.right, memo, sumSoFar + root.value);
  }

  return memo;
}


//// TESTS

const root = { value: 1, left: {value: 12, left: { value: 2 }, right: { value: 8} }, right: { value: 2, left: {value: 2}, right: { value: 4 } } }

console.log(getSumOfBranches(root, []))