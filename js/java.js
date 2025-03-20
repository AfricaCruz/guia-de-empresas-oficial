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

    categories.forEach((category, index) => {
        setTimeout(() => {
            category.classList.add('active');
        }, delay);
        delay += 500; // Agrega un retraso de 500ms entre cada categoría
    });
    document.addEventListener("DOMContentLoaded", function () {

        document.addEventListener("DOMContentLoaded", function () {
            const cookieBanner = document.getElementById("cookie-banner");
            const acceptButton = document.getElementById("accept-cookies");
            const rejectButton = document.getElementById("reject-cookies");

            // Función para ocultar el banner y guardar la decisión
            function setCookieConsent(consent) {
                localStorage.setItem("cookie-consent", consent);
                cookieBanner.style.display = "none"; // Ocultar el banner inmediatamente
            }

            // Eventos de botones
            acceptButton.addEventListener("click", function () {
                setCookieConsent("accepted");
            });

            rejectButton.addEventListener("click", function () {
                setCookieConsent("rejected");
            });

            // Verificar si ya hay una decisión guardada
            if (!localStorage.getItem("cookie-consent")) {
                cookieBanner.style.display = "block"; // Mostrar el banner si no hay decisión
            }
        });
