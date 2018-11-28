function nestedArray(rows,cols) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let array = []
  for (let i = 0; i < rows; i++) {
    let innerArray = []
    for (let j = 0; j < cols; j++) {
      innerArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    }
    array.push(innerArray)
  }
  return console.log(array);
}

nestedArray(4,4)
