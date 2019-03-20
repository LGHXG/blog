$(document).ready(function () {

    //banner
    $('#banner').easyFader();

    // nav
    var header = $("header");
    $(window).scroll(function(){
        if( $(document).scrollTop() >= 124 ){
            header.addClass("slideUp");
        } else {
            header.removeClass("slideUp");
            header.addClass("slideDown");
        }
    });
    window.onscroll = function(){
        var sl =- Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
    }

    // column


});