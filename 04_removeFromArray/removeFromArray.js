const removeFromArray = function (array) {
  const elements = Array.from(arguments).slice(1);
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!elements.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
