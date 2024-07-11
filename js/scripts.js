$(document).ready(function() {
    $('#contact-us-btn').click(function() {
        $('#contact-form-modal').modal('show');
    });

    $('#contact-form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'https://getform.io/f/your-endpoint', // Replace 'your-endpoint' with your actual Getform.io endpoint
            method: 'POST',
            data: $(this).serialize(),
            success: function() {
                alert('Form submitted successfully!');
                $('#contact-form-modal').modal('hide');
            }
        });
    });

    $('.project-item').click(function() {
        var image = $(this).data('image');
        $('#main-project-image').attr('src', image);
    });
});
