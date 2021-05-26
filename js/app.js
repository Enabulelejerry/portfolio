var nav = document.querySelector('.links-container')
const toggle = document.getElementById('menu-toggle');


toggle.addEventListener('click', function () {

    if (nav.classList.contains('appear')) {
        nav.classList.remove('appear');
    } else {
        nav.classList.add('appear');
    }

})