document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Carrusel del header con frases cambiantes
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
  setInterval(() => {
    showHeaderSlide(currentHeaderSlide + 1);
  }, 5000);

  // Efecto de scroll para el header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

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
    setInterval(() => {
      showPromoSlide(currentPromoSlide + 1);
    }, 6000);
  }

  // Smooth scrolling para los enlaces del menú
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Mostrar el primer slide al cargar
  showHeaderSlide(0);
  if (promoSlides.length > 0) {
    showPromoSlide(0);
  }
});
