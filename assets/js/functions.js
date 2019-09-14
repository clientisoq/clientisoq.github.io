const gallery = document.getElementById('gallery');

// Initialization
window.addEventListener('load', function() {
    // if(this.window.location.pathname == '/') {
    //     const loading = document.querySelector('.loading');

    //     loading.classList.add('load-fade');
    // }


    // Setting the height of grid .wall to fit contents
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
