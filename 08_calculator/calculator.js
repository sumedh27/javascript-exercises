const add = function(numOne,numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne,numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
	return arr.reduce((total,item)=> total + item , 0);
};

const multiply = function(arr) {
  return arr.reduce((total,item)=> total * item);
};

const power = function(num,powerOf) {
	const value = Math.pow(num, powerOf);;
  return value
};

const factorial = function(num) {
	let temp = 1;
  for(let i = 1; i <= num;i++){
    temp *= i;
  }
  return temp;

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
