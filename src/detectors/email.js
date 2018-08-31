

// Yields each email that gets detected in the input
function *emails(input) {
  // TODO: Figure out a way to avoid re-compiling this regex
  const r = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;

  while(true) {
    const m = r.exec(input);
    if(!m) {
      break;
    }

    yield m[0];
  }
}


module.exports = exports = emails;

