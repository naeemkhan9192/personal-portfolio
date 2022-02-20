// console.log('Personal porfolio Site');

// setting the date for the Copy Right

let date = document.querySelector('.date');
let upDate = new Date().getFullYear();
date.innerHTML = upDate

// Takin the size of the page
window.addEventListener('DOMContentLoaded', () => {
    // console.log('Hello');
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
// console.log(scrollUp);

window.addEventListener('scroll', (e) => {
    // console.log('Event fired');
    let scrolly = pageYOffset;
    // console.log(scrolly);
    let navbar = document.querySelector('.navbar');
    // 77
    if (scrolly > 21) {
        navbar.style.backgroundColor = 'hsl(205deg 86% 17% / 32%)';
    }
    else {
        navbar.style.backgroundColor = 'var(--clr-primary-1)';
    }
    // class="scroll-up"
    if (scrolly > 508) {
        scrollUp.classList.add('scroll-up');
        scrollUp.style.display = "block";
    }
    else {
        scrollUp.classList.remove('scroll-up');
        scrollUp.style.display = "none";
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
    // console.log('NAV MENU');

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