/*!
 * array-divide | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-divide
*/
module.exports = function arrayDivide(arr, count) {
  'use strict';

  if (!arr || typeof arr.slice !== 'function') {
    throw new TypeError(
      arr +
      ' is not an array. The first argument to array-divide must be an array.'
    );
  }

  if (typeof count !== 'number') {
    throw new TypeError(
      count +
      ' is not a number. The second argument to array-divide must be a number.'
    );
  }

  if (count < 1) {
    throw new RangeError(
      count +
      ' is less than 1. The second argument to array-divide must be 1 and more.'
    );
  }

  var len = arr.length;
  var index = 0;
  var result = [];

  while (index < len) {
    result.push(arr.slice(index, index += count));
  }

  return result;
};
