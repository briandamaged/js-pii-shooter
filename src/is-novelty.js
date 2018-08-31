
function IsNovelty() {
  const encountered = new Set();
  function isNovelty(thing) {
    if(encountered.has(thing)) {
      return false;
    }

    encountered.add(thing);
    return true;
  }

  return isNovelty;
}

module.exports = exports = IsNovelty;
