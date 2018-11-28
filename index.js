function createNestedArr(jumlahRow, jumlahCol) {
    let arr = []
    let arrTemp = []
    const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < jumlahRow; i++) {
        for (let j = 0; j < jumlahCol; j++) {
            arrTemp.push(
                alph[Math.floor(
                    (Math.random() * alph.length )
                )]
            )
        }
        arr.push(arrTemp)
        arrTemp = []

    }
    return arr
}

console.log(createNestedArr(5, 3));
