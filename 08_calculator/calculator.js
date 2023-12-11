const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((total, element) => total + element, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, element)=> total*element, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a==0) return 1;
  let total=1;
  for(let i=2; i<a+1; i++){
    total=total*i;
  }
  return total;
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
