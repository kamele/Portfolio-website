// Theme change
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Logo click
document.querySelector('.logo').addEventListener('click', function () {
    const nameSpan = document.querySelector('.brand span');
    if (!nameSpan) return;
    if (nameSpan.textContent.trim() === 'Izabela Piasecka') {
        nameSpan.textContent = 'Piasecka Izabela';
    } else {
        nameSpan.textContent = 'Izabela Piasecka';
    }
});
