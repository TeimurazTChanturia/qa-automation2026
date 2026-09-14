// Object Creation

let videoGame = {
  title: "Dota 2",
  rating: 2.5,
  isOnline: true,
  developersInfo: {
    company: "Valve",
    founded: 1996,
    country: "USA",
  },
};

// PART 2: OBJECT METHODS

videoGame.getDescription = function () {
  return;
  "Gamne" +
    this.title +
    "has rating" +
    this.rating +
    " created by" +
    this.developersInfo.company +
    ".";
};

// Task 3: Update Method

videoGame.updateRating = function (newRating) {
  this.rating = newRating;
  return this.rating;
};

// Calculation Method

videoGame.calculateYear = function () {
  let currentYear = 2026;
  return currentYear - this.developersInfo.founded;
};

console.log(videoGame.getDescription());
console.log("rating befor update", videoGame.rating);
videoGame.updateRating(4.7);
console.log("rating after update", videoGame.rating);
console.log("Years after company founded", videoGame.calculateYear());

//## OBJECT ACCESS

//Task 5: Dot vs Bracket

let car = {
  make: "Toyota",
  model: "Supra",
  year: 1997,
  engine: {
    type: "Trubocharged",
    horsepower: 330,
  },
};

console.log(car.make);
console.log(car.engine.horsepower);

console.log(car["year"]);
console.log(car["engine"]["type"]);

// Task 6: Property Checker

let book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

function checkProperty(obj, propertyName) {
  return propertyName in obj;
}

console.log(checkProperty(book, "author"));
console.log(checkProperty(book, "price"));

// PART 4: OBJECT METHODS PRACTICE

let kettle = {
  brand: "Xiaomi",
  waterLevel: 1000,
  temperature: 20,

  boilWater: function () {
    this.temperature = 100;
    return "Water is boiling! Current temeprature: " + this.temperature + "C";
  },
  checkWater: function () {
    return "Water level inside: " + this.waterLevel + "ml.";
  },
};

let boilResult = kettle.boilWater();
let waterResult = kettle.checkWater();

console.log(boilResult);
console.log(waterResult);

// ## PROPERTY MANIPULATION

// Add a New Property

let camera = {
  brand: "Sony",
  megapixels: 30,
  lens: "70mm",
};

camera.hasStabilization = true;

console.log(camera);

//  Update a Property Directly

let headphones = {
  brand: "Sony",
  model: "WH-1000XM4",
  volumeLevel: 40,
};

headphones.volumeLevel = 65;
console.log(headphones.volumeLevel);

// Delete a Property

let deskLamp = {
  brand: "IKEA",
  color: "black",
  bulbType: "LED",
};

delete deskLamp.bulbType;
console.log(deskLamp);

// OBJECT UTILITY METHODS

// List Object Keys

let tablet = {
  brand: "Apple",
  model: "iPad Air",
  storageGB: 64,
  cellular: true,
};

let tabletKeys = Object.keys(tablet);

console.log("Tablet keys:", tabletKeys);

let isStorageKeyPresent = tabletKeys.includes("storageGB");

console.log("Does 'storageGB' exist?", isStorageKeyPresent);

// List Object Values

let smartwatch = {
  brand: "Garmin",
  model: "Forerunner",
  batteryLifeDays: 7,
  hasGPS: true,
};

let watchValues = Object.values(smartwatch);
console.log("Smartwatch values:", watchValues);

let hasBrandValue = watchValues.includes("Garmin");
console.log("Does value 'Garmin' exist?", hasBrandValue);

//List Object Entries

let airPurifier = {
  brand: "Xiaomi",
  filterType: "HEPA",
  smartControl: true,
};

let purifierEntries = Object.entries(airPurifier);
console.log("Purifier entries:", purifierEntries);

let flatPurifierEntries = purifierEntries.flat();
console.log("Flattened purifier entries:", flatPurifierEntries);

// NESTED OBJECT PRACTICE

// Access Nested Properties

let smartTV = {
  brand: "LG",
  model: "OLED C3",
  audio: {
    powerWatts: 40,
    hasDolbyAtmos: true,
  },
};

let audioPower = smartTV.audio.powerWatts;
let dolbyStatus = smartTV.audio.hasDolbyAtmos;

console.log("Audio Power:", audioPower);
console.log("Dolby Atmos Support:", dolbyStatus);

// Update Nested Properties

let gamingMouse = {
  brand: "Razer",
  model: "Naga",
  settings: {
    dpi: 16000,
    pollingRateHz: 1000,
  },
};

gamingMouse.settings.dpi = 20000;
console.log("Updated settings:", gamingMouse.settings);
