function createNestedArr (row, col) {
  var result = [];
  var chars = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < row; i++) {
    var arr = [];
    for (var j = 0; j < col; j++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      arr.push(chars[randomIndex]);
    }
    result.push(arr);
  }
  return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
