const gallery = document.getElementById('gallery');

// Initialization
window.addEventListener('load', function() {
    var maxHeight = -1;

    $('.wall-column').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        $('.wall').height(maxHeight);
    });

});

// Grid
$('.wall').jaliswall({
    item: '.wall-item',
    columnClass: '.wall-column'
});