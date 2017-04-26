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
var menu = $(window);
var position = menu.scrollTop();
console.log(position);

/*
var menu = $('#mainnav');
var position = menu.offset();
console.log(position);
$( '#log' ).text( "left: " + position.left + ", top: " + position.top );
*/





/*
$( document ).on( "mousemove", function( event ) {
    if (event.pageY>1595) {
        $('#mainnav').css("background-color", "rgba(0, 0, 0, 1")
    } else {
    } if (event.pageY<1595) {
        $('#mainnav').css("background-color", "rgba(0, 0, 0, 0.5")
    } else {

    }
    $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
}); //1595


*/
