
function Chain(...mutators) {
  function *chain(input) {
    for(const m of mutators) {
      yield *m(input);
    }
  }

  return chain;
}

module.exports = exports = Chain;
