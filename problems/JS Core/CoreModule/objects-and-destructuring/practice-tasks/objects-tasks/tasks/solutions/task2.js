// Game of Key-owns
export default function (data) {
  // your code starts here
  const clone = {...data}
  let keys = [...clone['keys']]

  const newObj = {}

  const checkPropertyNames = (obj1,obj2,key) => {
    if (key in obj1 && key in obj2) {
      newObj[key] = [obj1[key]].concat([obj2[key]])
    } else if (key in obj1) {
      newObj[key] = obj1[key]
    } else if (key in obj2) {
      newObj[key] = obj2[key]
    } else {
      newObj[key] = null
    }
  }
  
  for (const key of keys) {
    checkPropertyNames(clone['first'],clone['second'],key)
  }

  return newObj
  // your code ends here
}
