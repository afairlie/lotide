const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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