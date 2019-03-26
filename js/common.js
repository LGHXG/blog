$(document).ready(function () {

    //banner
    (function banner() {
        var index = 0;
        var flag = true;
        // 下一张
        function next() {
            if (flag) {
                flag = false;
                index--;
                $('.banner-img li').each(function (key, value) {
                    $(this).css({
                        "transform":"rotateX("+ (index * 90) +"deg)",
                        "transition-delay":(key * 0.1) + "s"
                    })
                });
                var timeId = setTimeout(function () {
                    flag = true
                }, 500)
            }
        }
        setInterval(next,1800);
        $('.banner .next').on('click', next);
        // 上一张
        $('.banner .pre').on('click', function () {
            if (flag) {
                flag = false;
                index--;
                $('.banner-img li').each(function (key, value) {
                    $(this).css({
                        "transform":"rotateX("+ (-index * 90) +"deg)",
                        "transition-delay":(key * 0.2) + "s"
                    })
                })
                var timeId = setTimeout(function () {
                    flag = true
                }, 1000)
            }
        })
    }());

    // nav 隐藏
    (function navshow() {
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
    }())

    // blogimg提示


});
