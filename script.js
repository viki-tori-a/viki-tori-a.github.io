let currentSlide = 0; // Start bei dem ersten Bild

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Zeigt das Bild mit der aktiven Klasse an
function showSlide() {
    // Alle Bilder ausblenden
    slides.forEach(slide => slide.classList.remove('active'));

      // Das aktuelle Bild anzeigen
      slides[currentSlide].classList.add('active');
    }
    
    // Bewegt die Slideshow vorwärts oder rückwärts
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Zurück zum ersten Bild, wenn das Ende erreicht ist
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Zum letzten Bild, wenn die erste Slide erreicht ist
    }

    showSlide();
}

// Initiales Setzen des aktiven Bildes
showSlide();

   // if (currentSlide < 0) {
   //     currentSlide = totalSlides - 1; // Gehe zum letzten Bild, wenn du nach links gehst
   // } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Gehe zum ersten Bild, wenn du nach rechts gehst
   // }

    // Verschiebe die Bilder basierend auf dem aktuellen Slide
    //const slidesContainer = document.querySelector('.slides');
    //slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
//}
const mobilemenu = document.getElementById ('mobilemenu');
mobilemenu .addEventListener ('click',()=>{
    //das wird ausgeführt
    mobilemenu.classList.toggle("active");
});
