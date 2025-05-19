// Gestion du menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Fermer le menu quand on clique en dehors
    // document.addEventListener('click', function(event) {
    //     if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
    //         menuToggle.classList.remove('active');
    //         mainNav.classList.remove('active');
    //     }
    // });

    // Fermer le menu quand on clique sur un lien
    // document.querySelectorAll('.nav-links a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         if (window.innerWidth <= 768) {
    //             menuToggle.classList.remove('active');
    //             mainNav.classList.remove('active');
    //         }
    //     });
    // });
});

// Gestion du menu des informations d'identité
document.addEventListener('DOMContentLoaded', function() {
    const identityToggle = document.querySelector('.identity-toggle');
    const identityNav = document.querySelector('.identity-nav');

    identityToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        identityNav.classList.toggle('active');
    });

    // Fermer le menu quand on clique en dehors
    // document.addEventListener('click', function(event) {
    //     if (!identityToggle.contains(event.target) && !identityNav.contains(event.target)) {
    //         identityToggle.classList.remove('active');
    //         identityNav.classList.remove('active');
    //     }
    // });
});

// Gestion du menu des softskills
document.addEventListener('DOMContentLoaded', function() {
    const softskillsToggle = document.querySelector('.softskills-toggle');
    const softskillsNav = document.querySelector('.softskills-nav');

    softskillsToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        softskillsNav.classList.toggle('active');
    });

    // Fermer le menu quand on clique en dehors
    // document.addEventListener('click', function(event) {
    //     if (!softskillsToggle.contains(event.target) && !softskillsNav.contains(event.target)) {
    //         softskillsToggle.classList.remove('active');
    //         softskillsNav.classList.remove('active');
    //     }
    // });
});

// Gestion du carousel de projets
let currentProject = 0;
const projects = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateButtons() {
    prevBtn.disabled = currentProject === 0;
    nextBtn.disabled = currentProject === projects.length - 1;
}

function changeProject(direction) {
    projects[currentProject].classList.remove('active');
    currentProject = (currentProject + direction + projects.length) % projects.length;
    projects[currentProject].classList.add('active');
    updateButtons();
}

// Initialiser les boutons
updateButtons();

// Gestion de l'état actif des liens de navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function setActiveLink() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});
