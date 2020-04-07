const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

// desired result from challenge
const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CASE 1
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

// TEST CASE 2
const testArray2 = [1, 2, 3, 4, 5];
assertArraysEqual(map(testArray2, num => { return num === 3 ? 'middle' : num;}), [1, 2, 'middle', 4, 5]);

// TEST CASE 3
const testArrWithObj = [{name: 'Ariane', age: 28, style: 'internet'}];
assertArraysEqual(map(testArrWithObj, obj => obj.name), ['Ariane']);