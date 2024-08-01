// Navbar transparente no evento de rolagem

window.addEventListener("scroll", () => {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('rolagem', window.scrollY > 400)
})