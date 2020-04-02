const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
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
  return false;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Vals = Object.values(object1);
  let object2Vals = Object.values(object2);

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (eqArrays(object1Keys, object2Keys) && eqArrays(object1Vals, object2Vals)) {
    return true;
  } else {
    return false;
  }
};

const testObj1 = {a: 1, b: 2, c: 3};
const testObj2 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj1, testObj2), true);

const testObj3 = {a: 1, x: 2, c: 3}; // fail
const testObj4 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj3, testObj4), false);

const testObj5 = {a: '1', b: 2, c: 3}; // fail
const testObj6 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj5, testObj6), false);

// OTHER EDGE CASES: object not put in, empty object? 