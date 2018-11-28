function nestedArray(row, col) {
    var hasil = []
    for (var i = 0; i < row; i ++){
        var hasilDalam = []
        for (var j = 0; j < col; j++){
            var angka = Math.floor(Math.random() * (90-65) + 65)
            var huruf = String.fromCharCode(angka)
            var hurufKecil = huruf.toLowerCase()
            hasilDalam.push(hurufKecil)
        }
        hasil.push(hasilDalam)
    }
    return hasil
    
}

//testcase
console.log(nestedArray(5,3))
console.log(nestedArray(4,2))
