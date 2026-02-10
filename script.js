document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Language Toggle Logic ---
    const langBtn = document.getElementById('lang-toggle');
    const body = document.body;

    // Check localStorage for saved preference
    const savedLang = localStorage.getItem('site-lang') || 'es';
    setLanguage(savedLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = body.classList.contains('lang-es') ? 'es' : 'en';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    function setLanguage(lang) {
        // Remove both classes first to be safe
        body.classList.remove('lang-es', 'lang-en');
        // Add the chosen language class
        body.classList.add(`lang-${lang}`);
        // Update document title lang attribute
        document.documentElement.lang = lang;
        // Update button text to show the *other* language available
        if (langBtn) {
            langBtn.textContent = lang === 'es' ? 'EN' : 'ES'; // Show the language you can switch TO
        }
        // Save to localStorage
        localStorage.setItem('site-lang', lang);
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks) navLinks.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
