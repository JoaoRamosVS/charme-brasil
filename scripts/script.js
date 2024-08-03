var menu = document.getElementById('mobile-menu');

// Navbar transparente e outras mudanças no evento de rolagem

window.addEventListener("scroll", () => {
    const nav = document.querySelector('#nav')
    const definicaoTitulo = document.querySelector('.definicao h1')
    nav.classList.toggle('rolagem', window.scrollY > 400)
    definicaoTitulo.classList.toggle('visivel', window.scrollY > 400)
    menu.classList.toggle('menu-backgroundcolor', window.scrollY > 400)
})

let items = document.querySelectorAll('.slider-item')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
let active = 3;

// Função que carrega o slider de cards
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none'
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.5 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = 0;
        items[i].style.filter = 'blur(5px)'
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.5 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = 0;
        items[i].style.filter = 'blur(5px)'
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();

next.onclick = () => {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

previous.onclick = () => {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

var menuButton = document.getElementById('mobile-menu-button');
function abreFechaMenu() {
    if(menu.classList.contains('mobile-menu-closed')){
        menu.classList.remove('mobile-menu-closed')
        menu.classList.add('mobile-menu-open')
    }
    else {
        menu.classList.remove('mobile-menu-open')
        menu.classList.add('mobile-menu-closed')
    }
}
menuButton.addEventListener('click', abreFechaMenu)

let botoesMenu = document.querySelectorAll('.mobile-menu-a')

for (botaoMenu of botoesMenu) {
    botaoMenu.addEventListener('click', abreFechaMenu)
}