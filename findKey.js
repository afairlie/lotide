const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

// CHALLENGE: scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  // scan object keys
  // let keys = Object.keys(object);

  for (let key in object){
    // if callback(key) return key
    if (callback(object[key])) { // QUESTION: hardcoded... ?
      // console.log(key)
      return key;
    }
  }
    // default: return undefined
}

/* GIVEN LIGHTHOUSE TEST, NOT VALID
const testObj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
assertEqual((findKey(testObj1, key => key === 'c')), 'c'); 
*/

// LIGHTHOUSE EXAMPLE
const lighthouseObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(lighthouseObj, keyStarName => keyStarName['stars'] === 2), 'noma') // doesn't work
assertEqual(findKey(lighthouseObj, keyStarName => keyStarName['stars'] !== 2), 'Blue Hill') // works - returns Blue Hill
assertEqual(findKey(lighthouseObj, keyStarName => keyStarName['stars'] !== 1), 'Akaleri') 

// assertEqual(lighthouseObj['elBulli']['stars'], 3);

/* A DIFFERENT WAY OF TESTING
let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result);
assertEqual(result, "noma") 
*/