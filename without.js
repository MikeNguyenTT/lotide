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

const without = function(sourceArray, itemsToRemove) {
  let outputArray = [];
  for (let element of sourceArray) {
    let toBeRemoved = false;
    for (let item of itemsToRemove) {
      if (element === item ) {
        toBeRemoved = true;
        break;
      }
    }
    if (!toBeRemoved) {
      outputArray.push(element);
    }
  }
  return outputArray;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS

module.exports = without;