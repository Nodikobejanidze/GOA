
const { greet, calculateAverage } = require('./Functions');


const greeting = greet('Nika');
console.log(greeting); // "Hello, Nika!"


const numbers = [5, 10, 15, 20];
const average = calculateAverage(numbers);
console.log(`The average is: ${average}`); // "The average is: 12.5"
