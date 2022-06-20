// Clone Objects
export default function (data) {
  // your code starts here
  const clone = {...data}
  for (const key of Object.keys(clone)) {
      if (typeof clone[key] === 'object') {
        if (Array.isArray(clone[key])) {
          clone[key] = [...clone[key]]
        } else if (clone[key] === null) {
          continue
        } else {
          clone[key] = {...clone[key]}
        }
      }
  }
  return clone
  // your code ends here
}
