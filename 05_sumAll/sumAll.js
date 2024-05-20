const sumAll = function (start, end) {
  if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0) {
    return "ERROR";
  }

  return (start + end - 1) * (start + end) / 2;
};

// Do not edit below this line
module.exports = sumAll;
