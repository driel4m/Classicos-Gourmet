const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');

menuToggle.addEventListener('click', () => {
    navegation.style.display = navegation.style.display === 'flex' ? 'none' : 'flex';
});

window.onload = function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.opacity = 0;  
    textContainer.style.transform = 'translateX(-50px)'; 
    textContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; 
    
    setTimeout(() => {
        textContainer.style.opacity = 1; 
        textContainer.style.transform = 'translateX(0)'; 
    }, 100); 

    
    const icons = document.querySelectorAll('.icons li a');
    icons.forEach((icon, index) => {
        icon.style.opacity = 0; 
        icon.style.transform = 'translateY(20px)'; 
        icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; 

        
        setTimeout(() => {
            icon.style.opacity = 1; 
            icon.style.transform = 'translateY(0)'; 
        }, 100 + index * 100); 
    });

    
    const circle = document.querySelector('.circle');
    circle.style.opacity = 0; 
    circle.style.transform = 'scale(0)'; 
    circle.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; 

    
    setTimeout(() => {
        circle.style.opacity = 1; 
        circle.style.transform = 'scale(1)'; 
    }, 100); 
    
};
