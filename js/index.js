let navbar = document.querySelector('.navbar');

// setting the date for the Copy Rights
let date = document.querySelector('.date');
let upDate = new Date().getFullYear();
date.innerHTML = upDate

// Takin the size of the page
window.addEventListener('DOMContentLoaded', () => {
    let pageWidth = window.innerWidth;
    if (pageWidth <= 896) {
        navDisplayNone();
    }
});

/*================================================================
******************************************************************
==================================================================
*/


// Scroll Behaviour

let scrollUp = document.querySelector('.scroll');

window.addEventListener('scroll', (e) => {
    let scrolly = pageYOffset;
    if (scrolly > 403) {
        scrollUp.classList.add('scroll-up');
        scrollUp.style.display = "block";
        navbar.style.backgroundColor = 'hsl(205deg 86% 17% / 32%)';
    }
    else {
        scrollUp.classList.remove('scroll-up');
        scrollUp.style.display = "none";
        navbar.style.backgroundColor = 'var(--clr-primary-1)';

    }
    
});

/*================================================================
******************************************************************
==================================================================
*/

// navMenu setting
let navMenu = document.querySelector('.span');
let navElementContainer = document.querySelector('.navbar-elem-container');

navMenu.addEventListener('click', () => {
    
    if (navElementContainer.style.display == 'none') {
        navDisplayBlock();
    } else {
        navDisplayNone();
    }

});

function navDisplayNone() {
    navElementContainer.style.display = 'none';
    document.querySelector('.navbar').style.height = '50px'
    document.querySelector('.span').innerHTML = '|||';
}

function navDisplayBlock() {
    navElementContainer.style.display = 'block';
    document.querySelector('.navbar').style.height = 'auto';
    document.querySelector('.span').innerHTML = '&Cross;';
    navbar.style.backgroundColor = 'var(--clr-primary-1)';
}
/*================================================================
******************************************************************
==================================================================
*/

// Search Javascript



let searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    searchFunc();
});

let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', ()=>{
    searchFunc();
})

function searchFunc() {
    let inputVal = searchInput.value.toLowerCase();
    let cards = document.getElementsByClassName('cards');
    Array.from(cards).forEach(function (element) {
        let cardsTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardsTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
}