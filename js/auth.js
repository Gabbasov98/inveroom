$(document).ready(function() {
    $(".form-group2__passowrd-btn").click(function() {
        if ($(this).hasClass("form-group2__passowrd-btn--active")) {
            $(this).removeClass("form-group2__passowrd-btn--active")
            $(this).siblings("input").attr("type", "password")
        } else {
            $(this).addClass("form-group2__passowrd-btn--active")
            $(this).siblings("input").attr("type", "text")
        }
    })
})