$(document).ready(function () {
    $(".open").on("click", function () {
        $("nav").addClass("active");
    })
    $(".close").on("click", function () {
        $("nav").removeClass("active");
    });

    AOS.init();
});