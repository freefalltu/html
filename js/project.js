"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows())
    }
}


if (isMobile.any()) {
    document.body.classList.add('__touch')
    let menuArrows = document.querySelectorAll('.header__menu-item-arrow')
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index]
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('__active')
            })
        }
    }
} else {
    document.body.classList.add('__pc')
}

// меню бургер
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.header__menu')
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('__active')
        menuBody.classList.toggle('__active')
    })
}


// прокрутка при клике, код не работает:(((((((((
const menuLinks = document.querySelectorAll('.header__menu-items[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target
        
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault()
        }
    }
}

