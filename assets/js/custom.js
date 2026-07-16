
/************************ Header Sticky *****************************/
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