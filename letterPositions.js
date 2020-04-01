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
  let valsArray = Object.values(sentence);
  console.log(valsArray)

  for (let indexNum in valsArray) {
    let letterKey = valsArray[indexNum];

    if (results[letterKey] === undefined) {
      results[letterKey] = [parseInt(indexNum)];
    } else { results[letterKey].push(parseInt(indexNum));}
  }

  return results;
};

// TEST CASE 1
console.log(letterPositions('Hello'));
assertArraysEqual(letterPositions('Hello')['l'], [2, 3])