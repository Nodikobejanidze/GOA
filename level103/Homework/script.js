const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nodikoArr = []
for (let i of arr){
    if(i % 2 == 1){
        nodikoArr.push(i)
    }
}
console.log(nodikoArr)
