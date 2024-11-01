/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teaTypes = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []
for (let i = 0; i < teaTypes.length; i++) {
   if (teaTypes[i] == "chai") {
      break;
   } else {
      selectedTeas.push(teaTypes[i])
   }
}
console.log(selectedTeas);
/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []
for (let i = 0; i < cities.length; i++) {
   if (cities[i] == 'Paris') {
      continue;
   } else {
      visitedCities.push(cities[i])
   }
}
console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5]
let smallNumbers = []
for (const key of numbers) {
   if (key == 4) {
      break
   } else {
      smallNumbers.push(key)
   }
}
console.log(smallNumbers);
/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let teas = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []
for (const ele of teas) {
   if (ele == "herbal tea") {
      continue;
   } else {
      preferredTeas.push(ele)
   }
}
console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/
let citiesPopulation = {
   "London": 8900000,
   "New York": 8400000,
   "Paris": 2200000,
   "Berlin": 3500000
};

let allPreviousCities = {}

for (const key in citiesPopulation) {
   if (key == 'Berlin') {
      break;
   } else {
      allPreviousCities[key] = citiesPopulation[key]
   }
}
console.log(allPreviousCities);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */
let worldCities = {
   "Sydney": 5000000,
   "Tokyo": 9000000,
   "Berlin": 3000000,
   "Paris": 2200000
};
let largeCities = {}
let minPopulation = 3000000
for (const key in worldCities) {
   if (worldCities[key] <= minPopulation) {
      continue;
   } else {
      largeCities[key] = worldCities[key]
   }
}
console.log(largeCities);


/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let totalTeas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []
let stopAdding = false
totalTeas.forEach(function (ele) {
   if (ele == 'chai') {
      stopAdding = true
      return;
   }
   if (stopAdding == false) {
      availableTeas.push(ele)
   }
})
console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let totalCities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let traveledCities = []
totalCities.forEach(function (ele) {
   if (ele == 'Sydney') {
      return
   }
   traveledCities.push(ele)
})
console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let numberCollection = [2, 5, 7, 9]
let skippingValue = 7
let doubledNumbers = []
for (let i = 0; i < numberCollection.length; i++) {
   if (numberCollection[i] == skippingValue) {
      continue;
   }
   doubledNumbers.push(numberCollection[i] * 2)
}
console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let teaCollection = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []
for (const ele of teaCollection) {
   if (!(ele.length > 10)) {
      shortTeas.push(ele)
   }
}
console.log(shortTeas);