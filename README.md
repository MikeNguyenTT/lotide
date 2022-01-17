# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mikenguyentt/lotide`

**Require it:**

`const _ = require('@mikenguyentt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return first element of the input array
* `tail(array)`: return input array except the first element
* `middle(array)`: return middle element/s of input array, one element if input array length is odd, and two elements if input array length is even
* `assertArraysEqual(array1, array2)`: to assert if an actual array is equal to an expected array
* `assertObjectsEqual(object1, object2)`: to assert if an actual object is equal to an expected object
* `assertEqual(value1, value2)`: to assert if an actual value is equal to an expected value
* `countLetters(string)`: count the occurences of every letter in the given sentence
* `countOnly(object1, object2)`: take in a collection of items in object1 and return counts for a specific subset of those items
* `eqArrays(array1, array2)`: compare two arrays, return true if both are equal and false otherwise
* `eqObjects(object1, object2)`: compare two objects, return true if both are equal and false otherwise
* `findKey(object, callback)`: return the key of the object depending on the callback function condition
* `findKeyByValue(object, value)`: return the key name of a given value if found in the object
* `flatten(nestedArray)`: take in a multilevel nested array, remove all the nest and return a flat array with all elements
* `letterPositions(string)`: return an object whose every value is an array of indices when the key letter appears
* `map(array, callback)`: return a new array containing elements as the result of callback function manipulating input array.
* `takeUntil(array, callback)`: return a new array only with head elements until the callback function condition is matched
* `without(array1, array2)`: filter out all the element of array2 from the array1
};