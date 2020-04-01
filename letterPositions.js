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

// CHALLENGE: 
const letterPositions = function(sentence) {
  let results = {};
  let valsArray = Object.values(sentence);
  console.log(valsArray)

  for (let indexNum in valsArray) {
    let letterKey = valsArray[indexNum];

    if (results[letterKey] === undefined) {
      results[letterKey] = [indexNum];
    } else { results[letterKey].push(indexNum);}
  }

  return results;
};

console.log(letterPositions('Hello'));