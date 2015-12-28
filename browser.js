/*!
 * array-divide | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-divide
*/
(function() {
  'use strict';

  var secondArgErrMsg = ' The second argument to array-divide must be a natural number. (1, 2, 3, ...)';

  window.arrayDivide = function arrayDivide(arr, count) {
    if (!arr || typeof arr.slice !== 'function') {
      throw new TypeError(
        String(arr) +
        ' is not an array. The first argument to array-divide must be an array.'
      );
    }

    if (typeof count !== 'number') {
      throw new TypeError(String(count) + ' is not a number.' + secondArgErrMsg);
    }

    if (count === 0) {
      throw new RangeError('0 is less than 1.' + secondArgErrMsg);
    }

    if (!window.isNaturalNumber(count)) {
      throw new Error(String(count) + ' is not a natural number.' + secondArgErrMsg);
    }

    var len = arr.length;
    var index = 0;
    var result = [];

    while (index < len) {
      result.push(arr.slice(index, index += count));
    }

    return result;
  };
})();
