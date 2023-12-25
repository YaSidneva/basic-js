const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = '';

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) ||
   isNaN(date.getTime()) || 
   Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  let monthNum = date.getMonth();
  if (isNaN(monthNum)) {
    throw new Error('Invalid date!');
  }

  if (monthNum >= 2 && monthNum <= 4) {
    season = 'spring';
  } else if (monthNum >= 5 && monthNum <= 7) {
    season = 'summer';
  } else if (monthNum >= 8 && monthNum <= 10) {
    season = 'autumn';
  } else {
    season = 'winter';
  }

  return season;
}

module.exports = {
  getSeason
};

