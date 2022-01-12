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

const flatten = function(array) {
  let outputArray = []
  for (let element of array) {
    if (!Array.isArray(element)) {
      outputArray.push(element);
    }
    else {
      for (let nestedElement of element) {
        outputArray.push(nestedElement);
      }
    }
  }  
  return outputArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);