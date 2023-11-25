/*Q-10:. The Temperature Converter: It’s hot out! Let’s make a converter
based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NoC is NoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NoF is NoC”.*/

var tempCelsius=25;
var tempFahrenheit=(tempCelsius*9/5)+32;
document.write(tempCelsius+"\xB0C is "+tempFahrenheit+"\xB0F.<br>")
var fahrenheitTemp=70;
var celsiusTemp=(fahrenheitTemp-32)*5/9;
document.write(fahrenheitTemp+"\xB0F is "+celsiusTemp+"\xB0C.")