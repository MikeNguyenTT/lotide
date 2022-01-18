const assert = require('chai').assert;
const eqArrays = require('../index').eqArrays;


describe("#eqArrays", () => {
  it("returns false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays([[2, [3, [7]]], [4]], [[2, [3, [7]]], [4]]), true); 
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});