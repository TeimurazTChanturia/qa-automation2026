//# PART 1: COMBINING ARRAYS

//  Task 1: Combine Two Arrays

function combineTwoArrays(lolka1, lolka2) {
  let resultLolka = [];
  for (let item of lolka1) {
    resultLolka.push(item);
  }
  for (let item of lolka2) {
    resultLolka.push(item);
  }
  return resultLolka;
}

let nickNames = ["pomoika2", "doternechelovek"];
let playerStatus = [7, true];
let combinedPlayersData = combineTwoArrays(nickNames, playerStatus);
console.log(combinedPlayersData);

// Task 2: Combine and Print

function combineAndPrint(firstW, secondW) {
  let resultW = [];
  for (let i = 0; i < firstW.length; i++) {
    resultW.push(firstW[i]);
  }
  for (let j = 0; j < secondW.length; s++) {
    resultW.push(secondW[s]);
  }
  for (let r = 0; r < resultW.length; r++) {
    console.log(resultW[r]);
  }
}

//  Task 3: Combine Numbers

function mergeNumbers(listOne, listTwo) {
  let finalResult = [];
  for (let currnetNumber of listOne) {
    finalResult.push(currnetNumber);
  }
  for (let currnetNumber of listTwo) {
    finalResult.push(currnetNumber);
  }
  return finalResult;
}

// PART 2: LOOPS + ARRAYS

// Find the Largest Number

function findHighestPrice(priceList) {
  let findHighestPrice = priceList[0];
  for (let i = 0; i < priceList.length; i++) {
    if (priceList[i] > highestPrice) {
      highestPrice = priceList[i];
    }
  }
  return highestPrice;
}

//Count Numbers Greater Than 10

function countOverTen(items) {
  let amount = 0;
  for (let current of items) {
    if (current > 10) {
      amount++;
    }
  }
  return amount;
}

// Reverse an Array

function reverseArrayWithoutMethod(elements) {
  let finalResult = [];
  for (let i = elements.length - 1; i >= 0; i--) {
    finalResult.push(elements[i]);
  }
  return finalResult;
}

function reverseArrayWithMethod(elements) {
  let finalResult = [];
  for (let i = 0; i < elements.length; i++) {
    finalResult.push(elements[i]);
  }
  return finalResult.reverse();
}

// PART 3: OBJECTS

function outputCostumerData(custumer) {
  console.log(customer.name);
  console.log(customerr.age);
  console.log(customer.city);
}

// Check Object Property

function checkObjProp(item, key) {
  return key in item;
}

// PART 4: ARRAYS OF OBJECTS

// Print Names

function displayPlayerNames(players) {
  for (let player of players) {
    console.log(player.name);
  }
}

// Find Adults

function findAdultPeople(users) {
  let adultUsers = [];
  for (let user of users) {
    if (user.age >= 18) {
      adultUsers.push(user);
    }
  }
  return adultUsers;
}

// PART 5: .forEach()

// Print Each Value

function displayElemets(items) {
  items.forEach(function (elemet) {
    console.log(element);
  });
}

// Print Doubled Numbers

function displayDoubleNumbers(elements) {
  elements.forEach(function (n) {
    console.log(n * 2);
  });
}

// PART 6: .map()

//  Double Numbers

function multiplyByTwo(elemets) {
  return elemets.map(function (n) {
    return n * 2;
  });
}

// Uppercase Strings

function convertToUppercase(words) {
  return words.map(function (word) {
    return word.toUpperCase();
  });
}

// Get Names

function getPlayerNames(players) {
  return students.map(function (student) {
    return student.name;
  });
}

// PART 7: .filter()

// Filter Even Numbers

function selectEvenNumbers(elements) {
  return elemets.filter(function (n) {
    return n % 2 == 0;
  });
}

// Filter Long Strings

function findStringsLongerThanFive(elements) {
  return elements.filter(function (item) {
    return item.length > 5;
  });
}

// Filter Expensive Products

function findProductsOverOneHundred(goods) {
  return goods.filter(function (good) {
    return good.price > 100;
  });
}

//  PART 8: .find()

//  Find a Number

function findTargetNumber(elements, seatchVal) {
  return elements.find(function (n) {
    return n == seatchVal;
  });
}

// Find a Person

function LocalCitizen(citizens, desiredName) {
  return citizens.find(function (resident) {
    return resident.name == desiredName;
  });
}

// PART 9: .some()

// Any Numbers Over 100?

function isAnyValueAboveLimit(measurments) {
  return measurments.some(function (reading) {
    return reading > 100;
  });
}

// PART 10: .every()

//Are All Numbers Positive?

function isEveryNumberPositive(values) {
  return values.every(function (val) {
    return val > 0;
  });
}

// Are All Adults?

function verifyAllOfLegalAge(citizens) {
  return citizens.every(function (resident) {
    return resident.age >= 18;
  });
}

// PART 11: COMBINING ARRAY METHODS

// Dbouble Only Even Numbers

function getDoubleEvens(vauesList) {
  return valuesList
    .filter(function (item) {
      return item % 2 == 0;
    })
    .map(function (evenItem) {
      return evenItem * 2;
    });
}

// Get Names of Adults

function getGrownUpNames(citizens) {
  return citizenList
    .filter(function (resident) {
      return resident.age >= 18;
    })
    .map(function (grownUp) {
      return grownUp.name;
    });
}

// PART 12: CHALLENGE TASKS

// Combine, Filter, and Map

function combineAndTransform(primaryNumbers, secondaryNumbers) {
  return primaryNumbers
    .concat(secondaryNumbers)
    .filter(function (digit) {
      return digit > 10;
    })
    .map(function (scaledDigit) {
      return scaledDigit * 2;
    });
}

// Find a Product

function LocateProduct(procustList, desiredName) {
  return productsList.find(function (goodsItem) {
    return goodsItem.name === desiredName;
  });
}

// Product Check

function checkBugetProducts(catalog) {
  return catalog.some(function (item) {
    return item.price < 20;
  });
}

// Product Validation

function validateCatalogPrices(catalog) {
  return catalog.every(function (item) {
    return item.price > 0;
  });
}

// PART 13: FINAL CHALLENGE

// Passing Students

function getNamesOfHighAchievers(tojTechGroup) {
  const passingGroup = tojTechGroup.filter(function (candidate) {
    return candidate.grade >= 80;
  });

  passingGroup.every(function (participant) {
    return participant.grade >= 80;
  });

  return passingGroup.map(function (member) {
    return member.name;
  });
}
