document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content section');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const currentPageSpan = document.getElementById('current-page');
    const navLinks = document.querySelectorAll('nav a');

    let currentIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'block' : 'none';
        });
        currentPageSpan.textContent = `Página ${index + 1}`;
        updateButtons();
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === sections.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSection(currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < sections.length - 1) {
            currentIndex++;
            showSection(currentIndex);
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach((section, index) => {
                if (section.id === targetId) {
                    currentIndex = index;
                    showSection(currentIndex);
                }
            });
        });
    });

    // Inicializar mostrando la primera sección
    showSection(currentIndex);
});