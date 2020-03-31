const assertEqual = function(actual, expected) {
  actual === expected ? console.log('Assertion Passed ✅ ' + actual + ' === ' + expected + ' 👍')
    : console.log('Assertion Failed 🙁 ' + actual + ' ❗== ' + expected);
};

const tail = function(arr) {
  return arr.slice(1);
};

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

// test case 3
let one = tail([1]);
assertEqual(one, []);

// test case 4
let none = tail([]);
assertEqual(none, []);