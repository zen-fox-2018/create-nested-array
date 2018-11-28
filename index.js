function createNestedArr(jumlahRow, jumlahCol) {
    //your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arrayLuar = [];
  
    for (let i = 0; i < jumlahRow; i++) {
      let arrayDalam = []
      for (let j = 0; j < jumlahCol; j++) {
        let randomAlphabet = Math.floor(Math.random() * alphabet.length);
        arrayDalam.push(alphabet[randomAlphabet])
      }
      arrayLuar.push(arrayDalam)
    }
  
    return arrayLuar
  }
  
  console.log(createNestedArr(5, 3));
  console.log(createNestedArr(4, 2));