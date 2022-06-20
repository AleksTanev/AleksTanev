import isEven from 'is-even';
import isNumber from 'is-number';
import isOdd from 'is-odd';
import _ from 'lodash';

const arr = [1, 2, 3, 4, 5];

const isFirstNumberOdd = isOdd(_.first(arr));

console.log(isFirstNumberOdd);
