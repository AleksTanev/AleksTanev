const arr = [1,2,3]

for (const index of arr) {              // we use for.. of for Arrays and Strings
    console.log(index)
}


const obj = {               
    name: "Sasho",
    age: 31,
    height: 180
}

obj.historian = false

for (const key in obj) {                // and this is how we use for.. in for objects. Note the code will work
    console.log(`${key}: ${obj[key]}`)  // when we add new properties to the obj, like line 14.
}