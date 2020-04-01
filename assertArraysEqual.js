const assertArraysEqual = function(arr1, arr2, expected) {
  let result = eqArrays(arr1, arr2);
  result === expected ? console.log(`Assertion Passed ✅ ${result} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${result} ❗== ${expected}`);
}

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
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);

assertArraysEqual([1, 2, 3], [1, 2, 3, 4], false);