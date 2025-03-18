function modal() {
    const buyBtn = document.querySelector('.buy__btn-more');
    const modal = document.querySelector('.buyModal');
    const closeBtn = document.querySelector('.buyModal__close');

    buyBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.querySelector('body').style.overflow = 'auto';

    });
}

export default modal;