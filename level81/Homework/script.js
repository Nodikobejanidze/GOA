let btn = document.getElementById('btn');
let p2 = document.getElementById('p2');
let body = document.getElementById('body');

let hexSymbol = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', () => {
    let hex = '#';
    for(let i = 0; i < 6; i++) {
        hex += hexSymbol[Math.trunc(Math.random() * hexSymbol.length)];
    }
    p2.textContent = hex;
    document.body.style.background = hex;
});















