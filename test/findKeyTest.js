const assert = require('chai').assert;
const findKey = require('../index').findKey;

describe("#findKey", () => {
  it("returns 1 for [1, 2, 3]", () => {
    
    const key = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2) // => "noma"
    
    assert.strictEqual(key, "noma");
  });
});
