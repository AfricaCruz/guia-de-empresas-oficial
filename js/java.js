// Script para el slider de imágenes
const images = document.querySelectorAll('.slider-image');
let currentImage = 0;

function nextImage() {
    if (images.length > 0) { // Solo ejecuta si hay imágenes
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }
}

if (images.length > 0) {
    setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos si hay imágenes
}

// Script para insertar el texto del enlace copiando el contenido href
const webLink = document.getElementById('company-web');
if (webLink) {
    webLink.textContent = webLink.href;
}

// Buscador para diferentes categorías (si se usa en otras páginas)
function searchBusinesses() {
    let input = document.getElementById('search').value.toLowerCase();
    let businessCards = document.querySelectorAll('.business-card');

    businessCards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "flex" : "none";
    });
}

// Animación de categorías al cargar la página
window.addEventListener("load", function () {
    const categories = document.querySelectorAll('.category-item'); // Cambié '.category' por '.category-item'
    let delay = 500;

    // Añadir clase 'active' con retraso para animación
    categories.forEach((category, index) => {
        setTimeout(() => {
            category.classList.add('active');
        }, delay * index);
    });

    // Política de Cookies
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    if (!cookieBanner || !acceptButton || !rejectButton) {
        console.error("Los elementos de consentimiento de cookies no se encuentran.");
        return;
    }

    const cookiePreference = localStorage.getItem('cookiePreference');
    if (!cookiePreference) {
        cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.style.display = 'none';
    }

    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'accepted');
        cookieBanner.style.display = 'none';
    });

    rejectButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'rejected');
        cookieBanner.style.display = 'none';
    });
});