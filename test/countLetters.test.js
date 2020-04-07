const assertEqual = require('../assertEqual.js');
const countLetters = require('../countLetters');

// TEST CASES
console.log(countLetters('Hello'));
assertEqual(countLetters('Hello')['l'], 2);

console.log(countLetters('Ariane Fairlie'));
assertEqual(countLetters('Ariane Fairlie')['i'], 3);

console.log(countLetters('pneumonoultramicroscopicsilicovolcanoconiosis')) // apparently longest word in english dictionary...
assertEqual(countLetters('pneumonoultramicroscopicsilicovolcanoconiosis')['o'], 9);

// CASES OUT OF SCOPE (for now) - numbers, !?* etc.