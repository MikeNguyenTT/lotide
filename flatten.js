const flatten = function(array) {
  let outputArray = []
  for (let element of array) {
    if (!Array.isArray(element)) {
      outputArray.push(element);
    }
    else {
      for (let nestedElement of element) {
        outputArray.push(nestedElement);
      }
    }
  }  
  return outputArray;
};

module.exports = flatten;