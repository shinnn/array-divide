'use strong';

const requireBowerFiles = require('require-bower-files');
const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(10);

    t.equal(main.name, 'arrayDivide', 'should have a function name.');

    const fixture = ['a', 'b', 'c', 'd'];

    t.deepEqual(
      main(['a', 'b', 'c', 'd'], 3),
      [['a', 'b', 'c'], ['d']],
      'should return divided arrays by count.'
    );

    t.deepEqual(
      fixture,
      ['a', 'b', 'c', 'd'],
      'should not break the original array..'
    );

    t.deepEqual(
      main(['a'], 1),
      [['a']],
      'should return one array when the count is the same as the number of array items or more.'
    );

    t.deepEqual(
      main([], 9999999),
      [],
      'should return an empty array when the original is an empty array.'
    );

    t.throws(
      () => main(new Set([0, 1, 2]), 1),
      /^TypeError.*must be an array/,
      'should throw a type error when the first argument is not an array.'
    );

    t.throws(
      () => main([], '1'),
      /^TypeError.*1 is not a number\. The second argument to array-divide must be a natural number\./,
      'should throw a type error when the second argument is not a number.'
    );

    t.throws(
      () => main([], 1.1),
      /^Error.*1\.1 is not a natural number\. The second argument to array-divide must be a natural number\./,
      'should throw a range error when the second argument is not a natural number.'
    );

    t.throws(
      () => main([], -1),
      /^Error.*-1 is not a natural number\. The second argument to array-divide must be a natural number\./,
      'should throw a range error when the second argument is less than 1.'
    );

    t.throws(
      () => main([], 0),
      /^RangeError.*0 is less than 1\. The second argument to array-divide must be a natural number\./,
      'should throw a range error when the second argument is 0.'
    );
  });
}

runTest('require(\'array-divide\')', require('.'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.arrayDivide', global.window.arrayDivide);
