export function initCart() {
  let cart = [];
  const cartCount = document.getElementById("cart-count");
  const cartButton = document.getElementById("cart-button");

  // Actualizar contador del carrito
  function updateCartCount() {
    if (cartCount) {
      cartCount.textContent = cart.length;
      cartCount.style.display = cart.length > 0 ? "flex" : "none";
    }
  }

  // Añadir productos al carrito
  function setupAddToCartButtons() {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".product-card");
        if (!productCard) return;

        const product = {
          name: productCard.querySelector("h3").textContent,
          price: productCard.querySelector(".price").textContent,
          image: productCard.querySelector("img").src,
          id: Date.now().toString(),
        };

        cart.push(product);
        updateCartCount();

        // Feedback visual
        const originalText = button.textContent;
        button.textContent = "✓ Añadido";
        button.style.backgroundColor = "var(--success-color)";

        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = "var(--primary-color)";
        }, 2000);
      });
    });
  }

  // Mostrar/ocultar carrito
  function setupCartButton() {
    if (cartButton) {
      cartButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (cart.length === 0) {
          alert("Tu carrito está vacío");
        } else {
          const productList = cart
            .map((item) => `- ${item.name}: ${item.price}`)
            .join("\n");
          alert(
            `Tienes ${cart.length} productos en el carrito:\n\n${productList}`
          );
        }
      });
    }
  }

  // Inicializar todo
  function init() {
    setupAddToCartButtons();
    setupCartButton();
    updateCartCount();
  }

  // Iniciar el carrito
  init();
}
