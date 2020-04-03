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

const eqObjects = function(object1, object2) {
  for (let property in object1) {    // loop object
    let checkArray = Array.isArray(object1[property]);    // capture bool var if object property isArray

    if (checkArray === true){   // if isArray, are Arrays equal?
      let arr1 = object1[property]
      let arr2 = object2[property]
      return eqArrays(arr1, arr2);
    } 
    if (object1[property] !== object2[property]) { // if property object 1 doesn't have same value as object2
      return false;
    }
  }
  return true;  // default return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`Assertion Passed ✅ ${inspect(actual)} === ${inspect(expected)} 👍`)
    : console.log(`Assertion Failed 🙁 ${inspect(actual)} ❗== ${inspect(expected)}`);
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
assertObjectsEqual({a: 1, b: 2, c: 3}, {d: 2, a: 1, c: 3});