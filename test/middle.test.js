const findMiddle = require('../middle');
const assert = require('chai').assert;

// TEST CASES
it('should return [2, 3] from [1, 2, 3, 4]', () => {
  assert.deepEqual(findMiddle([1, 2, 3, 4]), [2, 3]);
});
it('should return [] from [1]', () => {
  assert.deepEqual(findMiddle([1]), []);
});
it('should return [] from []', () => {
  assert.deepEqual(findMiddle([]), []);
});
it('should return [2] from [1, 2, 3]', () => {
  assert.deepEqual(findMiddle([1, 2, 3]), [2]);
});
it("should return ['I\'m', 'testing'] from ['hello', 'I\'m', 'testing', 'this!']", () => {
  assert.deepEqual(findMiddle(['hello', 'I\'m', 'testing', 'this!']), ['I\'m', 'testing']);
});
it('should return [2, undefined] from [1, 2, undefined, 4]', () => {
  assert.deepEqual(findMiddle([1, 2, undefined, 4]), [2, undefined]);
});