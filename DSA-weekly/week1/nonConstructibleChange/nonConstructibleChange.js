function findMinimumNonConstructibleChange(arrayOfCoins) {

  // let mapOfCoins = [];
  let change = 1;

  // while (i < arrayOfCoins.length) {
  //   if (mapOfCoins[arrayOfCoins[i]]) {
  //     mapOfCoins[arrayOfCoins[i]] += 1;
  //   } else {
  //     mapOfCoins[arrayOfCoins[i]] = 1
  //   }

  //   i++;
  // }
  // // console.log(mapOfCoins)

  let isChangePossible = true

  while (isChangePossible) {
    isChangePossible = checkIfChangeIsPossible(change, arrayOfCoins);
    change++;
  }

  return change-1;
}

function checkIfChangeIsPossible(value, array) {
  if (array.includes(value)) {
    return true;
  }
}


//// TESTS
const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(findMinimumNonConstructibleChange(coins));