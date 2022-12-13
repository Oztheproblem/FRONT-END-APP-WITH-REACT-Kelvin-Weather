const myKelvin = 283 //Kelvin

const myCelsius = myKelvin - 273; //Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

let myFahrenheit = myCelsius * (9/5) + 32 // Fahrenheit = Celsius * (9/5) + 32

myFahrenheit = Math.floor(myFahrenheit); //When you convert from Celsius to Fahrenheit, you often get a decimal number.

console.log(`The temperature is ${myFahrenheit} degrees Fahrenheit.`);
