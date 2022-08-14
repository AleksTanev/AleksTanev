function isValidSubsequence (array, sequence) {

  let i = 0;
  let k = 0; 

  while (i < array.length) {

    if (array[i] == sequence[k]) {
      i++;
      k++;
    } else {
      i++;
    }

    if (k == sequence.length) {
      return true
    }
  }

  return false;
}

//// TESTS

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1,9];

console.log(isValidSubsequence(array,sequence))


    // if (i > sequence.length - k) {
    //   return false
    // }

    // if (array[i] == sequence[k]) {
    //   k++;
    // } else if (array[i] != sequence[k]) {

    // }