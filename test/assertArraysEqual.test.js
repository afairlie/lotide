const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]); // expect pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // expect fail

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // expect fail