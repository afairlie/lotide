// CHALLENGE: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  let valuesArr = Object.values(object);
  let keysArr = Object.keys(object);

  for (let keyIndex in keysArr) {
    if (value === valuesArr[keyIndex]) {
      return keysArr[keyIndex];
    }
  }
  return undefined;
}

module.exports = findKeyByValue;