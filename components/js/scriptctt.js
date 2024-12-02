const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');

menuToggle.addEventListener('click', () => {
    navegation.style.display = navegation.style.display === 'flex' ? 'none' : 'flex';
});


const form = document.getElementById('formSugestao');
const sugestaoInput = document.getElementById('sugestao');
const alerta = document.getElementById('mensagemAlerta');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (sugestaoInput.value.trim() === '') {
        alerta.style.display = 'block'; 
    } else {
        alerta.style.display = 'none'; 
        alert('Assunto enviado');
        sugestaoInput.value = '';
    }
    
    
});