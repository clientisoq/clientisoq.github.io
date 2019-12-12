// Initialization
function SetGallerySize() {
    var maxHeight = -1;

    $('.wall-column').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        $('.wall').height(maxHeight);
    });
}

window.addEventListener('load', SetGallerySize);
window.addEventListener('resize', SetGallerySize);


// Grid
$('.wall').jaliswall({
    item: '.wall-item',
    columnClass: '.wall-column'
});


// Filtering
var filters = $('.filter-menu ul li');

filters.click(function() {  
    filters.removeClass('active');
    $(this).addClass('active');

    var wantedClassName = $(this).attr('data-filter');
    var wall = $('.wall');
    var wallItems = $('.wall-item');
    var wantedItems = $(wantedClassName);
    var unwantedItems = wallItems.not(wantedItems);

    wall.addClass('hideme');

    setTimeout(() => {
        wall.removeClass('hideme');
        wantedItems.removeClass('hidden');
        unwantedItems.addClass('vis-hidden');

        setTimeout(function () {
            wantedItems.removeClass('vis-hidden');
            unwantedItems.addClass('hidden');
            SetGallerySize();
        }, 20);
    }, 1000);
});


$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});