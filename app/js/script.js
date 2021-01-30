const hamburgerMenu = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');



hamburgerMenu.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElements.forEach(function (fadeElement) {
            fadeElement.classList.remove('fade-in');
            fadeElement.classList.add('fade-out');
        });
        body.classList.remove('noscroll');



    } else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function(fadeElements){
            fadeElements.classList.remove('fade-out');
            fadeElements.classList.add('fade-in');

        })

    }
})