var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   
   loop: true,
   keyboard : {enabled: true},
   simulateTouch : true,
   touchRatio : 1,
   grabCurcor : true,
   slideToClickedSlide: true,
   watchOwerfow: false,
   // slidePerGroupe: 1,
   // effect: 'flip',
   // flipEffect: {
   //    slideShows: true,
   //    limitRotation: true,
   // },
   // effect: 'fade',
   // fadeEffect: {crossFade: true},
   // centeredSlides: true,


   
   navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
   },
   

 });
 
