const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array not being modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case: check the returned array value
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check if one element array would yield an empty array
assertEqual(tail(["Yo Yo"]).length, 0);

// Test Case: Check if an empty array would yield an empty array
assertEqual(tail([]).length, 0);