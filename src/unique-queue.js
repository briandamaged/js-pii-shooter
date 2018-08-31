
const IsNovelty = require('./is-novelty');

class UniqueQueue {
  constructor() {
    this.queue = [];
    this.isNovelty = IsNovelty();
  }

  push(item) {
    if(this.isNovelty(item)) {
      this.queue.push(item);
      return true;
    } else {
      return false;
    }
  }

  pop() {
    return this.queue.pop();
  }


  unshift(item) {
    if(this.isNovelty(item)) {
      this.queue.shift(item);
      return true;
    } else {
      return false;
    }
  }

  shift() {
    return this.queue.shift();
  }


  get length() {
    return this.queue.length;
  }

}


module.exports = exports = UniqueQueue;
