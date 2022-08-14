function sortArraySquared (array) {

  return array
    .reduce((acc, val) => {

      if (val < 0) {
        acc.stack.push(Math.abs(val));
      } else if (val > acc.stack[acc.stack.length -1]) {
        const negativeAdded = acc.stack.pop();
        acc.sorted.push(Math.pow(negativeAdded,2));
        acc.sorted.push(Math.pow(val, 2));
      } else {
        acc.sorted.push(Math.pow(val,2));
      }

      return acc;
    }, { stack: [], sorted: []})
    .sorted;
};

//// TESTS

const array = [1, 2, 3, 5, 6, 8, 9];

console.log(sortArraySquared(array));

const array2 = [-3,-1, 0, 2,5];

console.log(sortArraySquared(array2));