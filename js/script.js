// Espera a que el DOM (estructura HTML) esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // --- Código para la funcionalidad de desplazamiento suave ---
  // Selecciona todos los enlaces internos (los que empiezan con #) dentro de la navegación
  // Esto asegura que solo afecte a los enlaces de scroll, no a enlaces externos o de email
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  // Itera sobre cada enlace encontrado
  navLinks.forEach((link) => {
    // Añade un "escuchador de eventos" para el evento 'click' en cada enlace
    link.addEventListener("click", function (e) {
      // Previene el comportamiento por defecto del enlace (que es saltar instantáneamente a la sección)
      e.preventDefault();

      // Obtiene el objetivo del enlace (el valor del atributo 'href', ej: "#sobre-mi")
      const targetId = this.getAttribute("href");

      // Selecciona el elemento objetivo en la página usando el ID obtenido
      const targetElement = document.querySelector(targetId);

      // Verifica si el elemento objetivo existe
      if (targetElement) {
        // Desplázate suavemente al elemento objetivo
        targetElement.scrollIntoView({
          behavior: "smooth", // Configura el desplazamiento para que sea suave
        });

        // Opcional: Si el menú móvil está abierto, ciérralo después del clic (para mejorar la UX móvil)
        // Este código también está en el bloque 'Cerrar menú al hacer clic en un enlace',
        // pero lo dejamos aquí también por si acaso o si se quiere manejar de forma diferente.
        const navList = document.querySelector("nav ul");
        if (navList.classList.contains("menu-open")) {
          navList.classList.remove("menu-open");
          // Si toggleaste una clase en body o nav, quítala también aquí si aplica
          // document.body.classList.remove('nav-open');
          // document.querySelector('.menu-toggle').classList.remove('is-active');
        }
      }
    });
  });
  // --- Fin código smooth scrolling ---

  // --- Código para la funcionalidad del menú móvil (hamburguesa) ---
  const menuToggle = document.querySelector(".menu-toggle"); // Selecciona el botón de hamburguesa
  const navList = document.querySelector("nav ul"); // Selecciona la lista de menú (el ul)
  const navElement = document.querySelector("nav"); // Selecciona la etiqueta nav completa (útil para togglear clases en el nav)

  // Añade un "escuchador de eventos" para el clic en el botón de hamburguesa
  menuToggle.addEventListener("click", function () {
    // Alterna la clase 'menu-open' en la lista de menú (ul)
    // Esto cambia su display de none a flex (o block) en CSS y viceversa
    navList.classList.toggle("menu-open");

    // Opcional: Alternar una clase en la etiqueta nav o body
    // Útil para cambiar estilos generales cuando el menú está abierto
    // Por ejemplo, para evitar el scroll del body detrás del menú abierto
    // navElement.classList.toggle('nav-open');
    // document.body.classList.toggle('nav-open');
    // menuToggle.classList.toggle('is-active'); // Para animar el ícono de hamburguesa a una 'X' (requiere CSS)
  });

  // Opcional: Cerrar el menú al hacer clic fuera de él (MEJORA DE UX)
  // Añade un escuchador al documento completo
  document.addEventListener("click", function (event) {
    // Verifica si el clic fue DENTRO de la lista del menú O DENTRO del botón toggle
    const isClickInsideNav =
      navList.contains(event.target) || menuToggle.contains(event.target);

    // Si el clic NO fue dentro del nav/toggle Y el menú está abierto
    if (!isClickInsideNav && navList.classList.contains("menu-open")) {
      // Cierra el menú quitando la clase 'menu-open'
      navList.classList.remove("menu-open");
      // Si toggleaste una clase en nav/body/toggle, quítala también aquí
      // navElement.classList.remove('nav-open');
      // document.body.classList.remove('nav-open');
      // document.querySelector('.menu-toggle').classList.remove('is-active');
    }
  });

  // Opcional: Cerrar el menú al hacer clic en un enlace dentro de él (MEJORA DE UX EN MÓVIL)
  // Selecciona todos los enlaces DENTRO de la lista del menú móvil
  navList.querySelectorAll("a").forEach((link) => {
    // Añade un escuchador de clic a cada enlace de la lista de menú
    link.addEventListener("click", function () {
      // Si el menú está abierto cuando se hace clic en un enlace
      if (navList.classList.contains("menu-open")) {
        // Cierra el menú quitando la clase 'menu-open'
        navList.classList.remove("menu-open");
        // Si toggleaste una clase en nav/body/toggle, quítala también aquí
        // navElement.classList.remove('nav-open');
        // document.body.classList.remove('nav-open');
        // document.querySelector('.menu-toggle').classList.remove('is-active');
      }
      // Nota: El desplazamiento suave ya se maneja en el primer bloque de código
      // y debería funcionar correctamente junto con este cierre del menú.
    });
  });
  // --- Fin código menú móvil ---

  // Opcional: Código para un botón "Volver arriba" (Back to Top)
  // Requeriría añadir un botón HTML al final del body y estilos CSS para mostrarlo/ocultarlo
  // y animarlo. Este es un ejemplo:
  /*
  const backToTopButton = document.getElementById('back-to-top'); // Necesitas un <button id="back-to-top"> en tu HTML

  window.addEventListener('scroll', function() {
      // Muestra el botón si el scroll es mayor a 100px (o el valor que quieras)
      if (window.scrollY > 100) {
          backToTopButton.style.display = 'block'; // O cambia una clase CSS
      } else {
          backToTopButton.style.display = 'none'; // O cambia una clase CSS
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Desplazamiento suave hacia arriba
      });
  });
  */

  // Cierre de la función DOMContentLoaded (asegúrate de que todo el código JS está dentro de esta llave)
});
