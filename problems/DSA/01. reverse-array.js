import { compareArrays, formatArray } from './common/utils.js';

/**
 * Reverse an array recursively
 * @param {array} array The array to reverse
 * @returns {array} The reversed array
 */
const reverse = (array) => {
  if (array.length < 2) return [...array]

  return [...reverse(array.splice(1)), array[0]]
};

