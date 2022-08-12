/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const string = x.toString();
  const range = string.length / 2;

  for (let i = 0; i < range; i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) return false;
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(111121111));
console.log(isPalindrome(10));