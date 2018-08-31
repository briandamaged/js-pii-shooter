
const Reactor = require('./reactor');

const uriDecoder = require('./mutators/uri-decoder');
const email = require('./detectors/email');

function Detector({mutator = uriDecoder, detector = email}) {
  const reactor = Reactor(uriDecoder);

  function *d(input) {
    for(const mutation of reactor(input)) {
      yield *detector(mutation);
    }
  }

  return d;
}

module.exports = exports = Detector;
