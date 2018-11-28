function createNestedArray(row, col) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            temp.push(alphabet[Math.floor(Math.random() * alphabet.length)])
        }
        result.push(temp)
    }
    return result
}

console.log(createNestedArray(4, 3));
