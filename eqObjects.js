const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Vals = Object.values(object1);
  let object2Vals = Object.values(object2);

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  console.log(object1Keys);
  console.log(object2Keys);
  console.log(object1Vals);
  console.log(object2Vals);
};

const testObj1 = {a: 1, b: 2, c: 3};
const testObj2 = {a: 1, b: 2, c: 3};
eqObjects(testObj1, testObj2);