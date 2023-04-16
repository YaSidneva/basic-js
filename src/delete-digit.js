const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArr = n.toString().split("");
  console.log(numArr);
  let max = 0;
  for (let i = 0; i <= numArr.length - 1; i++) {
    let copyArr = [...numArr];
    copyArr.splice(i, 1);
    console.log(copyArr);
    console.log(i);
    let el = parseInt(copyArr.join(""));
    if (el > max) {
      max = el;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
