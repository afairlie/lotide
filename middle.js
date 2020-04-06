// CHALLENGE (ACTUAL FUNCTION): take in an array and return the middle-most element(s) of the given array.
const findMiddle = function(arr) {
  let arrMiddle = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return arrMiddle;
  } else if (arr.length % 2 === 0) {
    arrMiddle.push(arr[(arr.length / 2)-1]);
    arrMiddle.push(arr[arr.length / 2]);
    return arrMiddle;
  } else {
    arrMiddle.push(arr[(arr.length - 1)/ 2]);
    return arrMiddle;
  };
}

module.exports = findMiddle;