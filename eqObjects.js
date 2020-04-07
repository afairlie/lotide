const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

module.exports = eqObjects;