const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != "string") {
    str = new String(str);
  }
  if (!options) {
    options = {};
  }
  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  if (typeof options.addition != "string") {
    options.addition = new String(options.addition);
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  let repeatedAddition = Array(options.additionRepeatTimes)
    .fill(options.addition)
    .join(options.additionSeparator);
  let strWithAddition = str + repeatedAddition;
  return Array(options.repeatTimes)
    .fill(strWithAddition)
    .join(options.separator);
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
