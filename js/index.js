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
// !жалкие попытки отсортировать)))
// let accountList = document.querySelectorAll('.account')
// let accountListArr = Array.prototype.slice.call(accountList)
// accountListArr[0].firstElementChild.innerText = parseInt(
//     accountListArr[0].firstElementChild.innerText
// )
// accountListArr = accountListArr.sort((a, b) => {
//     parseInt(a.firstElementChild.innerText) -
//         parseInt(b.firstElementChild.innerText)
//     console.log(parseInt(a.firstElementChild.innerText))
// })
