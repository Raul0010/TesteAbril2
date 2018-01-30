$(document).ready(function () {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    $(".Mobile").hide();
    $(".Desktop").show();

    if (isMobile.matches) {
        $(".Mobile").show();
        $(".Desktop").hide();
    }
});