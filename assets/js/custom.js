
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


$('.navbar-nav li a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(".navbar-toggler").click(function () {
    $("body").toggleClass("no-scroll");
});

$(".header-menu a").click(function () {
    $("body").removeClass("no-scroll");
});

$('.header-btn-main a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


const navLinks = $("#menu-main-menu a");
navLinks.on("click", function (e) {
    const fullHref = $(this).attr("href");
    const targetHash = fullHref.includes("#") ? fullHref.substring(fullHref.indexOf("#")) : null;

    if (targetHash && $(targetHash).length) {
        e.preventDefault(); // Stop full page reload

        $("html, body").stop(true).animate(
            { scrollTop: $(targetHash).offset().top - 80 },
            600
        );

        navLinks.removeClass("active");
        $(this).addClass("active");
    }
});

// Scroll highlight logic
$(window).on("scroll", function () {
    const scrollPosition = $(window).scrollTop();

    navLinks.each(function () {
        const fullHref = $(this).attr("href");
        const targetHash = fullHref.includes("#") ? fullHref.substring(fullHref.indexOf("#")) : null;
        const targetSection = $(targetHash);

        if (targetSection.length) {
            const offset = targetSection.offset().top - 100;
            const height = targetSection.outerHeight();

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.removeClass("active");
                $(this).addClass("active");
            }
        }
    });
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