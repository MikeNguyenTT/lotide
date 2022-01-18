const assert = require('chai').assert;
const middle = require('../index').middle;

describe("#middle", () => {
  it(`returns [] for []`, () => {
    const testArray = [];
    middle(testArray)
    assert.deepEqual(middle(testArray), []); 
  });

  it(`returns [] for [1]`, () => {
    const testArray = [1];
    middle(testArray)
    assert.deepEqual(middle(testArray), []); 
  });

  it(`returns [] for [1, 2]`, () => {
    const testArray = [1, 2];
    middle(testArray)
    assert.deepEqual(middle(testArray), []); 
  });

  it(`returns [3] for [1, 2, 3, 4, 5]`, () => {
    const testArray = [1, 2, 3, 4, 5];
    middle(testArray)
    assert.deepEqual(middle(testArray), [3]); 
  });

  it(`returns [3, 4] for [1, 2, 3, 4, 5, 6]`, () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    middle(testArray)
    assert.deepEqual(middle(testArray), [3, 4]); 
  });

});

//TEST CODE
// assertArraysEqual(middle([]), []); // => should PASS
// assertArraysEqual(middle([1]), []); // => should PASS
// assertArraysEqual(middle([1, 2]), []); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS