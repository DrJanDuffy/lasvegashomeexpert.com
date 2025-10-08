/**
 * Las Vegas Home Expert - Main JavaScript
 *
 * @package LasVegasHomeExpert
 */

(function($) {
    'use strict';

    // Mobile Menu Toggle
    $(document).ready(function() {
        const mobileMenuButton = $('#mobile-menu-button');
        const mobileMenu = $('#mobile-menu');
        
        if (mobileMenuButton.length && mobileMenu.length) {
            mobileMenuButton.on('click', function() {
                mobileMenu.toggleClass('hidden');
                $(this).toggleClass('active');
            });
        }

        // Smooth scroll for anchor links
        $('a[href^="#"]').on('click', function(e) {
            const target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });

        // Add scroll effect to header
        let lastScroll = 0;
        $(window).on('scroll', function() {
            const currentScroll = $(this).scrollTop();
            const header = $('header');
            
            if (currentScroll > 50) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
            
            lastScroll = currentScroll;
        });

        // Analytics event tracking helper
        window.lvheTrackEvent = function(eventData) {
            if (typeof gtag !== 'undefined') {
                gtag('event', eventData.action, {
                    'event_category': eventData.category,
                    'event_label': eventData.label,
                    'value': eventData.value || 0
                });
            }
            console.log('Event tracked:', eventData);
        };

        // Track phone clicks
        $('a[href^="tel:"]').on('click', function() {
            lvheTrackEvent({
                action: 'phone_click',
                category: 'conversion',
                label: 'phone_number',
                value: 1
            });
        });

        // Track email clicks
        $('a[href^="mailto:"]').on('click', function() {
            lvheTrackEvent({
                action: 'email_click',
                category: 'conversion',
                label: 'email',
                value: 1
            });
        });
    });

})(jQuery);
