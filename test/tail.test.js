const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it ('should return [2, 3, 4] from [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  })
  it ("should return ['4', '5'] from ['3', '4', '5']", () => {
    assert.deepEqual(tail(['2', '3', '4']), ['3', '4']);
  });
  it ('should return [] from [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
  it ('should return [] from []', () => {
    assert.deepEqual([], []);
  })
})