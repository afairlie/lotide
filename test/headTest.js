const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([NaN, 3, 4]), NaN); // according to NaN documentation, false is expected output.
assertEqual(head([undefined, 3, 4]), undefined);
assertEqual(head([0]), 0);
assertEqual(head([0]), '0'); // false output expected, but visual test result confusing cause can't see quotations around 0.