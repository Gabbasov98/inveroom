$(document).ready(function() {

    $(".alone-answer .create__radio input").change(function() {
        let href = $(".create__btn").attr("href")
        window.location.replace(`${href}`);
    })


    $(".create__type-radio input").change(function() {
        let path = $(this).attr("data-tab-path")
        console.log(path)
        $(".create__type-content").removeClass("create__type-content--active")
        $(`.create__type-content[data-tab-path="${path}"]`).addClass("create__type-content--active")
    })


    $('.create__gallery-grid').sortable({
        revert: 100
    });

    $(".create__gallery-item").click(function() {
        $(this).toggleClass("create__gallery-item--active")
    })

})