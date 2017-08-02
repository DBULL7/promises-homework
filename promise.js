// EXERCISE ONE

let testNum = (input) => {
  return new Promise((resolve, reject) => {
    if (input > 10) resolve('Success')
    if (input < 10) reject('Failure')
  })
}

// testNum()
//    .then((result) => console.log(result))
//    .catch((error) => console.log(error))
  

// EXERCISE 2

let makeAllCaps = (array) => {
  let checkType = array.map(i => typeof i === 'string' ? i.toUpperCase(): null)
  return new Promise((resolve, reject) => {  
    checkType.includes(null) ? reject('There was a non string element') : resolve(checkType)
  })
}

let sortWords = (capitalizedArr) => {
  return new Promise((resolve, reject) => {
    capitalizedArr ? resolve(capitalizedArr.sort()) : reject('status 500') 
  })
}

let arr = ['wowow', 'pants', 'bird']
makeAllCaps(arr)
  .then(results => sortWords(results))
  .then((result) => console.log(result))
  .catch((error) => console.log(error))


let sadArr = ['wowow', 5, 'bird']
makeAllCaps(sadArr)
  .then(results => sortWords(results))
  .then((result) => console.log(result))
  .catch((error) => console.log(error))