const assert = require('chai').assert;
const without = require('../index').without;

describe("#without", () => {

  it("without([1, 2, 3], [3]) => [1, 2]", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });

  it(`without(["1", "2", "3"], [1, 2, "3"]) => ["1", "2"])`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it(`without(["hello", "world", "lighthouse"], ["lighthouse"]) => ["hello", "world"]`, () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });

});