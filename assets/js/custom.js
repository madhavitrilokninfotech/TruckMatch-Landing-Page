
/************************ Header Fixed *****************************/
function fixedHeader() {
    var sticky = $(".header-main"),
        scroll = $(window).scrollTop();
    if (scroll >= 10) sticky.addClass("fixHeader");
    else sticky.removeClass("fixHeader");
}
fixedHeader();
$(window).scroll(function (e) {
    fixedHeader();
});


$(document).ready(function () {

    /************************ Current Year *****************************/
    // $("#currentYear").text(new Date().getFullYear());



    /************************ Slick Slider Hero Features *****************************/
    $('.h-banner-features').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }
            }
        ]
    });
});