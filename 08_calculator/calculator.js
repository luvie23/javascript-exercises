const add = function(a,b) {
	return (a + b);
};

const subtract = function(a,b) {
	return (a - b);
};

const sum = function(array) {
  let sum = 0;
	for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = array[0];
	for (i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(a,b) {
  let result = a;
	for (i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (i= 1 ; i <= number; i++){
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
