// This is where it all goes :)
$(document).ready(function () {
    $(".order-online-select").magnificPopup({
        type: "inline"
    });

    $(".order-online-select").on("click", function () {
        $('#mainnav-mobi').slideToggle(300);
        $('.btn-menu').toggleClass('active');
    })
})