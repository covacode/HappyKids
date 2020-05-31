
$('#Home').on("click", function () {
    var dest = $("#page-top").offset().top;
    $('html, body').animate({scrollTop: dest}, 800);
});

$('#About').on("click", function () {
    var dest = $("#about").offset().top;
    $('html, body').animate({scrollTop: dest}, 800);
});