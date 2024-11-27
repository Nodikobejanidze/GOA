// index.js

const { greet, calculateAverage } = require('./functions');


const greetingMessage = greet('Alex');
console.log(greetingMessage); 


const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log(`Average: ${average}`); 
