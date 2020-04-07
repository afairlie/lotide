const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  not_a_show: 2
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Arrested Development"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 2), 'not_a_show');
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);