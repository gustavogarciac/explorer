const rotateButton = document.querySelector('#rotate-button')
const closeButton = document.querySelector('#close-button')
const staticCouch = document.querySelector('.static')
const rotatingCouch = document.querySelector('.rotating')

rotateButton.addEventListener('click', () => {
    staticCouch.style.display = 'none'
    rotatingCouch.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    rotatingCouch.style.display = 'none'
    staticCouch.style.display = 'block'
})