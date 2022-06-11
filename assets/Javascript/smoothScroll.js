$(function () {
    $('a[href=^="#"]').on('click', function(e) {
        $target = $(this.hash);
        $jarak = 0;
        $('html, body').stop().animate(
            {
                'scrollTop' : $target.offset().top - $jarak
            },
            500,'swing',
            function() {
                window.location.hash = $target;
            }
        );
    });
});