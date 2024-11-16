let myBtn = document.getElementById('click-me')

myBtn.addEventListener('mouseover', function() {
    myBtn.style.background = 'green'
    myBtn.style.width = '150px'
    myBtn.style.height = '150px'
    myBtn.style.color = 'white'
})

myBtn.addEventListener('mouseout', function() {
    myBtn.style.background = 'grey'
    myBtn.style.width = '50px'
    myBtn.style.height = '50px'
    myBtn.style.color = 'black'
})




