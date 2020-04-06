const assertArraysEqual = require('../assertArraysEqual');
const findMiddle = require('../middle');

// TEST CASES
assertArraysEqual(findMiddle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(findMiddle([1]), []);
assertArraysEqual(findMiddle([]), []);
assertArraysEqual(findMiddle([1, 2, 3]), [2]);
assertArraysEqual(findMiddle(['hello', 'I\'m', 'testing', 'this!']), ['I\'m', 'testing']);
assertArraysEqual(findMiddle([1, 2, undefined, 4]), [2, undefined]);