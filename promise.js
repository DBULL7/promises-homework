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
  console.log(checkType)
  // return new Promise((resolve, reject) => {
    
  // })
}

let arr = ['wowow', 'pants', 'bird']
makeAllCaps(arr)