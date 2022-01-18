const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;


describe("#letterPositions", () => {
  it(`returns array [1] for letter e in "hello"`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it(`returns array [2, 3] for letter l in "hello"`, () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });


  it(`returns array [0] for letter h in "hello"`, () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });


  it(`returns array [4] for letter o in "hello"`, () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });


});