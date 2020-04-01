// TEST/ASSERTION FUNCTIONS
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

// TEST ASSERTION/TEST FUNCTIONS WORKING
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // working!

// CHALLENGE (ACTUAL FUNCTION): take in an array and return the middle-most element(s) of the given array.
const findMiddle = function(arr) {
  let arrMiddle = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return arrMiddle;
  } else if (arr.length % 2 === 0) {
    arrMiddle.push(arr[(arr.length / 2)-1]);
    arrMiddle.push(arr[arr.length / 2]);
    return arrMiddle;
  } else {
    arrMiddle.push(arr[(arr.length - 1)/ 2]);
    return arrMiddle;
  };
}

// TEST CASES
assertArraysEqual(findMiddle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(findMiddle([1]), []);
assertArraysEqual(findMiddle([]), []);
assertArraysEqual(findMiddle([1, 2, 3]), [2]);
assertArraysEqual(findMiddle(['hello', 'I\'m', 'testing', 'this!']), ['I\'m', 'testing']);
assertArraysEqual(findMiddle([1, 2, undefined, 4]), [2, undefined]);