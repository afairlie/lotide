const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);


assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], [1, 2, 3, 4]), []);