// Navbar transparente no evento de rolagem

window.addEventListener("scroll", () => {
    const nav = document.querySelector('#nav')
    const definicaoTitulo = document.querySelector('.definicao h1')
    nav.classList.toggle('rolagem', window.scrollY > 400)
    definicaoTitulo.classList.toggle('visivel', window.scrollY > 400)
})

// Slider de cards

let items = document.querySelectorAll('.slider-item')
let next = document.getElementById('next')
let previous = document.getElementById('previous')

let active = 3;
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