const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        positions = results[letter];
        positions.push(i);
        results[letter] = positions;
      } else {
        const positions = [i];
        results[letter] = positions;
      }
    }
  }
  return results;
}


module.exports = letterPositions;
