
$(window).resize(function (event) {
    if ($(window).width() < 640) {
        window.resizeTo(640, window.outerHeight);
    }
});

var show = true;

$('.menu').on("click", function () {
    if (show) {
        $('.menu img').attr('src', 'img/close.png');
        $('.menuCover').fadeIn();
    } else {
        $('.menu img').attr('src', 'img/menu.png');
        $('.menuCover').fadeOut();
    }

    show = !show;
});




$('.menuitem').on("click", function () {
    var href = $(this).find('h2').attr("href");
    $('.menu img').attr('src', 'img/menu.png');
    $('.menuCover').fadeOut(400, function () {
        show = !show;
        var pos = $(href).offset().top;
        $("html body").animate({ scrollTop: pos }, 1000);
        return false;
    });

});

$(".colorShow").mouseenter(
    function () {
        $(this).find('img:last-child').css('top', '0');
        $(this).find('img:last-child').fadeIn(0);
    }).mouseleave(
        function () {
            $(this).find('img:last-child').fadeOut(0, function () {
                $(this).find('img:last-child').css('top', '');
            });

        });