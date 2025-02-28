const textEl = document.querySelector('.paragraph')
textEl.innerHTML = '<b>Hello, World!</b>'

// common way
const handleClick = () => {
    textEl.insertAdjacentHTML('beforeend', '<b>Goodbye, World!</b>')
}

textEl.addEventListener('click', handleClick)


// way 2
/*textEl.addEventListener('click', function () {
    textEl.insertAdjacentHTML("beforeend", "<b>Goodbye, World!</b>")
})*/

// way 3
/*
textEl.addEventListener('click', () => {
    textEl.insertAdjacentHTML("beforeend", "<b>Goodbye, World!</b>")
})*/

// manipulating CSS

// Go write directly in the CSS file a special class

textEl.classList.add('text--special')

