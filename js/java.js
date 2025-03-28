// Script para el slider de imágenes
const images = document.querySelectorAll('.slider-image');
let currentImage = 0;

function nextImage() {
    if (images.length > 0) {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }
}

if (images.length > 0) {
    setInterval(nextImage, 3000);
}

// Script para insertar el texto del enlace copiando el contenido href
const webLink = document.getElementById('company-web');
if (webLink) {
    webLink.textContent = webLink.href;
}

// Buscador para diferentes categorías
function searchBusinesses() {
    let input = document.getElementById('search');
    if (input) {
        let searchValue = input.value.toLowerCase();
        let businessCards = document.querySelectorAll('.business-card');

        businessCards.forEach(card => {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(searchValue) ? "flex" : "none";
        });
    }
}

// Animación de categorías al cargar la página (para el index)
window.addEventListener("load", function () {
    const categories = document.querySelectorAll('.category-item');
    let delay = 500;

    categories.forEach((category, index) => {
        setTimeout(() => {
            category.classList.add('active');
        }, delay * index);
    });

    // Política de Cookies (solo en index)
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    if (cookieBanner && acceptButton && rejectButton) {
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
    }
});