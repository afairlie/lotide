const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TEST CASE 1
assertArraysEqual(letterPositions('Hello')['l'], [2, 3])

// TEST CASE 2
assertArraysEqual(letterPositions('pneumonoultramicroscopicsilicovolcanoconiosis')['o'], [5, 7, 17, 20, 29, 31, 36, 38, 41]);