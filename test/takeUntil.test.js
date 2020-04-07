const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const testArr1 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(testArr1, num => num === 4), [1, 2, 3]);

const testArr2 = [1, 2, {isObj: true}, 4, 5];
assertArraysEqual(takeUntil(testArr2, elm => typeof elm === 'object'), [1, 2]);

// elm['isObj']

// LIGHTHOUSE TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);