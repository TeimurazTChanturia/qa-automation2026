// Identify the Data type

// "Hello world" - String type (text in "" refines to text type)

// 42 - Number type ( numbers )

// true - Boolean type (logical value can only be true ore false)

// null - Null type (intentional absence of any value)

// undifiend  - Undefined type (variable has beeen created but not assigned value)

// [1, 2, 3] -  Array type ( collection of values which can be of any data)

// { name: "Alex", age: 20} - Object type (Its collection of key-values pairs used to store releated data and functionality)

// Create Variables

const movie = "Saving Private Ryan";

let age = 35;

let youLikeJavaScript = true; // Yeah,i like it!!!

console.log("Do you like Java Script?", youLikeJavaScript); // true

let buyerBonus;
console.log("What bonus buyers will have?", buyerBonus);
buyerBonus = "Free cake";
console.log("Buyer has bonus", buyerBonus);

let dota2Game = null;
console.log(dota2Game);
dota2Game = "Dota 2 is running";
console.log("What status Dota 2 game has?", dota2Game);

// Primitive vs Non-Primitive

let a = "JS"; // Primitive
let b = [10, 20]; // nonprimitive
let c = 100; // primitive
let d = { city: "Paris" }; // nonprimitive

// Data types : Array and Object called nonprimitive cose they are mutable,they can gro up change their value, we can change contents whitout resighn value, they also have memory allocation

// Create 3 different arrays that contains 5 elements each.

let pcComponents = ["CPU", "GPU", "Motherboard", "RAM", "PSU"];
console.log("Components for PC", pcComponents);

let streetNumbers = [22, 12, 5, 7, 33];
console.log("Numbers of street", streetNumbers);

let studentsStatus = [true, false, true, false, true];
console.log("Are students ready for class?", studentsStatus);

// Create 3 different objects representing something real (example: phone, car, book, student, game etc).

const car = {
  brand: "Ford",
  model: "Mustang",
  year: 2013,
  isRWD: true,
  spec: ["Engine type:5.0 DOHC ", "Horse power:420", "Transmission:Manual"],
};
console.log(car);
console.log(car.brand);
console.log(car.model);

const battlefield = {
  title: "Battlefield 6",
  genre: "Shooter",
  releaseYear: 2025,
  isMultiplayer: true,
  gameModes: ["Conquest", "Breakthrough", "Team Deathmatch"],
};
console.log(battlefield);
console.log(battlefield.genre);
console.log(battlefield.isMultiplayer);

const motorcycle = {
  brand: "Suzuki",
  model: "Hayabusa",
  engine: "4-cylinder,in-line",
  maxspeed: "299 km/h",
  year: 2015,
};
console.log(motorcycle);
console.log(motorcycle.model);
console.log(motorcycle.year);

//Control Flow
// ### If Statement

const number = 5;
if (number > 1) {
  console.log("Positive number");
}

// ### If–Else

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Log in in to accaunt");
}

isLoggedIn = false;
if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Log in in to accaunt");
}

// Else If

const score = 84;
if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Switch Statement

const colaVolume = "0.5l"; // we are looking for a match for this value
switch (
  colaVolume // run switch control flow
) {
  case "0.20l":
    console.log("Small bottle of cola"); // we will check if equal volume 020? if yes enter that text
    break; // switch stop
  case "0.5l":
    console.log("Normal bottle of cola");
    break;
  case "1l":
    console.log("Big bottle of cola");
    break;
  default: // backup plan it will work if variable is "5L" ore "milk"
    console.log("There is no volume of cola");
}

const colaWBreak = "0.5l";
switch (colaWBreak) {
  case "0.20l":
    console.log("small bottle of cola");
  case "0.5l":
    console.log("Normal bottle of cola"); // we dont have break we didn check condition thats why we will see that text too
  case "1l":
    console.log("Big bottle of cola");
  default:
    console.log("There is no volume of cola"); // we will see that too
}

// operators

// Arithmetic Operators

const num1 = 10;
const num2 = 4;

// addition
const additionResult = num1 + num2;
console.log("Addition result", additionResult); // shows 14

// subtraction

const subtractionResult = num1 - num2;
console.log("Subtraction result", subtractionResult); // shows 6

// multiplication

const multiplicationResult = num1 * num2;
console.log("Multiplication result", multiplicationResult); // shows 40

// division
const divisionRsult = num1 / num2;
console.log("Division result", divisionRsult); // shows 2.5

let currentNumber = 7;
currentNumber++;
console.log("Increas by 1", currentNumber); // shows 8 cose we use increment operator

currentNumber--;
console.log("Decreas by 1", currentNumber); // shows 7 cose se use decrement operator

const fistNumber = 19;
const secondNumber = 3;
const remainderResult = fistNumber % secondNumber;
console.log("6.Remainder from division:", remainderResult); // shows 1 we used moduls operator

const randomNumber = 5;
const powerResult = randomNumber ** 3;
console.log("5 by powered 3", powerResult); // 125 we used exponentaion operator

// Comparison Operators

const rrandomNumer = 77;
const rrandomNumberString = "70";
const compareResult = rrandomNumer === rrandomNumberString;
console.log("Resolt compare", compareResult); // shows false cose differeny data types

const numbfirst = 36;
const numbsecond = 99;
const isGreater = numbfirst > numbsecond;
console.log("First number bigger then second", isGreater); // shows false
const isLess = numbfirst < numbsecond;
console.log("First number smaller then second", isLess); // shows true

const cat1 = "White";
const cat2 = "Black";
const whatAResult = cat1 !== cat2;
console.log("They are dont aqual", whatAResult);

// Logical Operators

const userBalance = 2000;
const userAge = 13;
// we will check money , game price is 1000 and we will check age cose game for +18
// operatior && return tur only if both conditions are true
const purchaseAllowed = userBalance >= 1000 && userAge >= 18;
console.log("Can he buy the game?", purchaseAllowed); // shows false

const cardBalance = 0;
const cashAmount = 300;

//we weill use operator OR || we will type cardBalance > 100 its shows falce cose its 0
// then we will type cashAmount >50 its shows true cose we have 300
// operator OR shows true cose 1 of condition is true

const canBuyMilk = cardBalance > 100 || cashAmount > 50;
console.log("I can buy milk", canBuyMilk); // shows true

const isPhoneModeMuted = true;

// we will use operator NOT ! reverse this meaning
// we will create variable wich responsible for opposite state

const isPhoneRinging = !isPhoneModeMuted;

// cose phone was muted true ! - he returns opposite answer

console.log("Is the phone on speaker?", isPhoneRinging); // shows false

// Truthy vs Falsy

// we will create valu epmty string with falsy

const emptyBasket = "";

// use it in control flow if ,  operator NOT ! change false to true
if (!emptyBasket) {
  console.log("Falsy value detected");
}

const productList = ["Meat", "Bread"];
// we will use if becose he is truthy
if (productList) {
  console.log("Truthy value  detected");
}

let chosenColor;
// we will use operator ORE || he see first variable is empty and he take string "Green"
const finalColor = chosenColor || "Green";
console.log(finalColor); // shows Green
