//your code here
function createNestedArray(row,col){
    var output=[]
    for(let i=0; i < row; i++){
        let outputDalam =[]
        for(let j=0; j < col; j++){
            let randomString = String.fromCharCode(~~((Math.random() * 26 ) + 65))
            outputDalam.push(randomString.toLowerCase())
        }
        output.push(outputDalam)
    }
    return output
}

console.log(createNestedArray(5,3))