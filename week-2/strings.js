// string length
let text = "String Manipulation Homeworks";
console.log(text.length); //29

//accessing characters
let name = "Tim";
console.log(name[0]); //T
console.log(name[2]); //m

//changing case

let mainmenu = "Menu";
console.log(mainmenu.toUpperCase()); // MENU
console.log(mainmenu.toLocaleLowerCase()); // menu

//Trimming Spaces

let ffa = "          FF       ";
console.log(ffa.trim()); // FF

// Slice

let hh = "Pomoika2";
console.log(hh.slice(0, 5)); // Pomoi
console.log(hh.slice(7)); // 2

// Replace

let texxt = "Lion is biggest cat";
console.log(texxt.replace("Lion", "Tiger")); // Tiger is biggest cat

//Includes

let jjj = "I like meat";
console.log(jjj.includes("meat")); // true
console.log(jjj.includes("tomato")); // false

// Split

let vegetables = "tomato,cucumber,pumpkin";
console.log(vegetables.split(",")); // "tomato","cucucmber","pumpkin"
console.log(vegetables.split("")); // "t","o","m","a"........."m","p"......
console.log(vegetables.split(" ")); // "tomato,cucumber,pumpkin"

// concat

let str1 = "Good";
let str2 = "Day";
console.log(str1.concat(" ", str2)); // "Good day"

// indexOf

let texxxt = "How are you?";
console.log(texxxt.indexOf("How")); //0
console.log(texxxt.indexOf("how")); //-1

// startsWith() and endWith()

let file = "jpeg.avi";
console.log(file.startsWith("jpeg")); // true
console.log(file.endsWith("avi")); // true

// Template literals

let nickname = "John";
let greeting = `Hello, ${nickname}!`;
console.log(greeting); // Hello John

//Multi-line Strings

let massage = `
Dont read
This 
Massage
`;
console.log(massage);

// Expressions Inside Template Literals

let d = 22;
let c = 33;
console.log(`Sum of ${d} and ${c} is ${d + c}`); // Sum of 22 and 33 is 55

// Combinin String Methods + Template Literals

let player = "banhummer322";
let score = 200;
console.log(`Player: ${player.toUpperCase()}, Score: ${score}`);
// Player: BANHUMMER322, Score: 200
