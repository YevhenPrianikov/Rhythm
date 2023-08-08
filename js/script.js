"use strict"

// Делаем константу
const reviewsSwiper = document.querySelector('.swiper-reviews');

// Проверям есть ли reviewsSwiper
if (reviewsSwiper) {
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        autoHeight: true,
        // autoHeight: true - автоматически изменяет высоту в зависимости от количества контента
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // clickable: true - что бы можно было кликать по копкам
        },
    });
}


// Это всё берём прям тут: https://swiperjs.com/get-started

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // // Navigation arrows
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
  
//     // // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });
  