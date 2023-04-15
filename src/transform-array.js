const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let cloneArr = [...arr];

  for (let i = 0; i <= cloneArr.length - 1; i++) {
    console.log(cloneArr);
    if (cloneArr[i] === "--discard-next") {
      cloneArr.splice(i + 1, 1, "removed");
      cloneArr.splice(i, 1);
    } else if (cloneArr[i] === "--discard-prev") {
      cloneArr.splice(i, 1);
      if (i > 0 && cloneArr[i - 1] !== "removed") {
        cloneArr.splice(i - 1, 1, "removed");
      }
    } else if (cloneArr[i] === "--double-next") {
      if (i + 1 in cloneArr) {
        cloneArr[i] = cloneArr[i + 1];
      } else {
        cloneArr.splice(i, 1);
      }
    } else if (cloneArr[i] === "--double-prev") {
      if (i > 0 && cloneArr[i - 1] !== "removed") {
        cloneArr[i] = cloneArr[i - 1];
      } else {
        cloneArr.splice(i, 1);
      }
    }
  }
  return cloneArr.filter((elem) => elem !== "removed");
}

module.exports = {
  transform,
};
