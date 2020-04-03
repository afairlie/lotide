const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

// CHALLENGE: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  let valuesArr = Object.values(object);
  let keysArr = Object.keys(object);

  for (let keyIndex in keysArr) {
    if (value === valuesArr[keyIndex]) {
      return keysArr[keyIndex];
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  not_a_show: 2
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Arrested Development"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 2), 'not_a_show');
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);
