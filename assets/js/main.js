        // Menu toggle
        function toggleMenu(event) {
            event.preventDefault();
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.querySelector('.menu-overlay');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.querySelector('.menu-overlay');
            if (navLinks) navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        }

        // Close menu on link click
        document.addEventListener('DOMContentLoaded', function() {
            // Remove loading class after a short delay
            setTimeout(() => {
                document.body.classList.remove('is-loading');
            }, 100);

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    closeMenu();
                    
                    if (href && href.startsWith('#') && href !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            setTimeout(() => {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        }
                    }
                });
            });

            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Animate counters when visible
            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;
            
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        counters.forEach(counter => {
                            animateCounter(counter);
                        });
                        counterObserver.disconnect();
                    }
                });
            }, { threshold: 0.3 });

            // Observe the stats section instead of individual counters
            const statsSection = document.querySelector('.stats-grid');
            if (statsSection) {
                counterObserver.observe(statsSection);
            }

			// Form submission
			document.getElementById('contactForm').addEventListener('submit', function(e) {
				e.preventDefault();
				const formData = new FormData(this);
				const name = formData.get('name');
				//const email = formData.get('email');
				const message = formData.get('message');
				
				// Create mailto link
				const mailtoLink = `mailto:rover.unipd@gmail.com?subject= Contattato da ${name} dal sito &body=${encodeURIComponent(message)}`;
				window.location.href = mailtoLink;
			});
		});

        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }