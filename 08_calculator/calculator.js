const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  if (numbers.length === 0) return 0;

	return numbers.reduce((total, current) => total + current);
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total * current);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;

  let result = 1;
  for (let i = 2; i < a + 1; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
