// Selecciona todos los elementos con la clase .swiper
const swipers = document.querySelectorAll('.swiper');

// Recorre cada swiper y lo inicializa
swipers.forEach((swiperEl, index) => {
  const swiper = new Swiper(swiperEl, {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });

  // Buscar los botones de pausa y play dentro del swiper actual
  const pauseBtn = swiperEl.querySelector('#pauseBtn');
  const playBtn = swiperEl.querySelector('#playBtn');

  if (pauseBtn && playBtn) {
    pauseBtn.addEventListener('click', () => {
      swiper.autoplay.stop();
      pauseBtn.classList.add('hidden');
      playBtn.classList.remove('hidden');
    });

    playBtn.addEventListener('click', () => {
      swiper.autoplay.start();
      playBtn.classList.add('hidden');
      pauseBtn.classList.remove('hidden');
    });
  }
});
