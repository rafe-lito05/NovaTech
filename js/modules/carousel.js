export function initHeaderCarousel() {
  const headerSlides = document.querySelectorAll(".header-slide");
  const headerTitles = [
    "Tecnología para el futuro",
    "Innovación a tu alcance",
    "Potencia tu productividad",
  ];
  const headerSubtitles = [
    "Descubre los mejores productos electrónicos al mejor precio",
    "Equipos de última generación para todas tus necesidades",
    "Herramientas diseñadas para maximizar tu eficiencia",
  ];
  const headerTitle = document.querySelector(".header-title");
  const headerSubtitle = document.querySelector(".header-subtitle");
  let currentHeaderSlide = 0;

  function showHeaderSlide(n) {
    headerSlides.forEach((slide) => slide.classList.remove("active"));
    currentHeaderSlide = (n + headerSlides.length) % headerSlides.length;
    headerSlides[currentHeaderSlide].classList.add("active");

    // Cambiar las frases
    headerTitle.style.opacity = 0;
    headerSubtitle.style.opacity = 0;

    setTimeout(() => {
      headerTitle.textContent = headerTitles[currentHeaderSlide];
      headerSubtitle.textContent = headerSubtitles[currentHeaderSlide];
      headerTitle.style.opacity = 1;
      headerSubtitle.style.opacity = 1;
    }, 500);
  }

  // Auto avanzar el carrusel del header
  const headerInterval = setInterval(() => {
    showHeaderSlide(currentHeaderSlide + 1);
  }, 5000);

  // Carrusel de productos en promoción
  const promoSlides = document.querySelectorAll(".promo-slide");
  const promoPrev = document.querySelector(".promo-prev");
  const promoNext = document.querySelector(".promo-next");
  let currentPromoSlide = 0;

  function showPromoSlide(n) {
    promoSlides.forEach((slide) => slide.classList.remove("active"));
    currentPromoSlide = (n + promoSlides.length) % promoSlides.length;
    promoSlides[currentPromoSlide].classList.add("active");
  }

  if (promoPrev && promoNext) {
    promoPrev.addEventListener("click", () => {
      showPromoSlide(currentPromoSlide - 1);
    });

    promoNext.addEventListener("click", () => {
      showPromoSlide(currentPromoSlide + 1);
    });

    // Auto avanzar el carrusel de promociones
    const promoInterval = setInterval(() => {
      showPromoSlide(currentPromoSlide + 1);
    }, 6000);
  }

  // Mostrar el primer slide al cargar
  showHeaderSlide(0);
  if (promoSlides.length > 0) {
    showPromoSlide(0);
  }

  // Limpiar intervalos al salir de la página (opcional)
  window.addEventListener("beforeunload", () => {
    clearInterval(headerInterval);
    if (promoInterval) clearInterval(promoInterval);
  });
}
