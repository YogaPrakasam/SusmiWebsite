document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
                    bsCollapse.hide();
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.padding = '10px 0';
            document.querySelector('.navbar-brand img').style.height = '40px';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.padding = '15px 0';
            document.querySelector('.navbar-brand img').style.height = '50px';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-item, .card, .contact-info, .section-title');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-fadeInUp');
            }
        });
    };

    // Initial check for elements in viewport
    animateOnScroll();
    
    // Check for elements in viewport on scroll
    window.addEventListener('scroll', animateOnScroll);

    // WhatsApp click handler
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add tracking here if needed
            console.log('WhatsApp link clicked:', this.href);
        });
    });

    // WhatsApp group link handler
    const whatsappGroupLink = document.querySelector('a[href*="whatsapp.com/group"]');
    if (whatsappGroupLink) {
        whatsappGroupLink.addEventListener('click', function(e) {
            // You can add tracking here if needed
            console.log('WhatsApp group link clicked');
        });
    }
});
