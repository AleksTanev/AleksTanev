// Graduates
export default function (data) {
  // your code starts here
  const clone = {...data}
  const result = {}
  
  result['course'] = clone.course
  result['minPassingGrade'] = clone.minPassingGrade
  result['courseAverage'] = 0
  result['graduates'] = []
  
  let passingGrade = result['minPassingGrade']
  let courseAverage = 0
  let count = 0
  
  // This gets student averages
  const getAverages = (arr) => {
    let sum = 0
    for (const el of arr) {
      sum += el
    }
  
    return (sum/arr.length).toFixed(1) || 0
  }
  
  const getGraduates = (arr) => {
    for (const el of arr) {
      const graduate = {}
      for (const key in el) {
        if (getAverages(el[key]) >= passingGrade) {
        graduate['name'] = el['name']
        graduate['score'] = +getAverages(el[key])
        courseAverage += +getAverages(el[key])
        count++
        result['graduates'].push(graduate)
        } else {
          continue
        }
      }
    }
  }
  
  for (const key of Object.keys(clone)) {
    if (Array.isArray(clone[key])) {
      getGraduates(clone[key])
    }
  }
  
  result['courseAverage'] = (count > 0) ? Number((courseAverage/count).toFixed(1)) : 0
  return result
  // your code ends here
}
