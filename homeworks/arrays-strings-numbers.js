let carBrands = ["Ford", "Lexus", "Subaru", "Bmw", "Honda"];
//An array of car brands (at least 5)

let numbers = [12, 22, 99, 300];
//An array of numbers

let greeting = "      Hola!       ";
// A string with extra spaces

let fuelPrice = 5.5;
//A decimal number

//PART 1: ARRAYS (Car Brands)

console.log(carBrands[0]); // its shows Ford
//log the first car brand

console.log(carBrands.at(-1)); // its shows Honda
//Log the last car brand using a method
//we will use finder at

console.log(carBrands.length); // its shows 5
//Log how many car brands are in the array

// Change the second car brand
carBrands[1] = "Nissan";

// Change the last car brand
carBrands[carBrands.length - 1] = "Mersedes";

// Log the updated array
console.log(carBrands); // its shows ["Ford","Nissa","Subaru","Mersedes"]

//Add a new car brand to the end
carBrands.push("Toyota");
console.log(carBrands); // its shows 'Ford', 'Nissan', 'Subaru', 'Bmw', 'Mersedes', 'Toyota'

//Remove the last car brand
carBrands.pop();
console.log(carBrands); // 'Ford', 'Nissan', 'Subaru', 'Bmw', 'Mersedes'

//Add a new car brand to the beginning
carBrands.unshift("Audi");
console.log(carBrands); // 'Audi', 'Ford', 'Nissan', 'Subaru', 'Bmw', 'Mersedes'

// Remove the first car brand
carBrands.shift();
console.log(carBrands); // 'Ford', 'Nissan', 'Subaru', 'Bmw', 'Mersedes'

// Reverse the array
carBrands.reverse();
console.log(carBrands); // 'Mersedes', 'Bmw', 'Subaru', 'Nissan', 'Ford'

// Sort the array alphabetically
carBrands.sort();
console.log(carBrands); // 'Bmw', 'Ford', 'Mersedes', 'Nissan', 'Subaru'

//Check if "Toyota" exists in the array
let isThereToyota = carBrands.includes("Toyota");
console.log(isThereToyota); // false

// Find the index of "BMW"
let findIndexBmw = carBrands.indexOf("BMW");
console.log(findIndexBmw); //-1 // he does find BMW we have Bmw

//Find the last index of a car brand that appears more than once
carBrands.push("Ford");
let lastIndexOfCar = carBrands.lastIndexOf("Ford");
console.log(lastIndexOfCar);
//we will add dublicate Ford , method LastIndexOf starting search from the end,find our duplicate 5

// convert car brands array into a single string
let carString = carBrands.join(", ");
console.log(carString); // Bmw, Ford, Mersedes, Nissan, Subaru, Ford

// check if the car brands variable is an array
let itsArray = Array.isArray(carBrands);
console.log(itsArray); // true

// conver the word "ENGINE" into an array of characters
let converEngine = "ENGINE";
let arrayEngine = Array.from(converEngine);
console.log(arrayEngine); // 'E', 'N', 'G', 'I', 'N', 'E'

// PART 2: STRING MANIPULATION

//remove extra spaces from the string

let removeExtraSpace = greeting.trim();

//log the cleaned string
console.log(removeExtraSpace); // Hola!

//log its Length
console.log(removeExtraSpace.length); // 6

//convert the string to uppercase
let uppercaseGreeting = removeExtraSpace.toUpperCase();
console.log(uppercaseGreeting); // HOLA!

//convert it to lovercase
let lovercaseGreeting = removeExtraSpace.toLowerCase();
console.log(lovercaseGreeting); // hola!

// log the first character
console.log(removeExtraSpace[0]); // H

//log the last character
console.log(removeExtraSpace.at(-1)); // !

// extract the fist word

let sentence = "I love fast cars";
let firstWord = sentence.split(" ")[0];
console.log(firstWord); // I

// extract the last word
let lastWord = sentence.split(" ").at(-1);
console.log(lastWord); // cars

// replace one word with another
let newWord = sentence.replace("fast", "super");
console.log(newWord); // I love super cars

// check if the string includes "car"
let hasCar = sentence.includes("car");
console.log(hasCar); // true

// find the position of a word
let wordPosition = sentence.indexOf("fast");
console.log(wordPosition); // 7

// check if the string starts with a specific word
let startWith = sentence.startsWith("I");
console.log(startWith); // true

// check if the string ends with a specific word
let endsWithSpec = sentence.endsWith("cars");
console.log(endsWithSpec); // true

// Split the sentence into words
let wordsArray = sentence.split(" ");
console.log(wordsArray); // [ 'I', 'love', 'fast', 'cars' ]

// Join two strings using a method (not +)
let str1 = "I love";
let str2 = "cars";
let combinedString = str1.concat(str2);
console.log(combinedString); // I love cars

// Template Literals
let brand = "Subaru";
let carYear = "2020";
let currentYear = 2026;
let carAge = currentYear - carYear;
let carStory = `My car${brand} was released in ${carYear} year,thats why shes ages is - ${carAge}`;
console.log(carStory); // My carSubaru was released in 2020 year,thats why shes ages is - 6
