// OBJECTS // A basic introduction // Created by A.T. //

let user = {                // defining an object
  name: "John",
  age: 20
}

console.log(user.age)

delete user.age             // removing a property of an object

console.log(user)

user.isAdmin = true         // adding a property to an object

console.log(user)

// we can also add multi-word properties but only at the definition stage:

const user2 = {
  name: "user2",
  "multi-word-property": true
}

console.log(user2)

// and here's another way of creating a new object:

const user3 = new Object()
user3.name = "Sasho"
user3.age = 31
user3.occupation = ["Programmer", 'Crypto billionaire', "Lingerie model"]

console.log(user3)

// we can also access properties with a bracket notation or using dot. notation

console.log(user3['name'])
console.log(user3.name)

// brackets can be used more flexibly and are more powerful than dot notation. 
// Dot notation is preferable when the key/property names are known and simple.

let string = ' am I'
user3["how tall" + string] = 180        // we can't do the same with dot


// Properties are so commonly named after their values, that there's a shorthand notation:

let title
let age

const user4 = {
  title,
  age: 40,
}

console.log(user4)

// how to create an object with a function

function makeUser(name, age) {
  return {
    name,           // here we again use the shorthand notation, full would be name: name, age: age
    age
  }
}

let user77 = makeUser('Jonny', 30)

console.log(user77)



// Properties have no name limitations

let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: 4
}
console.log(obj)        // This is crazy but to illustrate that properties can be named after JS keywords.


// Properties existence test:

let userEmpty = {}

console.log(userEmpty.noSuchProperty === undefined)    // returns True. when reading a non-existent property JS returns undefined.

// same can be checked with a special operator "in"

let yetAnotherUser = { name: "Koki", age: 22 }

console.log("age" in yetAnotherUser)                 // returns True, take note to use "" 


// So why does "in" exist? There's a special case, when if we have a property with an assigned value undefined.
// if the property test: undefined, and we check obj.test, this will return undefined, but "test" does exist as a property!
// In comparison, ("test" in obj) will return True, meaning there is such a property

// just like with arrays, we can iterate through objects

for (var property in user3) {
  console.log(property)           // this will log the property name
  console.log(user3[property])    // this will log the property value
}

// and another way to iterate through Objects

Object.keys(user3).forEach(function (key) {
  return console.log(key), console.log(user3[key])
})

//Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order
//they were added? Can we rely on this?

// The short answer is: “ordered in a special fashion”: 
// integer properties are sorted, others appear in creation order. The details follow.

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code);  // this will order the properties in ascending order.
}

// Otherwise if the keys are non integer, they will be listen in order of creation


// Congrats! You've reached the end. The summary was made using following source:
// https://javascript.info/object and some other https://bitsofco.de/for-in-vs-for-of/


// BONUS! Checking for equality based on unique identifiers (for Heros that would be their name)

const villains = [
  { name: 'Magnetto' },
  { name: 'Spiderman' },
  { name: 'Sauron' }
];

const checkHero = (villains, name) => {
  for (const v of villains) {
    if (v.name === name) return true;
  };

  return false;
};

console.log(checkHero(villains, 'Spiderman'))

// Object assign method.

