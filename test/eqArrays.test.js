const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

// CASES WHERE INPUT NOT ARRAY
assertEqual(eqArrays('hello', [1, 2, 3, 4]), false);
assertEqual(eqArrays(null, [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2], null), false);