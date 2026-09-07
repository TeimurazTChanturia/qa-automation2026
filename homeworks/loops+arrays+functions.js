// PART 1: for LOOP (Index Practice)

// print all elemtns
function printCityList(cityesArray) {
  for (let i = 0; i < cityesArray.length; i++) {
    const currnetCity = cityesArray[i];
    console.log("City N" + (i + 1) + ":" + currnetCity);
  }
}

const myTravelList = ["Tbilisi", "Moscow", "Batumi", "Kiev"];
printCityList(myTravelList);

//  Index + Value

function printLanguage(LanguagesList) {
  for (let i = 0; i < LanguagesList.length; i++) {
    const languageName = LanguagesList[i];
    console.log("index" + i + "has element" + languageName);
  }
}
const myLanguages = ["Geoirgian", "Russian", "English"];
printLanguage(myLanguages);

// First and Last

function printFirstAndLastScore(scoresArray) {
  if (scoresArray.length > 0) {
    for (let i = 0; i < scoresArray.length; i++) {
      if (i === 0) {
        const firstScore = scoresArray[0];
        const lastScore = scoresArray[scoresArray.length - 1];
        console.log("First score:" + firstScore);
        console.log("Last score:" + lastScore);
      }
    }
  }
}

const examScores = [77, 91, 66, 50, 98];
printFirstAndLastScore(examScores);

// PART 2: while LOOP (Strings)

//  Task 4: Loop Through a String
function printWordletters(wordString) {
  let index = 0;
  while (index < wordString.length) {
    const letter = wordString[index];
    console.log("letter M" + index + ":" + letter);
    index++;
  }
}

const greeting = " Holla";
printWordletters(greeting);

// PART 3: for LOOP + CONTROL FLOW

//Task 5: Stop When Found
function stopWhenNumberFound(numbersArray, targetNumber) {
  for (let i = 0; i < numbersArray.length; i++) {
    const currentNumber = numbersArray[i];
    console.log("Checking index" + i + "whithn number" + currentNumber);
    if (currentNumber === targetNumber) {
      console.log("Found target number" + targetNumber + " at index" + i);
      break;
    }
  }
}

const myLuckyNumber = [12, 15, 25, 35, 55, 100];
stopWhenNumberFound(myLuckyNumber, 25);

// PART 4: for...of LOOP (Value Access)

//Task 6: Print Values
function printCityNames(citiesArrays) {
  for (const city of citiesArrays) {
    console.log("City name:" + city);
  }
}

const myCities = ["Tokyo", "Berlin", "Seul"];
printCityNames(myCities);

//Task 7: Skip a Value

function printDaysExceptOne(daysArray, skippedDay) {
  for (const currentDay of daysArray) {
    if (currentDay === skippedDay) {
      continue;
    }
  }
}

const myWeekDays = ["Monday", "Thuesday", "Sunday", "Wednesday", "Thursday"];
printDaysExceptOne(myWeekDays, "Sunday");

// PART 5: APPLYING LOGIC

//Task 8: Uppercase Strings

function uppercaseAnimalsFor(animalsArray) {
  const uppercaseReult = [];
  for (let i = 0; i < animalsArray.length; i++) {
    const upperAnimal = animalsArray[i].toUpperCase();
    uppercaseReult.push(upperAnimal);
  }
  return uppercaseReult;
}

function uppercaseAnimalsForOf(animalsArray) {
  const uppercaseReult = [];
  for (const animal of animalsArray) {
    const upperAnimal = animal.toUpperCase();
    uppercaseReult.push(upperAnimal);
  }
  return uppercaseReult;
}

const myAnimalsList = ["tiger", "panther", "cheetos"];

const resultFor = uppercaseAnimalsFor(myAnimalsList);
console.log(resultFor);

const resultForOf = uppercaseAnimalsForOf(myAnimalsList);
console.log(resultForOf);

// Task 9: Length Checker

function printLongDays(daysArray) {
  for (const day of daysArray) {
    if (day.length > 4) {
      console.log("Long day name:" + day);
    }
  }
}

const myDaysList = ["Mon", "Tuesday", "Wed", "Thursday", "Fri"];
printLongDays(myDaysList);
