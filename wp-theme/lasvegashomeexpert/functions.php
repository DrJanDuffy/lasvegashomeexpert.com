<?php
/**
 * Las Vegas Home Expert Theme Functions
 *
 * @package LasVegasHomeExpert
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Theme version
define('LVHE_VERSION', '1.0.0');

/**
 * Theme Setup
 */
function lasvegashomeexpert_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    add_theme_support('custom-logo');
    add_theme_support('responsive-embeds');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'lasvegashomeexpert'),
        'footer' => __('Footer Menu', 'lasvegashomeexpert'),
    ));
}
add_action('after_setup_theme', 'lasvegashomeexpert_setup');

/**
 * Enqueue Scripts and Styles
 */
function lasvegashomeexpert_scripts() {
    // Tailwind CSS CDN (for development - compile for production)
    wp_enqueue_style('tailwindcss', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.3.6/dist/tailwind.min.css', array(), '3.3.6');
    
    // Theme stylesheet
    wp_enqueue_style('lasvegashomeexpert-style', get_stylesheet_uri(), array(), LVHE_VERSION);
    
    // Custom CSS
    wp_enqueue_style('lasvegashomeexpert-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), LVHE_VERSION);
    
    // RealScout widget styles
    if (file_exists(get_template_directory() . '/assets/css/realscout-widgets.css')) {
        wp_enqueue_style('realscout-widgets', get_template_directory_uri() . '/assets/css/realscout-widgets.css', array(), LVHE_VERSION);
    }
    
    // jQuery (WordPress includes it)
    wp_enqueue_script('jquery');
    
    // RealScout widget script
    wp_enqueue_script('realscout-widgets', 'https://widgets.realscout.com/bundles/agent-widgets.js', array(), null, true);
    
    // Theme JavaScript
    wp_enqueue_script('lasvegashomeexpert-main', get_template_directory_uri() . '/assets/js/main.js', array(), LVHE_VERSION, true);
    
    // Localize script for AJAX
    wp_localize_script('lasvegashomeexpert-main', 'lvheData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('lvhe_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'lasvegashomeexpert_scripts');

/**
 * Add Custom Schema JSON-LD
 */
function lasvegashomeexpert_add_schema() {
    if (is_front_page()) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'RealEstateAgent',
            'name' => 'Dr. Jan Duffy',
            'description' => 'Las Vegas luxury real estate specialist since 2013',
            'url' => home_url(),
            'telephone' => '702-222-1964',
            'email' => 'DrJanSells@LasVegasHomeExpert.com',
            'image' => get_template_directory_uri() . '/assets/images/dr-jan-duffy.jpg',
            'address' => array(
                '@type' => 'PostalAddress',
                'streetAddress' => '1700 S Pavilion Center Drive, Suite 140',
                'addressLocality' => 'Las Vegas',
                'addressRegion' => 'NV',
                'postalCode' => '89135',
                'addressCountry' => 'US',
            ),
            'areaServed' => array(
                array(
                    '@type' => 'Place',
                    'name' => 'Red Rock Country Club',
                ),
                array(
                    '@type' => 'Place',
                    'name' => 'Summerlin',
                ),
                array(
                    '@type' => 'Place',
                    'name' => 'MacDonald Highlands',
                ),
            ),
            'knowsAbout' => array(
                'Luxury Real Estate',
                'Divorce Real Estate',
                'Veteran Homebuyer Services',
            ),
            'priceRange' => '$1,000,000+',
            'aggregateRating' => array(
                '@type' => 'AggregateRating',
                'ratingValue' => '4.9',
                'reviewCount' => '127',
                'bestRating' => '5',
            ),
        );
        
        echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>';
    }
}
add_action('wp_head', 'lasvegashomeexpert_add_schema');

/**
 * Register Widget Areas
 */
function lasvegashomeexpert_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'lasvegashomeexpert'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'lasvegashomeexpert'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'lasvegashomeexpert_widgets_init');

/**
 * Custom Excerpt Length
 */
function lasvegashomeexpert_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'lasvegashomeexpert_excerpt_length');

/**
 * Phone Link Helper
 */
function lvhe_phone_link($phone = '702-222-1964') {
    return 'tel:' . preg_replace('/[^0-9]/', '', $phone);
}

/**
 * Email Link Helper
 */
function lvhe_email() {
    return 'DrJanSells@LasVegasHomeExpert.com';
}

/**
 * Track Events (Google Analytics Integration)
 */
function lvhe_track_event_script() {
    ?>
    <script>
    function lvheTrackEvent(eventData) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventData.action, {
                'event_category': eventData.category,
                'event_label': eventData.label,
                'value': eventData.value || 0
            });
        }
    }
    </script>
    <?php
}
add_action('wp_footer', 'lvhe_track_event_script');
