//your code 

function NestedArray(nRow, nCol) {
    let arrOutput = []

    for (let i = 0; i < nRow; i++) {
        let arrRow = []

        for (let j = 0; j < nCol; j++){
            arrRow.push(String.fromCharCode(Math.floor(Math.random()*26)+65).toLowerCase())
        }
        arrOutput.push(arrRow)
    }

    return arrOutput
}

console.log(NestedArray(5, 3))

console.log(NestedArray(4, 2))