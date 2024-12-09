let currentSlide = 0; // Start bei dem ersten Bild

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Gehe zum letzten Bild, wenn du nach links gehst
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Gehe zum ersten Bild, wenn du nach rechts gehst
    }

    // Verschiebe die Bilder basierend auf dem aktuellen Slide
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}