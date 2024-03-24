const convertToCelsius = function(val) {
  val = val-32;
  val = val * (5/9);
  return Math.round(val * 10)/10;
};

const convertToFahrenheit = function(val) {
  val = val * (9/5);
  val += 32;
  return Math.round(val * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
