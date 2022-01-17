const assertEqual = function(actual, expected) {
  if (actual === expected) {
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
  
  let returnValue = true;
  // verify every element in 2 arrays have same both value and type using triple equal operator
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      returnValue = eqArrays(array1[i], array2[i]);
      if (!returnValue) {
        return returnValue;
      }
    }
    else if (array1[i] !== array2[i]) {
      returnValue = false;
    }
  }
  return returnValue;
};

module.exports = eqArrays;