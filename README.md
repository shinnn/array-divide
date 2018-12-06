# array-divide

[![npm version](https://img.shields.io/npm/v/array-divide.svg)](https://www.npmjs.com/package/array-divide)
[![Build Status](https://travis-ci.com/shinnn/array-divide.svg?branch=master)](https://travis-ci.com/shinnn/array-divide)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-divide.svg)](https://coveralls.io/github/shinnn/array-divide)

Divide an `Array` into multiple `Array`s each of whom have the same number of items

```javascript
arrayDivide(['a', 'b', 'c', 'd'], 2); //=> [['a', 'b'], ['c', 'd']]
arrayDivide(['a', 'b', 'c', 'd'], 3); //=> [['a', 'b', 'c'], ['d']]
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install array-divide
```

## API

```javascript
import arrayDivide from 'array-divide';
```

### arrayDivide(*array*, *count*)

*array*: `Array`  
*count*: `number` (the maximum number of items)  
Return: `Array` (a new array and doesn't break the original one)

```javascript
arrayDivide(['a', 'b', 'c', 'd'], 100); //=> [['a', 'b', 'c', 'd']]
arrayDivide([], 100); //=> []

arrayDivide(['a', 'b', 'c'], 0); // throw an error (count must be >= 1)
arrayDivide(new Set(), 1); // throw an error (doesn't support array-like object)
```

## License

Copyright (c) 2015 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
