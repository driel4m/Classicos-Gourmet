const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');

menuToggle.addEventListener('click', () => {
    navegation.style.display = navegation.style.display === 'flex' ? 'none' : 'flex';
});


document.addEventListener("DOMContentLoaded", function() {
    const contatoSection = document.getElementById("contato");
    
    contatoSection.style.opacity = 0;
    contatoSection.style.transition = "opacity 1s ease-in-out"; 

    setTimeout(() => {
        contatoSection.style.opacity = 1;
    }, 100); 

const submitButton = document.querySelector('.button');
submitButton.style.animation = "pulse 1s infinite";
});
