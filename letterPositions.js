const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // return false if 2 arrays have different length
  if (array1.length !== array2.length) {
    return false;
  }
  
  // verify every element in 2 arrays have same both value and type using triple equal operator
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        positions = results[letter];
        positions.push(i);
        results[letter] = positions;
      } else {
        const positions = [i];
        results[letter] = positions;
      }
    }
  }
  return results;
}

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]); // => should PASS
assertArraysEqual(letterPositions("hello").l, [2, 3]); // => should PASS
assertArraysEqual(letterPositions("hello").h, [0]); // => should PASS
assertArraysEqual(letterPositions("hello").o, [4]); // => should PASS

module.exports = letterPositions;
