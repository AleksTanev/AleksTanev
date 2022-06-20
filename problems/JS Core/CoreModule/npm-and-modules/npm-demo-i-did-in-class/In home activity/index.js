import isNumber from "is-number";
import { arr } from './common/constants.js'

import _ from 'lodash';

let pulled = _.pullAt(arr,[1,2])

console.log(pulled)

console.log(_.join([1,2,3], '/'))




