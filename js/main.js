"use strict"

//FILTER
const filterBox = document.querySelectorAll('._filter-item');

document.querySelector('.searchedFeed__filter').addEventListener('click', event => {
    if(event.target.querySelectorAll !== '.searchedFeed__filter__item') return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass);

    filterBox.forEach( elem => {
        elem.classList.remove('_filter-hide');
        if (!elem.classList.contains(fiterClass) && filterClass != 'all'){
            elem.classList.add('_filter-hide');
        }
    })
});
//FORM VALID
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._required');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if(input.classList.contains('_phoneNumber')){
                if (phoneNumberTest(input)){
                    formAddError(input);
                    error++
                }
            }else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //EMAIL TEST
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    //PHONE NUMBER TEST
    function phoneNumberTest(input){
        return !/^\d[\d\(\)\ -]{4,12}\d$/.test(input.value);
    }
})

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
AOS.init();