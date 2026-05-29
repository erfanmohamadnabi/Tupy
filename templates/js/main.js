// Mobile Menu Script


// * Open Menu

document.querySelector('.mobile-menu-btn').onclick = () => {
    document.querySelector('.mobile-menu').style.left = '0';
    document.querySelector('.overflow').style.display = 'flex';
}

// * Close Menu

document.querySelector('.overflow').onclick = function () {

    document.querySelector('.mobile-menu').style.left = '-100%';

    setTimeout(() => {
        this.style.display = 'none';
    }, 100);

}

document.querySelector('.mobile-menu-close').onclick = function () {

    document.querySelector('.mobile-menu').style.left = '-100%';

    setTimeout(() => {
        document.querySelector('.overflow').style.display = 'none';
    }, 100);

}