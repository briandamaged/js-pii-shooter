

function tryDecode(input) {
  try {
    return decodeURIComponent(input);
  } catch(err) {
    
  }
}


function *decodingGenerator(input) {
  const next = tryDecode(input);
  if(next !== input) {
    yield next;
  }
}

module.exports = exports = decodingGenerator;

