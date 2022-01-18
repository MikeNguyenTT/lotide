const assert = require('chai').assert;
const countLetters = require('../index').countLetters;

describe("#countLetters", () => {

  const result1 = countLetters("lighthouse in the house");
  it(`returns 1 occurence of letter l in "lighthouse in the house"`, () => {
    assert.strictEqual(result1["l"], 1);
  });

  it(`returns 2 occurence of letter i in "lighthouse in the house`, () => {
    assert.strictEqual(result1["i"], 2);
  });

  it(`returns 1 occurence of letter g in "lighthouse in the house`, () => {
    assert.strictEqual(result1["g"], 1);
  });

  it(`returns 4 occurence of letter h in "lighthouse in the house`, () => {
    assert.strictEqual(result1["h"], 4);
  });

  it(`returns 2 occurence of letter t in "lighthouse in the house`, () => {
    assert.strictEqual(result1["t"], 2);
  });

  it(`returns 2 occurence of letter o in "lighthouse in the house`, () => {
    assert.strictEqual(result1["o"], 2);
  });

  it(`returns 2 occurence of letter u in "lighthouse in the house`, () => {
    assert.strictEqual(result1["u"], 2);
  });
  it(`returns 2 occurence of letter s in "lighthouse in the house`, () => {
    assert.strictEqual(result1["s"], 2);
  });
  
  it(`returns 3 occurence of letter e in "lighthouse in the house`, () => {
    assert.strictEqual(result1["e"], 3);
  });

  it(`returns 1 occurence of letter n in "lighthouse in the house`, () => {
    assert.strictEqual(result1["n"], 1);
  });

});
