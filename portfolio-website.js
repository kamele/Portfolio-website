// Theme change
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Carousel
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index - 1 + track.children.length) % track.children.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % track.children.length;
    updateCarousel();
});