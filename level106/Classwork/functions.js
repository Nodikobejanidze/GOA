// functions.js


function greet(name) {
    return `Hello, ${name}!`;
}


function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}


module.exports = { greet, calculateAverage };
