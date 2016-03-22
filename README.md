# array-divide

[![NPM version](https://img.shields.io/npm/v/array-divide.svg)](https://www.npmjs.com/package/array-divide)
[![Bower version](https://img.shields.io/bower/v/array-divide.svg)](https://github.com/shinnn/array-divide/releases)
[![Build Status](https://travis-ci.org/shinnn/array-divide.svg?branch=master)](https://travis-ci.org/shinnn/array-divide)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-divide.svg)](https://coveralls.io/r/shinnn/array-divide)
[![devDependency Status](https://david-dm.org/shinnn/array-divide/dev-status.svg)](https://david-dm.org/shinnn/array-divide#info=devDependencies)

Divide an array into multiple arrays each of whom have the same number of items

```javascript
arrayDivide(['a', 'b', 'c', 'd'], 2); //=> [['a', 'b'], ['c', 'd']]
arrayDivide(['a', 'b', 'c', 'd'], 3); //=> [['a', 'b', 'c'], ['d']]
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```sh
npm install array-divide
```

#### [bower](http://bower.io/)

```sh
bower install array-divide
```

#### [Duo](http://duojs.org/)

```javascript
const arrayDivide = require('shinnn/array-divide');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/array-divide/master/browser.js)

## API

### arrayDivide(*array*, *count*)

*array*: `Array`  
*count*: `Number` (the maximum number of items)  
Return: `Array` (a new array and doesn't break the original one)

```javascript
arrayDivide(['a', 'b', 'c', 'd'], 100); //=> [['a', 'b', 'c', 'd']]
arrayDivide([], 100); //=> []

arrayDivide(['a', 'b', 'c'], 0); // throw an error (count must be >= 1)
arrayDivide(arguments, 1); // throw an error (doesn't support array-like object)
```

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
