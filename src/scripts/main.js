document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (window.innerWidth <= 768) {
                const offsetTop = input.getBoundingClientRect().top;
                window.scrollTo({
                    top: offsetTop - 100, //tenho q ajustar
                    behavior: 'smooth'
                });
            }
        });
    });
});
