const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  s2 = s2.split("");
  console.log(s1);
  for (let i = 0; i <= s1.length - 1; i++) {
    let equalIndex = s2.indexOf(s1[i]);
    if (equalIndex != -1) {
      s2.splice(equalIndex, 1);
      res += 1;
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
