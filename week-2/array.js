// TRANSFORMERS

// accessin array elements

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry

// updating element in array

fruits[1] = "mango";
console.log(fruits);

// .length

console.log(fruits.length);

// concat ()
const colors = ["red", "blue"];
const moreColors = ["yellow", "white"];
const allColors = colors.concat(moreColors);

console.log(colors);
console.log(moreColors);
console.log(allColors);

// flat ()

const nestedNumbersArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArr = nestedNumbersArr.flat();
console.log(nestedNumbersArr[2]);
console.log(nestedNumbersArr[2].length);

console.log(nestedNumbersArr);
console.log(flattenedArr);

// slice

const grades = ["A", "B", "C", "D", "E"];
const slicedGrades = grades.slice(1, 4);

console.log(grades);
console.log(slicedGrades);

/// MUTATORS ///
const mutableFuits = [...fruits];
console.log(mutableFuits);

// push
mutableFuits.push("kiwi");
console.log(mutableFuits);

// pop
mutableFuits.pop();
console.log(mutableFuits);

// unshift

mutableFuits.unshift("grapes");
console.log(mutableFuits); // [ 'grapes', 'apple', 'mango', 'cherry' ]

// shift
mutableFuits.shift();
console.log(mutableFuits); // [ 'apple', 'mango', 'cherry' ]

// reverse
mutableFuits.reverse();
console.log(mutableFuits); // [ 'cherry', 'mango', 'apple' ]

// sort
mutableFuits.sort();
console.log(mutableFuits); // [ 'apple', 'cherry', 'mango' ]

// check the original array
console.log(fruits); // [ 'apple', 'mango', 'cherry' ]

// FINDERS ///

// indexOf
const cars = ["Tesla", "BMW", "Mersedes", "Tesla", "KIA", "Jeep", "Tesla"];
console.log(cars.indexOf("Tesla"));

// LastIndexPf
console.log(cars.lastIndexOf("Tesla"));

// at
console.log(cars.at(0));

// includes
console.log(cars.includes("Jeep"));

// JOINERS & CONVERTESR //
console.log(cars.join(", ")); // Tesla, BMW, Mersedes, Tesla, KIA, Jeep, Tesla

// Array.from
const str = "Hello";
const strToArr = Array.from(str);
console.log(strToArr); // [ 'H', 'e', 'l', 'l', 'o' ]
