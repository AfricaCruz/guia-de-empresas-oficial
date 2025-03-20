window.addEventListener("load", function () {
    // Verifica si el DOM se ha cargado correctamente
    console.log("DOM completamente cargado");

    // --- Política de Cookies ---
    const cookieBanner = document.getElementById('cookie-banner'); // Corregido: cookie-consent -> cookie-banner
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Verificar si los elementos existen en el DOM
    console.log("cookieBanner:", cookieBanner);
    console.log("acceptButton:", acceptButton);
    console.log("rejectButton:", rejectButton);

    // Comprobar si los elementos fueron encontrados
    if (!cookieBanner || !acceptButton || !rejectButton) {
        console.error("Los elementos de consentimiento de cookies no se encuentran.");
        return; // Salir si no se encuentran los elementos
    }

    // Comprobar si el usuario ya ha aceptado o rechazado las cookies
    const cookiePreference = localStorage.getItem('cookiePreference');
    console.log("Preferencia de cookies guardada:", cookiePreference);

    if (!cookiePreference) {
        // Si no hay preferencia guardada, mostrar el aviso
        cookieBanner.style.display = 'flex'; // Ajustado a 'flex' para que coincida con tu CSS
    } else {
        // Si ya se ha aceptado o rechazado las cookies, no mostrar el aviso
        cookieBanner.style.display = 'none';
    }

    // Aceptar cookies
    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'accepted');
        cookieBanner.style.display = 'none';
        console.log("Cookies aceptadas");
        // Aquí puedes agregar código para activar cookies de seguimiento (por ejemplo, Google Analytics)
    });

    // Rechazar cookies
    rejectButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'rejected');
        cookieBanner.style.display = 'none';
        console.log("Cookies rechazadas");
        // Aquí puedes desactivar cookies no esenciales
    });

    // --- Funcionalidad de Búsqueda ---
    // Función para buscar categorías
    window.searchCategories = function () {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const categories = document.querySelectorAll('.category-item');

        categories.forEach(category => {
            const categoryName = category.querySelector('h2').textContent.toLowerCase();
            if (categoryName.includes(searchInput)) {
                category.style.display = 'block'; // Mostrar categoría
                category.classList.add('active'); // Añadir clase active para animación (si es necesario)
            } else {
                category.style.display = 'none'; // Ocultar categoría
                category.classList.remove('active');
            }
        });
    };
});