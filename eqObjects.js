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

};

const testObj1 = {a: 1, b: 2, c: 3};
const testObj2 = {b: 2, a: 1, c: 3};
assertEqual(eqObjects(testObj1, testObj2), true);

const testObj3 = {a: 1, x: 2, c: 3}; // fail
const testObj4 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj3, testObj4), false);

const testObj5 = {a: '1', b: 2, c: 3}; // fail
const testObj6 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj5, testObj6), false);

const testObj7 = {a: [1, 2, 3], b: 2, c: 3};
const testObj8 = {a: [1, "2", 3], b: 2, c: 3};
assertEqual(eqObjects(testObj7, testObj8), false);

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// OTHER EDGE CASES: object not put in, empty object? 