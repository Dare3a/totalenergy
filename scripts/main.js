"use strict";

//navigacija
function toggleDropdown(event, id) {
    event.stopPropagation();
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dropdown => {
        if (dropdown.id !== id) {
            dropdown.classList.remove('show');
        }
    });
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('show');
}

function toggleMobileMenu() {
    const menu = document.querySelector('.nav-container > ul');
    menu.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dropdown => dropdown.classList.remove('show'));

    const mobileMenu = document.querySelector('.nav-container > ul');
    if (!event.target.closest('nav') && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});
//kraj navigacije

