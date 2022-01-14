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
  
  // verify every element in 2 arrays have same both value and type using triple equal operator
  for (let i = 0; i <= array1.length; i++) {
    if (Array.isArray(array1[i])) {
      return eqArrays(array1[i], array2[i]);
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

assertEqual(eqArrays([[2, [3, [7]]], [4]], [[2, [3, [7]]], [4]]), true); 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
