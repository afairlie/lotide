const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// 1
const testObj1 = {a: 1, b: 2, c: 3};
const testObj2 = {d: 2, a: 1, c: 3};
assertEqual(eqObjects(testObj1, testObj2), false);


// 2
const testObj3 = {a: 1, b: 2, c: 3};
const testObj4 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj3, testObj4), true);

// 3
const testObj5 = {a: '1', b: 2, c: 3}; // fail
const testObj6 = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(testObj5, testObj6), false);
 
// 4
const cdArr1 = { c: "1", d: ["2", 3] };
const cdArr2 = { c: "1", d: ["2", 3] };
assertEqual(eqObjects(cdArr1, cdArr2), true);


// 5
const testObj7 = {a: [1, 2, 3], b: 2, c: 3};
const testObj8 = {a: [1, "2", 3], b: 2, c: 3};
assertEqual(eqObjects(testObj7, testObj8), false);

// 6
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// OTHER EDGE CASES: object not put in, empty object? 