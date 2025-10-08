<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="masthead" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200 transition-all duration-300">
    <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2 text-2xl font-bold text-blue-900">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span class="text-white text-sm font-bold">LV</span>
                </div>
                <span class="hidden sm:block">Las Vegas Home Expert</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
                <!-- Buying Dropdown -->
                <div class="relative group">
                    <button type="button" class="text-neutral-800 hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                        <span>Buying</span>
                        <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="py-2">
                            <a href="<?php echo esc_url(home_url('/luxury-homes-for-sale-las-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Luxury Homes for Sale</a>
                            <a href="<?php echo esc_url(home_url('/modern-homes-las-vegas-expert')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Modern Homes Expert</a>
                            <a href="<?php echo esc_url(home_url('/services/luxury-home-buyer-agent')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Buyer Agent Services</a>
                            <a href="<?php echo esc_url(home_url('/buying-guide-las-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Buying Guide</a>
                            <a href="<?php echo esc_url(home_url('/first-time-home-buyer-las-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">First-Time Home Buyer</a>
                        </div>
                    </div>
                </div>

                <!-- Selling Dropdown -->
                <div class="relative group">
                    <button type="button" class="text-neutral-800 hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                        <span>Selling</span>
                        <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="py-2">
                            <a href="<?php echo esc_url(home_url('/services/luxury-home-selling-agent')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Selling Agent Services</a>
                            <a href="<?php echo esc_url(home_url('/services/home-staging-services-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Home Staging Services</a>
                            <a href="<?php echo esc_url(home_url('/selling-guide-las-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Selling Guide</a>
                        </div>
                    </div>
                </div>

                <!-- Neighborhoods Dropdown -->
                <div class="relative group">
                    <button type="button" class="text-neutral-800 hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                        <span>Neighborhoods</span>
                        <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="py-2">
                            <a href="<?php echo esc_url(home_url('/neighborhoods/red-rock-country-club')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Red Rock Country Club</a>
                            <a href="<?php echo esc_url(home_url('/neighborhoods/the-ridges-summerlin')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">The Ridges Summerlin</a>
                            <a href="<?php echo esc_url(home_url('/neighborhoods/tournament-hills')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Tournament Hills</a>
                            <a href="<?php echo esc_url(home_url('/neighborhoods/southern-highlands')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Southern Highlands</a>
                            <a href="<?php echo esc_url(home_url('/neighborhoods/summerlin-homes')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Summerlin</a>
                            <a href="<?php echo esc_url(home_url('/neighborhoods/henderson-homes')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Henderson</a>
                        </div>
                    </div>
                </div>

                <!-- Resources Dropdown -->
                <div class="relative group">
                    <button type="button" class="text-neutral-800 hover:text-blue-600 transition-colors duration-200 font-semibold flex items-center space-x-1">
                        <span>Resources</span>
                        <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="py-2">
                            <a href="<?php echo esc_url(home_url('/las-vegas-luxury-home-market-report')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Market Report</a>
                            <a href="<?php echo esc_url(home_url('/investment-properties-las-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Investment Properties</a>
                            <a href="<?php echo esc_url(home_url('/relocation-specialist-las-vegas')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Relocation Services</a>
                            <a href="<?php echo esc_url(home_url('/sitemap')); ?>" class="block px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Site Map</a>
                        </div>
                    </div>
                </div>

                <!-- About -->
                <a href="<?php echo esc_url(home_url('/about-dr-jan-duffy')); ?>" class="text-neutral-800 hover:text-blue-600 transition-colors duration-200 font-semibold">About</a>

                <!-- Reviews -->
                <a href="<?php echo esc_url(home_url('/best-realtor-las-vegas-reviews')); ?>" class="text-neutral-800 hover:text-blue-600 transition-colors duration-200 font-semibold">Reviews</a>

                <!-- Contact -->
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">Get Started</a>
            </nav>

            <!-- Mobile Menu Button -->
            <button type="button" id="mobile-menu-button" class="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200" aria-label="Toggle menu">
                <div class="w-6 h-6 flex flex-col justify-center items-center">
                    <span class="block w-5 h-0.5 bg-neutral-700"></span>
                    <span class="block w-5 h-0.5 bg-neutral-700 mt-1"></span>
                    <span class="block w-5 h-0.5 bg-neutral-700 mt-1"></span>
                </div>
            </button>
        </div>

        <!-- Mobile Navigation (hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden border-t border-neutral-200 bg-white">
            <nav class="px-4 py-6 space-y-4">
                <div class="space-y-2">
                    <h3 class="font-semibold text-blue-900 text-lg">Buying</h3>
                    <div class="ml-4 space-y-2">
                        <a href="<?php echo esc_url(home_url('/luxury-homes-for-sale-las-vegas')); ?>" class="block text-neutral-800">Luxury Homes for Sale</a>
                        <a href="<?php echo esc_url(home_url('/buying-guide-las-vegas')); ?>" class="block text-neutral-800">Buying Guide</a>
                    </div>
                </div>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block">Get Started</a>
            </nav>
        </div>
    </div>
</header>

<!-- Spacer for fixed header -->
<div class="h-16"></div>
