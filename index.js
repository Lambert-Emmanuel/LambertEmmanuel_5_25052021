const btn = document.querySelectorAll('.btn');
const logo = document.querySelector('.logo');
const cart = document.querySelector('.cart');
const menu_shop = document.querySelector('.menu_shop')

cart.addEventListener('click', () => {
    menu_shop.classList.toggle('active')
    console.log('yes');
});

