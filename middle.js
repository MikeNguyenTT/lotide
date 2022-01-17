const middle = function(array) {
  let middleArray = []
  const length = array.length;
  if (length > 2) {
    if (length % 2 !== 0) {
      middleArray.push(array[(length-1) / 2]);
    }
    else {
      middleArray.push(array[length / 2 -1]);
      middleArray.push(array[length / 2]);
    }
  }
  return middleArray;
}

module.exports = middle;

