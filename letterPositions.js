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

// CHALLENGE: return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  let results = {};

  for (let indexNum in sentence) {     // iterate through sentence ie. [ 'H', 'e', 'l', 'l', 'o' ]
    let letterKey = sentence[indexNum];    // ex. first letterKey = 'H'

    if (results[letterKey] === undefined) {     // if letter not key in results, 
      results[letterKey] = [parseInt(indexNum)];    // add letter (key) to results obj = [indexNum of current letter]
    } else { results[letterKey].push(parseInt(indexNum));}  // push indexNum of current letter to letterKey in results object
  }

  return results;   // return results object
};

// TEST CASE 1
assertArraysEqual(letterPositions('Hello')['l'], [2, 3])

// TEST CASE 2
assertArraysEqual(letterPositions('pneumonoultramicroscopicsilicovolcanoconiosis')['o'], [5, 7, 17, 20, 29, 31, 36, 38, 41]);