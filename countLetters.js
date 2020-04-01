const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

const countLetters = function(string) {
  for (let letter of string) {
    console.log(letter);
  }
  // RETURN SOMETHING
  return string;
}

assertEqual(countLetters('Hello'), 'Hello');