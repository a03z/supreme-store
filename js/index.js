const cardMethod = document.getElementById('method-card')
const gmoneyMethod = document.getElementById('method-gmoney')
const btcMethod = document.getElementById('method-btc')
cardMethod.addEventListener('click', () => {
    cardMethod.classList.add('order-active')
    gmoneyMethod.classList.remove('order-active')
    btcMethod.classList.remove('order-active')
})
btcMethod.addEventListener('click', () => {
    btcMethod.classList.add('order-active')
    gmoneyMethod.classList.remove('order-active')
    cardMethod.classList.remove('order-active')
})
gmoneyMethod.addEventListener('click', () => {
    gmoneyMethod.classList.add('order-active')
    btcMethod.classList.remove('order-active')
    cardMethod.classList.remove('order-active')
})

var swiper = new Swiper('.swiper-container', {
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    loop: true,
})
