//your code here
function createNestedArray (jumlahRow, jumlahCol) {
  let myResult = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < jumlahRow; i++) {
    let tempResult = [];
    for (let j = 0; j < jumlahCol; j++) {
      tempResult.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    myResult.push(tempResult);
  }
  return myResult;
}

console.log(createNestedArray(5,3));
