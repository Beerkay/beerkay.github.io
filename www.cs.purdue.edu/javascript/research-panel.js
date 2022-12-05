var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

$('#expand-button').click(function() {
    $('.accordion').addClass('active');
    $('.maincontent .panel').addClass('show');
});
$('#collapse-button').click(function() {
    $('.accordion').removeClass('active');
    $('.maincontent .panel').removeClass('show');
});

/*
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
    if ($(this).scrollTop() > 300) {
        $('#controller').css('position', 'fixed');
    } else {
        $('#controller').css('position', 'relative');
    }
});

$('.scrollup').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});
*/