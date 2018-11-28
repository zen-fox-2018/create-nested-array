//your code here
function createNestedArr(jumlahRow, jumlahCol) {
    let output = []
    // let isisnya = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < jumlahRow; i++) {
        let box = []
        for (let j = 0; j < jumlahCol; j++) {
            let isinya = 'abcdefghijklmnopqrstuvwxyz'
            let index = Math.floor(Math.random()*isinya.length)
            box.push(isinya[index])
            
        }
        output.push(box)
    }

    return output
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
