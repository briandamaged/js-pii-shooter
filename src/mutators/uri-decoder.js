
function *decodingGenerator(input) {
  try {
    const next = decodeURIComponent(input);
    if(next !== input) {
      yield next;
    }
  } catch(err) {
    // Decoding failed.  Do nothing
  }
}

module.exports = exports = decodingGenerator;

