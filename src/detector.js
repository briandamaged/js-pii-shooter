
const IsNovelty = require('./is-novelty');

const Reactor = require('./reactor');

const uriDecoder = require('./mutators/uri-decoder');
const email = require('./detectors/email');

function Detector({mutator = uriDecoder, detector = email} = {}) {
  const reactor = Reactor(uriDecoder);

  function *d(input) {
    const isNovelty = IsNovelty();
    for(const mutation of reactor(input)) {
      for(const pii of detector(mutation)) {
        if(isNovelty(pii)) {
          yield pii;
        }
      }
    }
  }

  return d;
}

module.exports = exports = Detector;
