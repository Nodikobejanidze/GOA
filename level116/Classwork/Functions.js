
function greet(name) {
    return `Hello, ${name}!`;
}


function calculateAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}


module.exports = { greet, calculateAverage };
