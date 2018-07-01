$(function() {
    $detail = $('.detail');
    $forecasts = $('.forecast .day');
    
    $.each($forecasts, function (i,e) {
        $(e).click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $detail.css('left', '0px');
            } else {
                $forecasts.removeClass('active');
                $(this).addClass('active');
                $detail.css('left', -(i+1)*600+'px');
            }
        });
    });
});