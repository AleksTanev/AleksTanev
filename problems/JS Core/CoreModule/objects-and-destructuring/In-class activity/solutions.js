// 1. function that logs each element


const person = {
  name: 'Sasho',
  age: 31,
  school: 'Telerik'
}

const getKeys = (obj) => {

  return console.log(Object.keys(obj))
}

getKeys(person)
// 2. delete single keys


const deleteKey = (obj, key) => {
  delete obj[key]

  return {...obj}
}

// console.log(deleteKey(person,'age'))


// 3. delete multiple keys

const deleteKeys = (obj, ...keys) => {
  for (const key of keys) {
    delete obj[key]
  }
  return {...obj}
}

// console.log(deleteKeys(person,'age','school'))

// 4. Check the types of an object and return the unique types

const getTypeStats = (obj) => {
  let types = []
  for (const el in obj) {
    if (obj[el] instanceof Array) {
      types.push('array')
    } else if (obj[el] === null) {
      types.push('null')
    } else {
      types.push(typeof obj[el])
    }
  }
  return { unique: [...new Set (types)]}
}

const test = {
  name: 'John',
  street: null,
  family: ['Dad', 'Mom'],
  address: {
    city: 'Sofia',
    country: 'Bulgaria'
  },
  familyName: 'Tanev'
}

// console.log(getTypeStats(test))


// 5. 

const parseUrl = (url) => {
  const parsedUrl = {};
  const [protocol, address] = url.split('://');
  parsedUrl.protocol = protocol

  parsedUrl.host = address.substring(0,address.indexOf('/'))
  parsedUrl.path = temp[1].substring(temp[1].indexOf('/'), temp[1].indexOf('?'))

  let queriesArr = temp[1].substring(temp[1].indexOf('?')+1,).split('&') 
  let queriesObj = {}
  for (const q of queriesArr) {
     const splitQ = q.split('=')
     queriesObj[splitQ[0]] = splitQ[1]

  }
  parsedUrl.query = queriesObj


  return parsedUrl


}

console.log(parseUrl('https://learn.telerikacademy.com/course/view.php?id=36&age=22'))
