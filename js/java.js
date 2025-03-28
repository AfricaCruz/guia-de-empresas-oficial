// Script para el slider de imágenes
const images = document.querySelectorAll('.slider-image');
let currentImage = 0;

function nextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos

// Script para insertar el texto del enlace copiando el contenido href
const webLink = document.getElementById('company-web');
if (webLink) {
    webLink.textContent = webLink.href;
}

// Buscador index principal
function searchCategories() {
    let input = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll('.category-item');

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "flex" : "none";
        if (text.includes(input)) {
            item.style.flexDirection = "column"; // Asegura que se vea bien
        }
    });
}

// Buscador diferentes categorías
function searchBusinesses() {
    let input = document.getElementById('search').value.toLowerCase();
    let businessCards = document.querySelectorAll('.business-card');

    businessCards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "flex" : "none";
    });
}

// Función debounce para optimizar el buscador y evitar múltiples ejecuciones innecesarias
function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(), delay);
    };
}

document.getElementById('search').addEventListener('keyup', debounce(searchBusinesses, 300));

// JavaScript para añadir la clase 'active' poco a poco a cada categoría
window.addEventListener("load", function () {
    const categories = document.querySelectorAll('.category');
    let delay = 500;

    // --- Política de Cookies ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    if (!cookieBanner || !acceptButton || !rejectButton) {
        console.error("Los elementos de consentimiento de cookies no se encuentran.");
        return;
    }

    const cookiePreference = localStorage.getItem('cookiePreference');
    console.log("Preferencia de cookies guardada:", cookiePreference);

    if (cookiePreference === 'accepted' || cookiePreference === 'rejected') {
        cookieBanner.style.display = 'none'; // Ocultar si ya se aceptaron/rechazaron
    } else {
        cookieBanner.style.display = 'flex'; // Mostrar si no hay preferencia guardada
    }

    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'accepted');
        cookieBanner.style.display = 'none';
        console.log("Cookies aceptadas");
    });

    rejectButton.addEventListener('click', function () {
        localStorage.setItem('cookiePreference', 'rejected');
        cookieBanner.style.display = 'none';
        console.log("Cookies rechazadas");
    });

    // --- Funcionalidad de Búsqueda ---
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
