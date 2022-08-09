// for navbar
let ham = document.getElementById('ham');
let nav = document.getElementById('navbar');
let close = document.getElementById('close')

ham.addEventListener('click',() => {
        nav.classList.add('active');
})

close.addEventListener('click',() => {
    nav.classList.remove('active');
})