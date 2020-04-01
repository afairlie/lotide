/* Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array. */

const without = function(source, itemsToRemove) {
  let finalArray = source;

  for (let i = 0; i < itemsToRemove.length; i++){
    finalArray =  finalArray.filter(item => item !== itemsToRemove[i]);
  }

  return finalArray;
}

// TO DO: refactor so it LOGS arr1 === arr2 or arr1 !== arr2
const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  result ? console.log(`Assertion Passed ✅ ${arr1} === ${arr2} 👍`)
    : console.log(`Assertion Failed 🙁 ${arr1} ❗== ${arr2}`);
}

// maybe doesn't need refactor?
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// TO DO: (not a bug but...) true !== 0
assertArraysEqual((without([1, 2, 3], [1, 2, 3])).length === 0, 0); // returns true === 0
console.log((without([1, 2, 3], [1, 2, 3])).length)

assertArraysEqual((without([1, 2, 3], [1, 2, 3, 4])).length === 0, 0); // returns true === 0
console.log((without([1, 2, 3], [1, 2, 3, 4])).length)
// console.log(without([1, 2, 3], [1, 2, 3, 4]));