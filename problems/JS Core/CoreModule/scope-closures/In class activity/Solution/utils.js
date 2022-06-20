export const byKey = (key, order) => {
  const orderNum = order === 'desc' ? -1 : 1;

  // Closure. You return a new function which has closure over key, order and orderNum
  return (a, b) => {
    let result;
    if (a[key] > b[key]) {
      result = 1;
    } else if (a[key] === b[key]) {
      result = 0;
    } else {
      result = -1;
    }

    return result * orderNum;
  };
};

export const findBy = (key, value) => {

  // Closure. You return a new function which has closure over key and value
  return (element) => {
    return element[key] === value;
  }
};

export const isBetween = (key, low, high) => {
  return (element) => {
    return element[key] >= low && element[key] <= high;
  };
};

export const isLower = (key, value) => {
  return (element) => {
    return element[key] <= value;
  };
};

export const isHigher = (key, value) => {
  return (element) => {
    return element[key] >= value;
  };
};

export const startsWith = (key, letter) => {
  return (element) => {
    return element[key][0] === letter;
  };
};
