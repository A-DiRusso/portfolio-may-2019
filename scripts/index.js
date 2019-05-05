const navBar = document.querySelector('[data-nav]');
const projects = document.querySelectorAll('[data-project]')


window.addEventListener('scroll', function() {
    // if at top of the page
    if (window.pageYOffset === 0) {
        navBar.classList.remove('fixed');
    } else {
        navBar.classList.add('fixed')
    }
})


