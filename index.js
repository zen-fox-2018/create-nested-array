//your code here

function nestedArray(row,col) {
    let result = []
    for(let i = 0; i < row; i ++){
        let bucket = []
        for(let j =1; j <= col; j ++){
            keyCode = String.fromCharCode(Math.floor(Math.random()*25)+65)
            bucket.push(keyCode.toLowerCase())
        }
        result.push(bucket)
    }
    return result
}
console.log(nestedArray(5,3))
console.log(nestedArray(4,2))