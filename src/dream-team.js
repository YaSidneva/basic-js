const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let name = '';
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = 0; i <= arr.length - 1; i ++) {
    if (typeof arr[i] === 'string') {
      let symbol = arr[i].trim().charAt(0).toUpperCase();
      name += symbol;
     
    }
  }
  let sortName = '';
  sortName = name.split('').sort().join("");
  return sortName;
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));

module.exports = {
  createDreamTeam
};
