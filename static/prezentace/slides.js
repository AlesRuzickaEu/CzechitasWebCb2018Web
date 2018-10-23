(function () {

    function move(moveBy) {
        const sectionNumber = parseInt((location.hash || '#sek1').substr(4))
        const newId = `sek${sectionNumber + moveBy}`
        if (document.getElementById(newId)) {
            location.hash = `#${newId}`
        }
    }

    document.addEventListener('keydown', e => {
        if (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32) { //space or right or down
            move(1)
            e.preventDefault()
        }

        if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 8) { //backspace or left or up
            move(-1)
            e.preventDefault()
        }
    })

    document.addEventListener('mousedown', e => {
        if(e.ctrlKey || e.altKey) {
            return
        }
        if(e.which === 1) {
            move(1)
        } else if(e.which === 3) {
            move(-1)
        }
        e.preventDefault()
    })

    document.addEventListener('contextmenu', e => {
        e.preventDefault()
    })

    Array.prototype.forEach.call(document.querySelectorAll('section'), (e, index) => {
        e.id = `sek${index + 1}`
    })

    Array.prototype.forEach.call(document.querySelectorAll('section > code'), e => {
        e.innerHTML = marked(e.innerHTML)
    })

    
    if(!location.hash) {
        location.hash = '#sek1'
    }

})()