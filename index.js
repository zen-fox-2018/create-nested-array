//your code here
function createNestedArr (jumlahRow, jumlahCol){
  const abjad = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  var isiAbjad ='';
  for (var i = 0; i < jumlahRow; i++) {
    var isi = [];
    for (var j = 0; j < jumlahCol; j++) {
      isiAbjad += abjad.charAt(Math.floor(Math.random() * abjad.length));
      isi.push(isiAbjad);
      isiAbjad ='';
    }
    result.push(isi);
  }
  return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
