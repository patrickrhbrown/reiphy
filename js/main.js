$('.photo-thumbnails .thumbnail').click(function() {
    $('.photo-thumbnails .thumbnail').removeClass('current');
    $(this).addClass('current');
    var path = $(this).find('img').attr('src');
    $('#big-photo img').attr('src', path, alt);

});
