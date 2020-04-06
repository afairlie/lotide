const assert = require('chai').assert;
const head = require('../head');

describe('#Head', () => {
  it('returns 1 for [1, 2, 3}', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns undefined for [undefined, 3, 4]", () => {
    assert.strictEqual(head([undefined, 3, 4]), undefined);
  })
  it('returns 0 for [0]', () => {
    assert.strictEqual(head([0]), 0);
  })
})