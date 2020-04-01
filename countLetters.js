const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed ✅ ${actual} === ${expected} 👍`)
    : console.log(`Assertion Failed 🙁 ${actual} ❗== ${expected}`);
};

const countLetters = function(string) {
  let letterCount = {};

  for (let letter of string) {
    letter = letter.toLowerCase();    // convert to lower case so ex. A and a aren't separate counts

    if (letter === ' ') { // don't count spaces
      letter++;
    } else if (letterCount[letter] === undefined) {     // if a value is undefined it doesn't exist in letterCount{}, add key and value count
      letterCount[letter] = 1;
    } else if (letterCount[letter]) {     // else up the count of an existing letter key by one
      letterCount[letter] += 1;
    }
  }
  return letterCount;
}

// TEST CASES
console.log(countLetters('Hello'));
assertEqual(countLetters('Hello')['l'], 2);

console.log(countLetters('Ariane Fairlie'));
assertEqual(countLetters('Ariane Fairlie')['i'], 3);

console.log(countLetters('pneumonoultramicroscopicsilicovolcanoconiosis')) // apparently longest word in english dictionary...
assertEqual(countLetters('pneumonoultramicroscopicsilicovolcanoconiosis')['o'], 9);

// CASES OUT OF SCOPE (for now) - numbers, !?* etc.