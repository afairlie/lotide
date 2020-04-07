// CHALLENGE
const takeUntil = function(array, callback) {
  let result = [];
  for (let elm of array) {
    if (callback(elm)) {
      return result;
    } else {result.push(elm);}
  }
}

module.exports = takeUntil;