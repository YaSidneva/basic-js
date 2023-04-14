const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(arg) {
  let k;
  let t;
  if (typeof arg != "string" || isNaN(arg) || arg.trim().length === 0) {
    return false;
  }
  numberArg = Number(arg);

  if (numberArg > MODERN_ACTIVITY || numberArg <= 0) {
    return false;
  }
  
  k = 0.693 / HALF_LIFE_PERIOD;
  t = Math.log(MODERN_ACTIVITY / numberArg) / k;

  return Math.ceil(t);
}


module.exports = {
  dateSample
};
