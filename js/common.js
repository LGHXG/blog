$(document).ready(function () {

    //banner
    $('#banner').easyFader();

    // nav 隐藏
    var header = $("header");
    $(window).scroll(function(){
        if( $(document).scrollTop() >= 124 ){
            header.addClass("slideUp");
        } else {
            header.removeClass("slideUp");
            header.addClass("slideDown");
        }
    });
    
    
    var logo = $('.logo');
    $('.branding').mouseenter(function () {
        logo.animate({left: 6},500);
        setTimeout(function () {
            logo.animate({left: 0},500);
        },500)
    });

});
