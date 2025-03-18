import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';

const swiper = new Swiper('.swiper', {

    modules: [Pagination],

    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

export default swiper
