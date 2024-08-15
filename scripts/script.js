var menu = document.getElementById('mobile-menu');
let items = document.querySelectorAll('.slider-item')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
let active = 3;
var menuButton = document.getElementById('mobile-menu-button');
const mainElement = document.querySelector('main')
const htmlElement = document.querySelector('html');
const infiniteCarousel = document.querySelector('.ref-slider')
const carouselItems = document.querySelectorAll('.ref-slider-item')

// Eventos de scrollagem na página

window.addEventListener("scroll", () => {
    
    // Ao sair da seção introdução
    const nav = document.querySelector('nav')
    const logo = document.querySelector('#logo')
    const definicaoTitulo = document.querySelector('.definicao h1')
    nav.classList.toggle('rolagem', window.scrollY > 400)
    logo.classList.toggle('rolagem', window.scrollY > 400)
    definicaoTitulo.classList.toggle('visivel', window.scrollY > 400)
    menu.classList.toggle('menu-backgroundcolor', window.scrollY > 400)

    //Indicativo de qual página estou no menu mobile

    const linkDefinicao = document.querySelector('#a-definicao')
    const linkOrigem = document.querySelector('#a-origem')
    const linkBrasil = document.querySelector('#a-brasil')
    const linkReferencias = document.querySelector('#a-referencias')
    linkDefinicao.classList.toggle('pagAtual', window.scrollY > 400 && window.scrollY < 1500)
    linkOrigem.classList.toggle('pagAtual', window.scrollY > 1500 && window.scrollY < 2500)
    linkBrasil.classList.toggle('pagAtual', window.scrollY > 2500 && window.scrollY < 3800)   
    linkReferencias.classList.toggle('pagAtual', window.scrollY > 3800)
})

// Função que carrega o slider de cards

function loadShow() {
    let stt = 0;
    let scale = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none'
    items[active].style.opacity = 1;

        for (var i = active + 1; i < items.length; i++) {
            stt++;
            if(window.matchMedia("(min-width: 820px)").matches)
                scale = 1 - 0.2 * stt;
            else
                scale = 1 - 0.5 * stt;

            items[i].style.transform = `translateX(${120 * stt}px) scale(${scale}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = 0;
            items[i].style.filter = 'blur(5px)'
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (var i = active - 1; i >= 0; i--) {
            stt++;
            if(window.matchMedia("(min-width: 820px)").matches)
                scale = 1 - 0.2 * stt;
            else
                scale = 1 - 0.5 * stt;

            items[i].style.transform = `translateX(${-120 * stt}px) scale(${scale}) perspective(16px) rotateY(1deg)`;
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

// Menu estilo hambúrguer para telas mobile

function abreFechaMenu() {
    if(menu.classList.contains('mobile-menu-closed')){
        menu.classList.remove('mobile-menu-closed')
        menu.classList.add('mobile-menu-open')
        mainElement.classList.toggle('menu-opened')
        htmlElement.classList.toggle('menu-opened')
        menuButton.innerHTML = '&#10005'
    }
    else {
        menu.classList.remove('mobile-menu-open')
        menu.classList.add('mobile-menu-closed')
        mainElement.classList.toggle('menu-opened')
        htmlElement.classList.toggle('menu-opened')
        menuButton.innerHTML = '&#9776'
    }
}

menuButton.addEventListener('click', abreFechaMenu)

let botoesMenu = document.querySelectorAll('.mobile-menu-a')

for (botaoMenu of botoesMenu) {
    botaoMenu.addEventListener('click', abreFechaMenu)
}


// Carrossel infinito

carouselItems.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    infiniteCarousel.appendChild(duplicatedItem);
    infiniteCarousel.style.animation = 'move 18s linear infinite'
})