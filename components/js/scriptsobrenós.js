const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');

menuToggle.addEventListener('click', () => {
    navegation.style.display = navegation.style.display === 'flex' ? 'none' : 'flex';
});

            
            function fadeInElements() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element) => {
                
                setTimeout(() => {
                    element.classList.add('visible');
                }, 300); 
            });
        }

        window.onload = fadeInElements;