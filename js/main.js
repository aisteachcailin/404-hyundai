function toggle_submenu(obj) {
    console.log(obj);
    obj.parent().toggleClass('_active').siblings().removeClass('_active');
    obj.closest('.main-header').find(".main-header__submenus-holder [data-submenu=" + obj.data("submenu") + "]").toggleClass('_active').siblings().removeClass('_active');
}

function dropdown_toggle(){
    var dropdowns = $(".dropdown");

    dropdowns.find("dt").click(function(){
        dropdowns.find("dd ul").hide();
        $(this).next().children().toggle();
    });

    dropdowns.find("dd ul li a").click(function(){
        var leSpan = $(this).parents(".dropdown").find("dt a span");

        $(this).parents(".dropdown").find('dd a').each(function(){
            $(this).removeClass('selected');
        });

        leSpan.html($(this).html());

        if($(this).hasClass('default')){
            leSpan.removeClass('selected')
        }
        else{
            leSpan.addClass('selected');
            $(this).addClass('selected');
        }

        $(this).parents("ul").hide();
    });

    $(document).bind('click', function(e){
        if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });
}

$(document).ready(function(){
    dropdown_toggle();

    $('.submenu-close').click(function () {
        $(this).closest('.submenu').removeClass('_active');
        $(this).closest('.main-header').find('.main-nav__item').removeClass('_active');
    });

    var $panel = $('.panel-default'),
        $item = $panel.find('.panel-default__item'),
        $title = $item.find('.panel-default__title');

    $title.on('click', function (e) {
        var _this = $(this),
            _thisItem = _this.parent();
        _thisItem.toggleClass('active');
    });
    if (document.querySelector(".solaris-spec__email")) {
        $('.solaris-spec__email').fancybox({
            type: 'ajax',
            padding: 0,
            margin: 0,
            autoResize: false,
            centerOnScroll: false,
            autoScale: true,
            scrolling: false,
            wrapCSS: 'start-credit-template-modal'
        });
    }

    if (document.querySelector(".hnd-popup")) {
        $('.hnd-popup').fancybox({
            type: 'ajax',
            padding: 0,
            margin: 0,
            autoResize: false,
            helpers: {
                overlay: {
                    locked: false
                }
            },
            centerOnScroll: false,
            autoScale: true,
            scrolling: false,
            minWidth: 960,
            maxWidth: 960,
            autoSize: false,
            autoHeight: true,
            wrapCSS: 'nm_wrapper'
        });
    }

    $('.fixed-messaging__btn-action').click(function () {
        $(this).parent().toggleClass('active');
        return false;
    });
    setInterval(function () {
        var imgs = $('.fixed-messaging__img-anim'),
            current_index = imgs.index($('.active'));
        var next_index = current_index + 1;
        if (next_index >= imgs.length) {
            next_index = 0;
        }
        $('.fixed-messaging__img-anim.active').removeClass('active');
        imgs.eq(next_index).addClass('active');
    }, 3000);
});