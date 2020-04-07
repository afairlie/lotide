// CHALLENGE
const takeUntil = function(array, callback) {
  let result = [];
  for (let elm of array) {
    if (callback(elm)) {
      console.log(callback);
      return result;
    } else {result.push(elm);}
  }
}

module.exports = takeUntil;