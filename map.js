const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`Assertion Passed ✅ ${arr1} === ${arr2} 👍`)
    : console.log(`Assertion Failed 🙁 ${arr1} ❗== ${arr2}`);
}

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

// map: return new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

// desired result from challenge
const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CASE 1
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

// TEST CASE 2
const testArray2 = [1, 2, 3, 4, 5];
assertArraysEqual(map(testArray2, num => { return num === 3 ? 'middle' : num;}), [1, 2, 'middle', 4, 5]);

// TEST CASE 3
const testArrWithObj = [{name: 'Ariane', age: 28, style: 'internet'}];
assertArraysEqual(map(testArrWithObj, obj => obj.name), ['Ariane']);