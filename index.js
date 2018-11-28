//your code here
function createNestedArr(jumlahRow, jumlahCol){
  let output = []
  let alfabet = 'abcdefghijklmnopqrstuvwxyz'

  for ( let i = 0 ; i < jumlahRow ; i++){
    let arrDalam = []
    for (let j = 0 ; j < jumlahCol ; j++){
      arrDalam.push(alfabet[Math.floor(Math.random() * alfabet.length)])
    }
    output.push(arrDalam)
  }

  return output
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
