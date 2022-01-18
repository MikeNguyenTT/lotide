const assert = require('chai').assert;
const map = require('../index').map;

describe("#map", () => {
  it("returns all word[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });

  it("returns words' length array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word.length);
    assert.deepEqual(results1, [6, 7, 2, 5, 3]);
  });

  it("returns double of all num in array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 =map([1, 3, 6, 7, 9, 34], num => num * 2);
    assert.deepEqual(results1, [2, 6, 12, 14, 18, 68]);
  });

});




// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => should PASS

// const results2 = map(words, word => word.length);
// assertArraysEqual(results2, [6, 7, 2, 5, 3]); // => should PASS

// const results3 = map([1, 3, 6, 7, 9, 34], num => num * 2);
// assertArraysEqual(results3, [2, 6, 12, 14, 18, 68]); // => should PASS