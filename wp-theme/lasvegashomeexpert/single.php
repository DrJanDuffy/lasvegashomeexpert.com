<?php
/**
 * The template for displaying all single posts
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
            
            <!-- Post Header -->
            <header class="entry-header bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-4">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">
                        <?php the_title(); ?>
                    </h1>
                    <div class="flex items-center space-x-4 text-slate-300">
                        <span><?php the_date(); ?></span>
                        <span>•</span>
                        <span>By <?php the_author(); ?></span>
                        <?php if (has_category()) : ?>
                            <span>•</span>
                            <span><?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </div>
            </header>

            <!-- Featured Image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="featured-image">
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-96 object-cover')); ?>
                </div>
            <?php endif; ?>

            <!-- Post Content -->
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

            <!-- Post Footer -->
            <footer class="entry-footer bg-slate-50 py-8 px-4">
                <div class="max-w-4xl mx-auto">
                    <?php if (has_tag()) : ?>
                        <div class="tags mb-4">
                            <strong>Tags:</strong> <?php the_tags('', ', ', ''); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </footer>
        </article>

        <?php
        // Navigation between posts
        the_post_navigation(
            array(
                'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'lasvegashomeexpert') . '</span> <span class="nav-title">%title</span>',
                'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'lasvegashomeexpert') . '</span> <span class="nav-title">%title</span>',
            )
        );

        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;

    endwhile; // End of the loop.
    ?>
</main>

<?php
get_footer();
