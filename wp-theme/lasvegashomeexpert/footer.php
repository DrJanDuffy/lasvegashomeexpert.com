<footer class="bg-blue-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="lg:col-span-2">
                <div class="flex items-center space-x-2 text-2xl font-bold mb-4">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span class="text-white text-sm font-bold">LV</span>
                    </div>
                    <span>Las Vegas Home Expert</span>
                </div>
                <p class="text-blue-200 mb-4 max-w-md">
                    Your trusted partner in Las Vegas luxury real estate. Dr. Jan Duffy provides expert guidance for buying and selling luxury homes in Las Vegas's most prestigious neighborhoods.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Facebook">📘</a>
                    <a href="#" class="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Twitter">🐦</a>
                    <a href="#" class="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Instagram">📷</a>
                    <a href="#" class="text-blue-200 hover:text-white transition-colors duration-200" aria-label="LinkedIn">💼</a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="<?php echo esc_url(home_url('/luxury-homes-for-sale-las-vegas')); ?>" class="text-blue-200 hover:text-white transition-colors duration-200">Buying</a></li>
                    <li><a href="<?php echo esc_url(home_url('/selling-guide-las-vegas')); ?>" class="text-blue-200 hover:text-white transition-colors duration-200">Selling</a></li>
                    <li><a href="<?php echo esc_url(home_url('/neighborhoods/red-rock-country-club')); ?>" class="text-blue-200 hover:text-white transition-colors duration-200">Neighborhoods</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about-dr-jan-duffy')); ?>" class="text-blue-200 hover:text-white transition-colors duration-200">About</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h3 class="text-lg font-semibold mb-4">Contact</h3>
                <ul class="space-y-2 text-blue-200">
                    <li>📍 1700 S Pavilion Center Drive, Suite 140</li>
                    <li>📍 Las Vegas, NV 89135</li>
                    <li>📞 <a href="<?php echo esc_url(lvhe_phone_link()); ?>" class="hover:text-white">(702) 222-1964</a></li>
                    <li>✉️ <a href="mailto:<?php echo esc_attr(lvhe_email()); ?>" class="hover:text-white">DrJanSells@LasVegasHomeExpert.com</a></li>
                    <li>🕒 24/7 Support</li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-blue-700 mt-8 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-blue-200 text-sm">
                    © <?php echo date('Y'); ?> Las Vegas Home Expert. All rights reserved.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" class="text-blue-200 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
                    <a href="<?php echo esc_url(home_url('/terms-of-service')); ?>" class="text-blue-200 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
                    <a href="<?php echo esc_url(home_url('/sitemap')); ?>" class="text-blue-200 hover:text-white text-sm transition-colors duration-200">Sitemap</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
</script>

</body>
</html>
