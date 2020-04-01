const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`Assertion Passed ✅ ${arr1} === ${arr2} 👍`)
    : console.log(`Assertion Failed 🙁 ${arr1} ❗== ${arr2}`);
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
assertArraysEqual([1, 2, 3], [1, 2, 3]); // expect pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // expect fail

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // expect fail