
function calc(num1,num2,op){
    switch (operation) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return "invaild"
    }   
}

const filter = (arr, callback) => {
    let resArr = [];

    for(const value of arr){
        if(callback(value)) {
            resArr.push(value);
        }
    }
    return resArr;
}

export {calculator, filter};