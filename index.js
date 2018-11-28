//your code here
function createNestedArray(jumlahRow, jumlahCol) {
  let result = []
  var kamus = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < jumlahRow; i++) {
    let resultTmp = []
    for (let j = 0; j < jumlahCol; j++) {
      resultTmp.push(kamus[Math.floor(Math.random() * kamus.length)])
    }
    result.push(resultTmp)
  }
  return result
}

console.log(createNestedArray(5, 3))
console.log(createNestedArray(4, 2))