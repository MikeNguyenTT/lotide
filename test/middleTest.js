const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CODE
assertArraysEqual(middle([]), []); // => should PASS
assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS