const tail = require('../tail');
const assertEqual = require('../assertEqual');

//test case 1
let result = tail([1, 2, 3, 4]);

assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

// test case 2
let original = [3, 4, 5];

tail(original);

assertEqual(original.length, 3);
assertEqual(original[0], 3);
assertEqual(original[1], 4);

console.log(original);

/* can't compare arrays directly because javascript compares whether the array is that exact same array, not whether the contents of the arrays are the same. Workaround: check that length is 0, console.log() to see it's empty array */

// test case 3
let one = tail([1]);
assertEqual(one.length, 0);
console.log(one);

// test case 4
let none = tail([]);
assertEqual(none.length, 0);
console.log(none);