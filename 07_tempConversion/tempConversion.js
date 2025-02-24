// Celsius to Fahrenheit: (x * 9/5 + 32) F
// Fahrenheit to Celsius: (x - 32 ) * 5/9 C

const convertToCelsius = function(fahrenheit) {
    let convertedTemp = 0;
    convertedTemp = (fahrenheit - 32) * 5/9;
    return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let convertedTemp = 0;
  convertedTemp = (celsius * 9/5 + 32);
  return parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
