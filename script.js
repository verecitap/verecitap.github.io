// Permitir pantalla completa en el iframe
function toggleFullscreen() {
    const iframe = document.querySelector("iframe");

    if (!iframe) return;

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { 
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

// Animaciones al hacer scroll
const cards = document.querySelectorAll(".video-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    observer.observe(card);
});
