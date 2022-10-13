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
  if(date === undefined){
    return 'Unable to determine the time of year!';
  } else if(isNaN(Date.parse(date)) || date[Symbol.toStringTag] === 'Date'){
    throw new Error ("Invalid date!");
  }

  let month = date.getMonth() || date.getUTCMonth();
  let arr = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  return arr[month];
}

module.exports = {
  getSeason
};
