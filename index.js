//your code here
function createNestedArr(jumlahRow, jumlahCol){
    //your code here
    let row = []
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<jumlahRow; i++){
        let col = []
        for(let j=0; j<jumlahCol; j++){
            let k = Math.floor(Math.random()*26)
            col.push(kamus[k])
        }
        row.push(col)
    }
    return row
}

console.log(createNestedArr(5,3))