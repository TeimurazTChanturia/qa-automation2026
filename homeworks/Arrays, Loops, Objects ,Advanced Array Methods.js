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
