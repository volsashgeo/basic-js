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
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let nameArr = [];
  for (let name of members) {
    if (typeof name === "string") {
      for (let i = 0; i < name.length; i++) {
        if (name[i] !== " ") {
          nameArr.push(name[i].toUpperCase());
          break;
        }
      }
    }
  }
  return nameArr.sort().join("");
}

module.exports = {
  createDreamTeam,
};
