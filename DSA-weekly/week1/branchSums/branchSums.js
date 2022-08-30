function getSumOfBranches(root, memo, sumSoFar = 0) {

  if (!root.left && !root.right && root.value) {
    memo.push(sumSoFar + root.value);
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

function getSumOfBranchesIterative(root) {

  const results = [];
  let sumSoFar = root.value;
  let currentNode = root;
  let stack = []

  if (!sumSoFar) {
    return [];
  }

  while (currentNode) {
    if (!currentNode.left && !currentNode.right) {
      results.push(sumSoFar);
      sumSoFar = lastDivergent.sum;
      currentNode = lastDivergent.last;
      continue;
    } 

    if (currentNode.left) {
      lastDivergent = (currentNode.right) ? { sum: sumSoFar, last: currentNode, prev: lastDivergent.last }
      sumSoFar += currentNode.left;
      currentNode = currentNode.left;
      continue;
    }

    if (currentNode.right) {
      sumSoFar += currentNode.right;
      currentNode = currentNode.right;
    }
  }

  return results;

}

const iterativeRes = getSumOfBranchesIterative(root);
console.log(iterativeRes)