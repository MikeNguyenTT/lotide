const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it(`returns count 1 for single occurence`, () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it(`returns undefined if no key found`, () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it(`returns 2 for 2 occurences`, () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it(`returns undefined if input value is false`, () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });


});