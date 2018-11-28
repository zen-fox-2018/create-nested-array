//your code here

function createNestedArr(row,col) {
    let arr = []
    const alphabeth = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0 ; i < row ; i++) {
        let temp = []
        for (let j = 0 ; j < col ; j++) {
            let Random = Math.floor(Math.random()*alphabeth.length)
            temp.push(alphabeth[Random])

        }
        arr.push(temp)
    }
    return arr
}

console.log(createNestedArr(4,2))
console.log('=====================')
console.log(createNestedArr(5,3))