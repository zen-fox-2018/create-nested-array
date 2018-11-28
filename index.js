function acak() {
  let abzad = 'abcdefghijklmnopqrstuvwxyz'
  let result =  abzad.charAt(Math.floor(Math.random()* abzad.length))
  return result
}

// console.log(acak())

function createdNestedArr(row, col) {
  let result = []
  for (let i = 0; i < row; i++) {
    let temp = []
    for (let j = 0; j < col; j++) {
      temp.push(acak())      
    }
    // console.log(acak())
    result.push(temp) 
  }
  return result
}

console.log(createdNestedArr(4,4));
console.log(createdNestedArr(4,2))