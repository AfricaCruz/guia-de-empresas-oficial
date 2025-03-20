window.addEventListener("load", function () {
    // Verifica si el DOM se ha cargado correctamente
    console.log("DOM completamente cargado");

    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Verificar si los elementos existen en el DOM
    console.log("cookieConsent:", cookieConsent);
    console.log("acceptButton:", acceptButton);
    console.log("rejectButton:", rejectButton);

    // Comprobar si los elementos fueron encontrados
    if (!cookieConsent || !acceptButton || !rejectButton) {
        console.error("Los elementos de consentimiento de cookies no se encuentran.");
        return; // Salir si no se encuentran los elementos
    }

    // Comprobar si el usuario ya ha aceptado o rechazado las cookies
    const cookiePreference = localStorage.getItem('cookiePreference');
    console.log("Preferencia de cookies guardada:", cookiePreference);

    if (!cookiePreference) {
        // Si no hay preferencia guardada, mostrar el aviso
        cookieConsent.style.display = 'block';
    } else {
        // Si ya se ha aceptado o rechazado las cookies, no mostrar el aviso
        cookieConsent.style.display = 'none';
    }

    // Aceptar cookies
    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'accepted');
        cookieConsent.style.display = 'none';
        console.log("Cookies aceptadas");
        // Aquí puedes agregar código para activar cookies de seguimiento (por ejemplo, Google Analytics)
    });

    // Rechazar cookies
    rejectButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'rejected');
        cookieConsent.style.display = 'none';
        console.log("Cookies rechazadas");
        // Aquí puedes desactivar cookies no esenciales
    });
});



