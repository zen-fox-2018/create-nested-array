function createNestedArray(jumlahRow, jumlahCol) {
    let board = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < jumlahRow; i++) {
        board.push([]);
        for(let j = 0; j < jumlahCol; j++) {
            let random = alphabet[Math.floor(Math.random()*alphabet.length)];
            board[i].push(random)
        }
    }
    return board
}

console.log(createNestedArray(5, 3))
console.log(createNestedArray(4, 2))