//your code here
function createNestedArr(jumlahRow, jumlahCol) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var result = []

    for (var i = 0; i <= jumlahRow-1; i++) {
        var temp = [];
        for (var j = 0; j <= jumlahCol-1; j++) {
            var indexForAlph = Math.round((Math.random() * 25) + 0 );
            temp.push(alphabet[indexForAlph]);
        }    
        result.push(temp);   
    }
    return result
}
console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))