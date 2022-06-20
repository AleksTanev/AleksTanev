const sum = (a) => {

  const sumTwo = (b) => {

    const sumThree = (c) => {
      return a + b + c;
    }

    // Closure. The function is returned as a result
    return sumThree;
  }

  // Closure. The function is returned as a result
  return sumTwo;
};

const sum2 = sum(1);
console.log(sum2);

const sum3 = sum2(2);
console.log(sum3);

const result = sum3(3);
console.log(result);

// This is the result in one call
const result1 = sum(1)(2)(3);
console.log(result1);



