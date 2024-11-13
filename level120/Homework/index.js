// mathUtils.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
module.exports = { add, subtract };

// main.js for Task 1
const { add, subtract } = require('./mathUtils');
console.log('Task 1 - Add:', add(5, 3));
console.log('Task 1 - Subtract:', subtract(5, 3));

// message.js
const greeting = {
    text: "Hello",
    language: "English"
};
module.exports = greeting;

// display.js for Task 2
const greetingMessage = require('./message');
console.log('Task 2 - Greeting Text:', greetingMessage.text);
console.log('Task 2 - Greeting Language:', greetingMessage.language);

// greetings.js
export function sayHello() {
    return "Hello, World!";
}

export function sayGoodbye() {
    return "Goodbye, everyone!";
}

// main.js for Task 3
import { sayHello, sayGoodbye } from './greetings.js';
console.log('Task 3 - sayHello:', sayHello());
console.log('Task 3 - sayGoodbye:', sayGoodbye());

// animals.js
const animal = {
    species: "Tiger",
    sound: "Roar"
};
export default animal;

// zoo.js for Task 4
import animal from './animals.js';
console.log('Task 4 - Species:', animal.species);
console.log('Task 4 - Sound:', animal.sound);

// mathOperations.js
export default function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// calculator.js for Task 5
import add, { subtract } from './mathOperations.js';
console.log('Task 5 - Add:', add(10, 5));
console.log('Task 5 - Subtract:', subtract(10, 5));