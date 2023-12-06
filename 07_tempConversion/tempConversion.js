const convertToCelsius = function(fahrenheit) {
  //C = 5/9 x (F-32)
  fahrenheit = (5/9*(fahrenheit-32)).toFixed(1)
  if(fahrenheit[fahrenheit.length-1]=="0"){
    fahrenheit = fahrenheit.substring(0, fahrenheit.length-2);
    
  }
  return Number(fahrenheit);
};

const convertToFahrenheit = function(celcius) {
  //°F = °C * 9/5 + 32
  fahrenheit = (celcius *9/5+32).toFixed(1)
  if(fahrenheit[fahrenheit.length-1]=="0"){
    fahrenheit = fahrenheit.substring(0, fahrenheit.length-2);
  }
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
