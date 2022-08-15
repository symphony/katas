/*
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('example tests', function() {
  it('should return correct text', function() {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
*/

const likes = (names) => ([
      'no one likes this',
      `${names[0]} likes this`,
      `${names[0]} and ${names[1]} like this`,
      `${names[0]}, ${names[1]} and ${names[2]} like this`,
      `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    ][Math.min(4, names.length)]
);

