$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.header-main').addClass("fixed-header");
        var headerHeight = $('.header-main').outerHeight();

        $('main.content-main').css("padding-top", headerHeight);
    }
    else {
        $('.header-main').removeClass("fixed-header");
        $('main.content-main').css("padding-top", 0);
        /*$("[data-flyout-menu-trigger-click]").removeClass("is-open");
        $('[data-flyout-menu-id="'+$("[data-flyout-menu-trigger-click]").attr("data-flyout-menu-trigger-click")+'"]').removeClass("is-open");*/
    }
});

$('.btn-buy').on('click', function (e) {
    var cart = $('.header-cart-icon');
    var imgtodrag = $(this).find('.buy-icon').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '60px',
                'width': '60px',
                'z-index': '8000'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');


        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});



