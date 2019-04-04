$(document).ready(function(){

    // hide our element on page load
    $('#about').css('opacity', 0);

    $('#about').waypoint(function() {
        $('#about').addClass('fadeInDown');
    }, { offset: '50%' });

});

$(document).ready(function(){

    // hide our element on page load
    $('#pricing-left').css('opacity', 0);

    $('#pricing-left').waypoint(function() {
        $('#pricing-left').addClass('fadeInLeft');
    }, { offset: '50%' });

});

$(document).ready(function(){

    // hide our element on page load
    $('#pricing-right').css('opacity', 0);

    $('#pricing-right').waypoint(function() {
        $('#pricing-right').addClass('fadeInRight');
    }, { offset: '50%' });

});
