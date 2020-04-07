const eqArrays = function(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let item in arr1) {
        if (arr1[item] !== arr2[item]) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

module.exports = eqArrays;