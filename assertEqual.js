/* const assertEqual = function(actual, expected) {
  actual === expected ? console.log('Assertion Passed ✅ ' + actual + ' === ' + expected + ' 👍')
    : console.log('Assertion Failed 🙁 ' + actual + ' ❗== ' + expected);
}; */

// do I get the same results with template literals?

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

module.exports = assertEqual;