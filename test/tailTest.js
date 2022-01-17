const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const testArray = ["Yo Yo", "Lighthouse", "Labs"];
    tail(testArray)
    assert.strictEqual(testArray.length, 3); // test the original array not being modified
  });

  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    const testArray = ["Hello", "Lighthouse", "Labs"];
    tail(testArray)
    assert.deepEqual(tail(testArray), ["Lighthouse", "Labs"]); 
  });

  it(`returns [] for ["Hello"]`, () => {
    const testArray = ["Hello"];
    tail(testArray)
    assert.deepEqual(tail(testArray), []); 
  });

  it(`returns [] for []`, () => {
    const testArray = [];
    tail(testArray)
    assert.deepEqual(tail(testArray), []); 
  });

});