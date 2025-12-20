/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

    // Breakpoints.
    breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Header.
    if ($banner.length > 0 &&
        $header.hasClass('alt')) {

        $window.on('resize', function() { $window.trigger('scroll'); });

        $banner.scrollex({
            bottom: $header.outerHeight(),
            terminate: function() { $header.removeClass('alt'); },
            enter: function() { $header.addClass('alt'); },
            leave: function() { $header.removeClass('alt'); }
        });

    }

    // Menu.
    var $menu = $('#menu');

    $menu._locked = false;

    $menu._lock = function() {

        if ($menu._locked)
            return false;

        $menu._locked = true;

        window.setTimeout(function() {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function() {

        if ($menu._lock())
            $body.addClass('is-menu-visible');

    };

    $menu._hide = function() {

        if ($menu._lock())
            $body.removeClass('is-menu-visible');

    };

    $menu._toggle = function() {

        if ($menu._lock())
            $body.toggleClass('is-menu-visible');

    };

    $menu
        .appendTo($body)
        .on('click', function(event) {

            event.stopPropagation();

            // Hide.
            $menu._hide();

        })
        .find('.inner')
        .on('click', '.close', function(event) {

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            // Hide.
            $menu._hide();

        })
        .on('click', function(event) {
            event.stopPropagation();
        })
        .on('click', 'a', function(event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
            $menu._hide();

            // Redirect.
            window.setTimeout(function() {
                window.location.href = href;
            }, 350);

        });

    $body
        .on('click', 'a[href="#menu"]', function(event) {

            event.stopPropagation();
            event.preventDefault();

            // Toggle.
            $menu._toggle();

        })
        .on('keydown', function(event) {

            // Hide on escape.
            if (event.keyCode == 27)
                $menu._hide();

        });

})(jQuery);

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
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
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
    }, {
        threshold: 0.3
    });

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