// CHALLENGE: scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  // scan object keys
  // let keys = Object.keys(object);

  for (let key in object){
    // if callback(key) return key
    if (callback(object[key])) { // QUESTION: hardcoded... ?
      // console.log(key)
      return key;
    }
  }
    // default: return undefined
}

module.exports = findKey;