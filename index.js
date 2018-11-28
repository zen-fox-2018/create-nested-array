//your code here
function nestedArray(row, col) {
    let temp = []
    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < row; i++) {
        let inner = []
        for(let i = 0; i < col; i++) {
            let random = Math.floor(Math.random() * alfabet.length)
            inner.push(alfabet[random])
        }
        temp.push(inner)
    }
    return temp
}

// console.log(nestedArray(5, 5))
// console.log(nestedArray(3, 6))
// console.log(nestedArray(2, 4))