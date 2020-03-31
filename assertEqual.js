const assertEqual = function(actual, expected) {
  actual === expected ? console.log('Assertion Passed ✅ ' + actual + ' === ' + expected + ' 👍')
    : console.log('Assertion Failed 🙁 ' + actual + ' ❗== ' + expected);
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Does this work?', 'Does this work?');
assertEqual(2, 1);