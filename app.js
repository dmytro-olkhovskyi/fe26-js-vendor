const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const lughtbox = GLightbox();