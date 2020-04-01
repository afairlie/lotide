const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

const countLetters = function(string) {
  let letterCount = {};

  for (let letter of string) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
      console.log(letter);
    } else if (letterCount[letter]) {
      letterCount[letter] += 1;
    }
  }
  // RETURN SOMETHING
  console.log(letterCount);
  return string;
}

assertEqual(countLetters('Hello'), 'Hello');