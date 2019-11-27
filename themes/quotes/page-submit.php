<?php get_header(); ?>

<?php if( have_posts() ) :?>

<section id="submit-content">

    <h1>Submit a Quote</h1>

    <form>
        <p>Author of Quote</p>
        <input id="quote-title" type="text"/>

        <p>Quote</p>
        <textarea id="quote" type="text"></textarea>

        <p>Where did you find this quote? (e.g. book name)</p>
        <input id="quote-source" type="text"/>

        <p>Provide the URL of the quote source, if available.</p>
        <input id="quote-url" type="text"/>
    </form>

    <section class="add-quote">
        <button id="add-quote">Submit Quote</button>
    </section>


<?php else : ?>
        <p>No posts found</p>
<?php endif;?>

</section>


<?php get_footer();?>