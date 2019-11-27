(function($){

    $('#quote-button').on('click', function(event) {
        event.preventDefault()


        let usedNum = [];

        $.ajax({
            method: 'GET', 
            url: qod_data.root_url + '/wp-json/quotes/v1/post'
        }).done(function(data){

            const randNum = Math.floor(Math.random() * data.length);
            const title = data[randNum].title;
            const content = data[randNum].content;

            $('#quotes-content').html(`<i class="fas fa-quote-left"></i>
                                        <div>
                                            ${content}
                                            <h2>${title}</h2>
                                        </div>
                                        <i class="fas fa-quote-right"></i>`)
           
        })
    })

    $('#add-quote').on('click', function(event) {
        const $title = $('#quote-title').val();
        $('#quote-title').val('')

        const $quote = $('#quote').val();
        $('#quote').val('')

        const $source = $('#quote-source').val();
        $('#quote-source').val('')

        const $url = $('#quote-url').val();
        $('#quote-url').val('')


        const data = {
            title: $title,
            content: $quote,
            quotesSource: $source,
            quotesURL: $url
        }

        $.ajax({
            method: 'POST',
            url: qod_data.root_url + '/wp-json/wp/v2/posts',
            data,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-WP-NONCE', qod_data.nonce)
            }
        }).always(function(data) {
            $('#submit-content').html(`<h1>Thanks for submiting! Want to add another?</h1>`)
        })

    })




})(jQuery);