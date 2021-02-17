const contactBtn = document.getElementById('contactBtn')
const contactInfo = document.getElementById('contactInfo')

contactBtn.addEventListener('click', () => {
    contactInfo.classList.toggle('active')
})
