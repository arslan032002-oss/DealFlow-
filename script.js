const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

burgerBtn.addEventListener('click', () => {

    // Menýuny açýar ýa-da ýapýar
    navMenu.classList.toggle('active');
    
    // Burger düwmesiniň animasiýasy (islege görä)
    burgerBtn.classList.toggle('toggle');
});
