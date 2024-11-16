let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let reset = document.getElementById('reset')
let label = document.getElementById('displayNum')

let count = 1
let label1 = 0
plus.addEventListener('click', function() {
    label.textContent = label1 += count
})

minus.addEventListener('click', function() {
    label.textContent = label1 -= count
})

reset.addEventListener('click', function() {
    label1 = 0
    count = 1 
    label.innerHTML = label1
})