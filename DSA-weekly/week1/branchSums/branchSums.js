
function findClosestValueInBST(root, target) {
  const currentNode = root;
  let closestValue = null;

  while (currentNode) {
    const diffLeftValue = currentNode.left.value - target;
    const diffRightValue = currentNode.right.value - target;
    const currDiff = closestValue - target

    if ((diffLeftValue > currDiff ) && (diffRightValue > currDiff)) {
      break;
    }

    if (Math.abs(leftValue - target) < Math.abs(rightValue - target)) {
      closestValue = currentNode.left.value
      currentNode = currentNode.left
    } else if (Math.abs(leftValue - target) > Math.abs(rightValue - target)) {
      closestValue = currentNode.right.value
      currentNode = currentNode.right
    }
  }

  return closestValue;
}

findClosestValueInBST();