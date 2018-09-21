document.addEventListener('keydown', e => {

    function move(moveBy) {
        const sectionNumber = parseInt((location.hash || '#sek1').substr(4))
        const newId = `sek${sectionNumber + moveBy}`
        if(document.getElementById(newId)) {
            location.hash = `#${newId}`
        }
    }

    if (e.keyCode === 39 || e.keyCode === 32) { //space or right
        move(1)
        e.preventDefault()
    }

    if (e.keyCode === 37 || e.keyCode === 8) { //backspace or left
        move(-1)
        e.preventDefault()
    }

})

Array.prototype.forEach.call(document.querySelectorAll('section > code'), e => {
    e.innerHTML = marked(e.innerHTML)
})