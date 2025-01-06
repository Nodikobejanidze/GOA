#https://www.codewars.com/kata/5a2be17aee1aaefe2a000151


def function sumOfTwoArrays(arr1, arr2) {    
    const sum1 = arr1.reduce((acc, num) => acc + num, 0);
    const sum2 = arr2.reduce((acc, num) => acc + num, 0);
    return sum1 + sum2;
}


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = sumOfTwoArrays(array1, array2);

console.log(result); 

    