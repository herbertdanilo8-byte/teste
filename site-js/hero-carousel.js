/* ============================================================
   KM DELIVERY – HERO CAROUSEL JS
   ============================================================ */

(function () {
  'use strict';

  const AUTO_INTERVAL = 5000;
  const PROGRESS_TICK = 50;

  const slides   = document.querySelectorAll('.hc-slide');
  const thumbs   = document.querySelectorAll('.hc-thumb');
  const btnPrev  = document.getElementById('hcPrev');
  const btnNext  = document.getElementById('hcNext');
  const progressFill = document.getElementById('hcProgressFill');

  if (!slides.length) return;

  let current    = 0;
  let autoTimer  = null;
  let progTimer  = null;
  let progValue  = 0;
  let isAnimating = false;

  function goTo(next) {
    if (isAnimating || next === current) return;
    isAnimating = true;

    const prev = current;
    current = (next + slides.length) % slides.length;

    slides[prev].classList.remove('hc-active');
    slides[prev].classList.add('hc-prev');
    pauseVideo(slides[prev]);

    slides[current].classList.add('hc-active');
    slides[current].classList.remove('hc-prev');
    playVideo(slides[current]);

    // atualiza miniaturas
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === current);
      t.style.setProperty('--thumb-progress', '0%');
    });

    setTimeout(() => {
      slides[prev].classList.remove('hc-prev');
      isAnimating = false;
    }, 950);

    resetProgress();
  }

  function nextSlide() { goTo(current + 1); }
  function prevSlide() { goTo(current - 1); }

  function playVideo(slide) {
    const v = slide.querySelector('.hc-video');
    if (v) { v.currentTime = 0; v.play().catch(() => {}); }
  }

  function pauseVideo(slide) {
    const v = slide.querySelector('.hc-video');
    if (v) v.pause();
  }

  function startAuto() {
    stopAuto();
    resetProgress();

    autoTimer = setInterval(nextSlide, AUTO_INTERVAL);

    progTimer = setInterval(() => {
      progValue += (PROGRESS_TICK / AUTO_INTERVAL) * 100;
      const pct = Math.min(progValue, 100) + '%';

      // barra global
      if (progressFill) progressFill.style.width = pct;

      // barra dentro da miniatura ativa
      const activeThumb = thumbs[current];
      if (activeThumb) activeThumb.style.setProperty('--thumb-progress', pct);
    }, PROGRESS_TICK);
  }

  function stopAuto() {
    clearInterval(autoTimer);
    clearInterval(progTimer);
  }

  function resetProgress() {
    progValue = 0;
    if (progressFill) progressFill.style.width = '0%';
    thumbs.forEach(t => t.style.setProperty('--thumb-progress', '0%'));
  }

  if (btnNext) btnNext.addEventListener('click', () => { nextSlide(); stopAuto(); startAuto(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { prevSlide(); stopAuto(); startAuto(); });

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      goTo(parseInt(thumb.dataset.slide, 10));
      stopAuto(); startAuto();
    });
  });

  // Swipe mobile
  let touchStartX = 0;
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    heroSection.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) < 50) return;
      diff > 0 ? nextSlide() : prevSlide();
      stopAuto(); startAuto();
    }, { passive: true });
    heroSection.addEventListener('mouseenter', stopAuto);
    heroSection.addEventListener('mouseleave', startAuto);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopAuto(); pauseVideo(slides[current]); }
    else { playVideo(slides[current]); startAuto(); }
  });

  function init() {
    slides.forEach((s, i) => {
      s.classList.remove('hc-active', 'hc-prev');
      if (i === 0) { s.classList.add('hc-active'); playVideo(s); }
      else pauseVideo(s);
    });
    thumbs.forEach((t, i) => t.classList.toggle('active', i === 0));
    startAuto();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();

(function () {
  'use strict';

  /* ── CONFIGURAÇÃO ── */
  const AUTO_INTERVAL = 5000;   // ms entre slides automáticos
  const PROGRESS_TICK = 50;     // ms de atualização da barra de progresso

  /* ── ELEMENTOS ── */
  const slides       = document.querySelectorAll('.hc-slide');
  const dots         = document.querySelectorAll('.hc-dot');
  const btnPrev      = document.getElementById('hcPrev');
  const btnNext      = document.getElementById('hcNext');
  const progressFill = document.getElementById('hcProgressFill');

  if (!slides.length) return; // sair se a seção não existir

  /* ── ESTADO ── */
  let current    = 0;
  let autoTimer  = null;
  let progTimer  = null;
  let progValue  = 0;
  let isAnimating = false;

  /* ─────────────────────────────────────────
     FUNÇÕES PRINCIPAIS
  ───────────────────────────────────────── */

  /**
   * Vai para o slide de índice `next`.
   */
  function goTo(next) {
    if (isAnimating || next === current) return;
    isAnimating = true;

    const prev = current;
    current = (next + slides.length) % slides.length;

    /* Remove active do slide anterior, marca como "saindo" */
    slides[prev].classList.remove('hc-active');
    slides[prev].classList.add('hc-prev');

    /* Pausa vídeo do slide anterior */
    pauseVideo(slides[prev]);

    /* Ativa slide novo */
    slides[current].classList.add('hc-active');
    slides[current].classList.remove('hc-prev');
    playVideo(slides[current]);

    /* Atualiza dots */
    dots.forEach((d, i) => d.classList.toggle('active', i === current));

    /* Limpa classe "prev" após a transição acabar */
    setTimeout(() => {
      slides[prev].classList.remove('hc-prev');
      isAnimating = false;
    }, 950); // deve ser >= transition do CSS

    /* Reinicia barra de progresso */
    resetProgress();
  }

  function nextSlide() { goTo(current + 1); }
  function prevSlide() { goTo(current - 1); }

  /* ─────────────────────────────────────────
     VÍDEO
  ───────────────────────────────────────── */

  function playVideo(slide) {
    const v = slide.querySelector('.hc-video');
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }

  function pauseVideo(slide) {
    const v = slide.querySelector('.hc-video');
    if (v) v.pause();
  }

  /* ─────────────────────────────────────────
     AUTO-PLAY + BARRA DE PROGRESSO
  ───────────────────────────────────────── */

  function startAuto() {
    stopAuto();
    resetProgress();

    autoTimer = setInterval(() => {
      nextSlide();
    }, AUTO_INTERVAL);

    /* Atualiza barra de progresso a cada tick */
    progTimer = setInterval(() => {
      progValue += (PROGRESS_TICK / AUTO_INTERVAL) * 100;
      if (progressFill) {
        progressFill.style.width = Math.min(progValue, 100) + '%';
      }
    }, PROGRESS_TICK);
  }

  function stopAuto() {
    clearInterval(autoTimer);
    clearInterval(progTimer);
    autoTimer = null;
    progTimer = null;
  }

  function resetProgress() {
    progValue = 0;
    if (progressFill) progressFill.style.width = '0%';
  }

  /* ─────────────────────────────────────────
     EVENTOS
  ───────────────────────────────────────── */

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      nextSlide();
      stopAuto();
      startAuto(); // reinicia timer após interação manual
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      prevSlide();
      stopAuto();
      startAuto();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.slide, 10);
      goTo(idx);
      stopAuto();
      startAuto();
    });
  });

  /* Swipe/touch no mobile */
  let touchStartX = 0;
  let touchEndX   = 0;
  const heroSection = document.querySelector('.hero-section');

  if (heroSection) {
    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) < 50) return; // movimento muito pequeno, ignora
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    stopAuto();
    startAuto();
  }

  /* Pausa o auto-play ao passar o mouse sobre o hero */
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAuto);
    heroSection.addEventListener('mouseleave', startAuto);
  }

  /* Pausa quando a aba fica inativa (performance) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAuto();
      pauseVideo(slides[current]);
    } else {
      playVideo(slides[current]);
      startAuto();
    }
  });

  /* ─────────────────────────────────────────
     INICIALIZAÇÃO
  ───────────────────────────────────────── */

  function init() {
    /* Garante que apenas o primeiro slide está ativo */
    slides.forEach((s, i) => {
      s.classList.remove('hc-active', 'hc-prev');
      if (i === 0) {
        s.classList.add('hc-active');
        playVideo(s);
      } else {
        pauseVideo(s);
      }
    });

    dots.forEach((d, i) => d.classList.toggle('active', i === 0));

    startAuto();
  }

  /* Garante que o DOM está pronto */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
