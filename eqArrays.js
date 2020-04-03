const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

// CASES WHERE INPUT NOT ARRAY
assertEqual(eqArrays('hello', [1, 2, 3, 4]), false);
assertEqual(eqArrays(null, [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2], null), false);