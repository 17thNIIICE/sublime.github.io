//POPUP-WINDOW'es
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeout = 700;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        }) 
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup__button');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++){
    const element = popupCloseIcon[index];
    element.addEventListener('click', function (e) {
            popupClose(element.closest('.popup-window'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock){
        const popupActive = document.querySelector('.popup-window.open');
        if (popupActive) {
                popupClose(popupActive, false);
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup-window__content')) {
                popupClose(e.target.closest('.popup-window'));
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
    }
}
document.addEventListener('keydown', function (e){
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup-window.open');
        popupClose(popupActive);
    }
})