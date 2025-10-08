<?php
/**
 * The template for displaying all pages
 *
 * @package LasVegasHomeExpert
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while (have_posts()) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
            <!-- Page Header -->
            <header class="entry-header bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
                <div class="max-w-7xl mx-auto text-center">
                    <h1 class="text-5xl md:text-6xl font-bold mb-4">
                        <?php the_title(); ?>
                    </h1>
                    <?php if (has_excerpt()) : ?>
                        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            <?php the_excerpt(); ?>
                        </p>
                    <?php endif; ?>
                </div>
            </header>

            <!-- Page Content -->
            <div class="entry-content bg-white py-16 px-4">
                <div class="max-w-4xl mx-auto prose prose-lg prose-blue max-w-none">
                    <?php
                    the_content();

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__('Pages:', 'lasvegashomeexpert'),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div>
            </div>

            <?php if (get_edit_post_link()) : ?>
                <footer class="entry-footer max-w-4xl mx-auto px-4 pb-8">
                    <?php
                    edit_post_link(
                        sprintf(
                            wp_kses(
                                __('Edit <span class="screen-reader-text">%s</span>', 'lasvegashomeexpert'),
                                array(
                                    'span' => array(
                                        'class' => array(),
                                    ),
                                )
                            ),
                            wp_kses_post(get_the_title())
                        ),
                        '<span class="edit-link">',
                        '</span>'
                    );
                    ?>
                </footer>
            <?php endif; ?>
        </article>

        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;

    endwhile; // End of the loop.
    ?>
</main>

<?php
get_footer();
