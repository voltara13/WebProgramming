import { Swiper, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default new Swiper('.swiper', {
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});