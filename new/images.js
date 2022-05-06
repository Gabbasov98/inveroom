$(document).ready(function() {

    $(".text-block__desc-more").click(function() {
        $(this).toggleClass("text-block__desc-more--active")
        $(this).parents(".text-block__desc").find(".text-block__desc-hidden").toggleClass("text-block__desc-show")
    })

})