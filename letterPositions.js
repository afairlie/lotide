// CHALLENGE: return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  let results = {};

  for (let indexNum in sentence) {     // iterate through sentence ie. [ 'H', 'e', 'l', 'l', 'o' ]
    let letterKey = sentence[indexNum];    // ex. first letterKey = 'H'

    if (results[letterKey] === undefined) {     // if letter not key in results, 
      results[letterKey] = [parseInt(indexNum)];    // add letter (key) to results obj = [indexNum of current letter]
    } else { results[letterKey].push(parseInt(indexNum));}  // push indexNum of current letter to letterKey in results object
  }

  return results;   // return results object
};

module.exports = letterPositions;