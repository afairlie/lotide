/* Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array. */

const without = function(source, itemsToRemove) {
  let finalArray = source;

  for (let i = 0; i < itemsToRemove.length; i++){
    finalArray =  finalArray.filter(item => item !== itemsToRemove[i]);
  }

  return finalArray;
}

module.exports = without;