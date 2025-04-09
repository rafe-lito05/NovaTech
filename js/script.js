// Importar las funciones desde los módulos
import { initHeaderCarousel } from "./modules/carousel.js";
import { initCart } from "./modules/cart.js";

document.addEventListener("DOMContentLoaded", function () {
  // Inicializar carrusel del header
  initHeaderCarousel();

  // Inicializar funcionalidad del carrito
  initCart();

  // Efecto de scroll para el header
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  // Smooth scrolling para los enlaces
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     const targetId = this.getAttribute("href");
  //     if (targetId === "#") return;

  //     const targetElement = document.querySelector(targetId);
  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop - 80,
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // });
});
