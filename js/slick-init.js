$(document).ready(function () {
    $('#slider-01').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnDotsHover: true,
        slidesToShow: 1,
        speed: 350,
    }).on('mousedown touchstart', function () {}).on('mousemove touchmove', function () {
        event.stopPropagation();
    }).on('mouseleave touchend mouseup', function () {});

    $('#slider-02').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnDotsHover: true,
        slidesToShow: 1,
        speed: 350,
    }).on('mousedown touchstart', function () {}).on('mousemove touchmove', function () {
        event.stopPropagation();
    }).on('mouseleave touchend mouseup', function () {});
});
