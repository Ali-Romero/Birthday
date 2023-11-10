function initSwiperMain() {
  const swiper = new Swiper('.swiper-main', {
    speed: 460,
    effect: 'coverflow',
    slideToClickedSlide: true,
    rewind: true,
    autoplay: {
      delay: 1200,
    },
    pagination: {
      el: '.main-pagination',
      type: 'bullets',
    },
    slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 10,
      depth: 660,
      scale: 0.8,
      modifier: 1,
      slideShadows: false,
    },
    allowTouchMove: true,
  })
}

$(document).ready(function () {
  initSwiperMain()
})
