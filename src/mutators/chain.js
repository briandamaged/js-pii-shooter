
function *chain(...mutators) {
  for(const m of mutators) {
    yield *m;
  }
}

module.exports = exports = chain;
