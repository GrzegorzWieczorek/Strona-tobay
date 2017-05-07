/**
 * Created by piotrgolianek on 19.04.17.
 */
$(document).ready(function() {
    var sName = "cookiesok";
    $("#close-cookie-warn").click(function(){
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 3600000*24*365);
        document.cookie = sName + "=1;expires=" + oExpire;
        $("#cookie-warn").hide("slow");
    });

    var sStr = '; '+ document.cookie +';';
    var nIndex = sStr.indexOf('; '+ escape(sName) +'=');
    if (nIndex === -1) {
        $("#cookie-warn").show();
    }
});



    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });





/*
if ($(window).width() < 960) {
    $('.carousel-indicators').hide();
}
else {
    $('.carousel-indicators').show();
}
*/
/*
if ($(window).width() < 960) {
    $('.btn-header').css("padding", "5%")
}
else {
    $('.btn-header').css("padding", "2%")
}
*/
$(document).ready(function () {
    var headerHeight = $('.slide-section').outerHeight();
    $('.slide-section').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);
        e.preventDefault();
    });

});
