$(document).ready(function(){
    $("#link-login").click(function(){
        $("#loginModal").modal("show");
    });

    $("#button-reserve-table").click(function(){
        $("#reserveModal").modal("show");
    });

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
