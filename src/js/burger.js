function burger() {
    //----------создание бургер кнопки-----------//
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    });

    //--------------бургер меню------------------//

    const burgerMenu = document.querySelector('.burgerMenu-wrapper');
    const burgerMenuBtn = document.querySelector('.burger');
    const burgerMenuClose = document.querySelector('.burgerMenu__close');

    burgerMenuBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('burgerMenu-wrapper-active');
        document.querySelector('body').style.overflow = 'hidden';
    });

    burgerMenuClose.addEventListener('click', () => {
        burgerMenu.classList.remove('burgerMenu-wrapper-active');
        document.querySelector('body').style.overflow = 'auto';
    });

}

export default burger;
