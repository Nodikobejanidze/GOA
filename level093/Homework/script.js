const form = document.querySelector('form');
const ul = document.getElementById("Add Task");

let index = 0;

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const item = form.item.value;
    ul.innerHTML += `<li id=${index}>${item}</li>`
    index++;
})

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})