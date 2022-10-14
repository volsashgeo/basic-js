const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    let length = this.chain.length;
    this.chain = [];
    return length;
  },
  addLink(value) {
    if(value === '') this.chain.push(`()`);
    else this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(Math.trunc(position) === position && typeof(position) === 'number' && position > 0) {
      this.chain.splice(position - 1, 1);
      return this;
    }else throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;

  }
};

module.exports = {
  chainMaker
};
