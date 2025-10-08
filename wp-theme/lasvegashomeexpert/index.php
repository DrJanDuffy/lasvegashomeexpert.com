<?php
/**
 * The main template file
 *
 * @package LasVegasHomeExpert
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="max-w-7xl mx-auto px-4 py-16">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('mb-12'); ?>>
                    <header class="entry-header mb-6">
                        <h1 class="text-4xl font-bold text-slate-900">
                            <?php the_title(); ?>
                        </h1>
                        <div class="text-slate-600 mt-2">
                            <?php the_date(); ?> by <?php the_author(); ?>
                        </div>
                    </header>

                    <div class="entry-content prose prose-lg max-w-none">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;

            the_posts_navigation();
        else :
            ?>
            <div class="text-center py-12">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Nothing Found</h2>
                <p class="text-slate-600">Sorry, no posts matched your criteria.</p>
            </div>
            <?php
        endif;
        ?>
    </div>
</main>

<?php
get_footer();
