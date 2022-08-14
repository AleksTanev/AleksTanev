function sortArraySquared (array) {

  return array
    .reduce((acc, el) => {

      if (el < 0) {
        acc.negatives.push(Math.abs(el));
      } else if (el > acc.negatives[acc.negatives.length -1]) {
        let negativeAdded = acc.negatives.pop();
        acc.sorted.push(Math.pow(negativeAdded,2));
        acc.sorted.push(Math.pow(el, 2));
      } else {
        acc.sorted.push(Math.pow(el,2));
      }

      return acc;
    }, { negatives: [], sorted: []})
    .sorted;
};

//// TESTS

const array = [1, 2, 3, 5, 6, 8, 9];

console.log(sortArraySquared(array));

const array2 = [-3,-1, 0, 2,5];

console.log(sortArraySquared(array2));