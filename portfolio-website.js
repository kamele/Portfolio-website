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

// Project 1 image carousel (show all images if they fit, otherwise show carousel with arrows)
(function () {
    const carousel = document.getElementById('proj1-carousel');
    if (!carousel) return;
    const images = carousel.querySelectorAll('img');
    const prevBtn = document.getElementById('proj1-prev');
    const nextBtn = document.getElementById('proj1-next');
    let current = 0;
    let visibleCount = 3;

    function updateVisibleCount() {
        const containerWidth = carousel.offsetWidth;
        visibleCount = Math.floor(containerWidth / 210); // 200px img + 10px gap
        if (visibleCount < 1) visibleCount = 1;
        if (visibleCount > images.length) visibleCount = images.length;
    }

    function showImages() {
        for (let i = 0; i < images.length; i++) {
            if (i >= current && i < current + visibleCount) {
                images[i].style.display = 'inline-block';
            } else {
                images[i].style.display = 'none';
            }
        }
        prevBtn.style.display = current > 0 ? 'flex' : 'none';
        nextBtn.style.display = (current + visibleCount < images.length) ? 'flex' : 'none';
    }

    function onResize() {
        updateVisibleCount();
        if (current + visibleCount > images.length) {
            current = Math.max(0, images.length - visibleCount);
        }
        showImages();
    }

    prevBtn.onclick = function () {
        if (current > 0) {
            current--;
            showImages();
        }
    };
    nextBtn.onclick = function () {
        if (current + visibleCount < images.length) {
            current++;
            showImages();
        }
    };

    window.addEventListener('resize', onResize);
    setTimeout(onResize, 100);
})();