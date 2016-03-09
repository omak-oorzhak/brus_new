$('.hamburger').on('click', function(e) {
    $(this).toggleClass('is-active');
    // If menu is already showing, slide it up. Otherwise, slide it down.
    $('.nav-list').toggleClass('slide-down');
});