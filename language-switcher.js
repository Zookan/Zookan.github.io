document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.getElementById('language-switcher');
    let currentLang = localStorage.getItem('language') || 'fr';
    
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Mettre à jour le texte du bouton
        languageSwitcher.textContent = lang === 'fr' ? 'FR' : 'EN';
        
        // Mettre à jour tous les textes traduisibles
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Mettre à jour les attributs alt et title
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            if (translations[lang][key]) {
                element.alt = translations[lang][key];
                element.title = translations[lang][key];
            }
        });
    }
    
    // Événement de clic sur le bouton
    languageSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage(newLang);
    });
    
    // Initialiser la langue
    updateLanguage(currentLang);
}); 