// Espera a que el DOM (estructura HTML) esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces dentro de la navegación
  const navLinks = document.querySelectorAll("nav ul li a");

  // Itera sobre cada enlace
  navLinks.forEach((link) => {
    // Añade un "escuchador de eventos" para el clic en cada enlace
    link.addEventListener("click", function (e) {
      // Previene el comportamiento por defecto del enlace (que es saltar instantáneamente)
      e.preventDefault();

      // Obtiene el objetivo del enlace (el ID de la sección, ej: #sobre-mi)
      const targetId = this.getAttribute("href");

      // Selecciona el elemento objetivo en la página
      const targetElement = document.querySelector(targetId);

      // Verifica si el elemento objetivo existe
      if (targetElement) {
        // Desplázate suavemente al elemento objetivo
        targetElement.scrollIntoView({
          behavior: "smooth", // Hace el desplazamiento suave
        });
      }
    });
  });
});
