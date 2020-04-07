const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const testCase = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(testCase["Jason"], 1);
assertEqual(testCase["Karima"], undefined);
assertEqual(testCase["Fang"], 2);