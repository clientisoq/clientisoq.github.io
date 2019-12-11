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


// Filtering
$('.filter-menu ul li').click(function() {
    $('.filter-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');

    $('.wall-item').addClass('hidden');
    $(selector).removeClass('hidden');    
});