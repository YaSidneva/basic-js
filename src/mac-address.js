const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const blocks = inputString.split("-");

  if (blocks.length !== 6) {
    return false;
  }

  for (let block of blocks) {
    if (block.length !== 2) {
      return false;
    }
    const value = parseInt(block, 16);

    if (isNaN(value) || value < 0 || value > 255) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};

