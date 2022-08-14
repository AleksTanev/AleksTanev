function findSumTwoNumbers (array, targetSum) {
  const mapNumbers = [];
  let i = 0;

  while (i < array.length) {
    let difference = targetSum - array[i];

    if (mapNumbers[difference]) return [difference, array[i]];
    
    mapNumbers[array[i]] = array[i];
    i++;
  }

  return [];
}


/// TESTS

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

console.log(findSumTwoNumbers(array, target));

