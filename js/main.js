var swiper = new Swiper(".slider", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   keyboard : {enabled: true},
   simulateTouch : true,
   touchRatio : 1,
   grabCurcor : true,
   slideToClickedSlide: true,
   watchOwerfow: true,
   slidePerGroupe: 3,
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
 
