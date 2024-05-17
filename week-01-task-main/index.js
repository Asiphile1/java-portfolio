document.addEventListener("DOMContentLoaded", () => {
    const scrollToTop = document.querySelector('.scroll-to-top');

    scrollToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
