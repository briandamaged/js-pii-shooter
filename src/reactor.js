
const UniqueQueue = require('./unique-queue');

function Reactor(mutator) {
  function *reactor(input) {
    const queue = new UniqueQueue();

    queue.push(input);

    while(queue.length > 0) {
      const seed = queue.pop();

      yield seed;
      for(const s of mutator(seed)) {
        queue.push(s);
      }
    }
  }

  return reactor;
}

module.exports = exports = Reactor;
