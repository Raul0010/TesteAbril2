$(document).ready(function () {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    $(".Mobile").hide();
    $(".Desktop").show();
    $(".Close").hide();
    $(".InputPesquisa").hide();

    if (isMobile.matches) {
        $(".Mobile").show();
        $(".Desktop").hide();
    }

    $(".Open").click(function(){
        $(".dropdown-content").show();
        $(".Open").hide();
        $(".Close").show();
        $(".MudaCor").toggleClass("Vermelho");
    });
    
    $(".Close").click(function(){
        $(".dropdown-content").hide();
        $(".Close").hide();
        $(".Open").show();
        $(".MudaCor").toggleClass("Vermelho");
    });
    
    $(".Pesquisa").click(function(){
        $(".ImgPesquisa").toggle();
        $(".InputPesquisa").toggle();
    });
});