/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 const isMatch = (s, p) => {
  return new RegExp(`^${p}$`, 'g').test(s);
};