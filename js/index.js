const contactBtn = document.getElementById('contactBtn')
const contactInfo = document.getElementById('contactInfo')
const container = document.getElementById('container')

contactBtn.addEventListener('click', () => {
    contactInfo.classList.toggle('active')
})

container.addEventListener('click', () => {
    if (contactInfo.classList.contains('active')) {
        contactInfo.classList.remove('active')
    }
})
