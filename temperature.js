function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log("======================================");
console.log ("       Temperature Conversion");
console.log("======================================");
let celsius1 = 25;
let fahrenheit1 = celsiusToFahrenheit(celsius1);
console.log(" 25°C in Fahrenheit:      " + fahrenheit1);

let fahrenheit2 = 86;
let celsius2 = fahrenheitToCelsius(fahrenheit2);
console.log(" 86°F in Celsius:         " + celsius2);

let celsius3 = -5;
let fahrenheit3 = celsiusToFahrenheit(celsius3);
console.log(" -5°C in Fahrenheit:      " + fahrenheit3);
console.log("======================================");