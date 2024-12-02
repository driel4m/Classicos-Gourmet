
        const mobileMenu = document.getElementById('mobile-menu');
        const nav = document.getElementById('nav');

        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });