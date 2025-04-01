document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el slider del banner (con autoplay)
  
  const bannerSwiper = new Swiper('.banner-swiper', {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.banner-swiper .swiper-button-next',
          prevEl: '.banner-swiper .swiper-button-prev',
      },
      pagination: {
          el: '.banner-swiper .swiper-pagination',
          clickable: true,
      },
  });
  
  // Inicializar el slider de noticias (sin autoplay y sin paginación)
  const newsSwiper = new Swiper('.news-swiper', {
      loop: true,
      effect: 'fade', // Efecto de transición suave
      fadeEffect: {
          crossFade: true
      },
      // No tiene autoplay ni paginación
  });
  
  // Controles personalizados para el slider de noticias
  const newsPrevBtns = document.querySelectorAll('.news-prev');
  const newsNextBtns = document.querySelectorAll('.news-next');
  
  newsPrevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          newsSwiper.slidePrev();
      });
  });
  
  newsNextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          newsSwiper.slideNext();
      });
  });
  
  // Buscar los botones de pausa y play para el carrusel principal
  const pauseBtn = document.querySelector('#pauseBtn');
  const playBtn = document.querySelector('#playBtn');

  if (pauseBtn && playBtn) {
      pauseBtn.addEventListener('click', () => {
          bannerSwiper.autoplay.stop();
          pauseBtn.classList.add('hidden');
          playBtn.classList.remove('hidden');
      });
      
      playBtn.addEventListener('click', () => {
          bannerSwiper.autoplay.start();
          playBtn.classList.add('hidden');
          pauseBtn.classList.remove('hidden');
      });
  }
  
});