const without = function(sourceArray, itemsToRemove) {
  let outputArray = [];
  for (let element of sourceArray) {
    let toBeRemoved = false;
    for (let item of itemsToRemove) {
      if (element === item ) {
        toBeRemoved = true;
        break;
      }
    }
    if (!toBeRemoved) {
      outputArray.push(element);
    }
  }
  return outputArray;
};

module.exports = without;