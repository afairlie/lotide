// ASSERT EQ FUNCTIONS
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

// CHALLENGE
const takeUntil = function(array, callback) {
  let result = [];
  for (let elm of array) {
    if (callback(elm)) {
      console.log(callback);
      return result;
    } else {result.push(elm);}
  }
}

const testArr1 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(testArr1, num => num === 4), [1, 2, 3]);

const testArr2 = [1, 2, {isObj: true}, 4, 5];
assertArraysEqual(takeUntil(testArr2, elm => typeof elm === 'object'), [1, 2]);

// elm['isObj']

// LIGHTHOUSE TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

