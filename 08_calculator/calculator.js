const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, num) => {
    return total + num;
  }, 0)
};

const multiply = function(arr) {
  if(arr.length === 0){return 0};
  return arr.reduce((total,x) =>{
    return total * x;
  }, 1)
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
	let x = 1;
  if(a == 0 || a == 1){
    return x;
  }
  while(a > 0){
    x = x * a;
    a--;
  }
  return x;
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
