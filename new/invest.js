$(document).ready(function() {

    $("input[name='outYear']").change(function() {
        let val = $(this).siblings("label").html()
        $(this).parents(".form-group").find(".form-group__period-year").html(val)
    })

    $("input[name='outMonth']").change(function() {
        let val = $(this).siblings("label").html()
        $(this).parents(".form-group").find(".form-group__period-month").html(val)
    })

    $("input[name='calcPay']").change(function() {
        $(this).parents(".form-group").find(".form-group__dropdown").addClass("form-group__dropdown--active")
        $(this).parents(".form-group").find(".form-group__wrap").addClass("form-group__wrap--disable")
        $(this).parents(".form-group").find("label").addClass("label--active")

        calcCheckedPayCalc()
    })

    $(".input-currency__original").keyup(function() {
        let dublicateInput = $(this).siblings(".input-currency__dublicate")
        let currency = $(dublicateInput).attr("data-currency")
        let val = $(this).val()
        $(dublicateInput).val(`${val} ${currency}`)
    })

    calcCheckedPayCalc()

    function calcCheckedPayCalc() {
        let num = $("input[name='calcPay']:checked").length
        $(".form-group__calc-num").html(num)
    }

    $(".form-group__dropdown-hint-btn").click(function() {
        $(this).siblings(".form-group__dropdown-hint-modal").addClass("form-group__dropdown-hint-modal--active")
    })

    $(".form-group__dropdown-hint-close").click(function() {
        $(this).parents(".form-group__dropdown-hint-modal").removeClass("form-group__dropdown-hint-modal--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.form-group__dropdown-hint-modal--active');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("form-group__dropdown-hint-modal--active")) {
                $(div).removeClass("form-group__dropdown-hint-modal--active")
            }
        }
    });


    $("input[name='firstPay']").change(function() {
        let percent = $(this).attr("data-percent")
        if (percent == 100) {
            $("#buyWay").addClass("form-group--disable")
            $("#rentDuration").addClass("form-group--disable")
        } else {
            $("#buyWay").removeClass("form-group--disable")
            $("#rentDuration").removeClass("form-group--disable")
        }
    })


    $("input[name='useWay']").change(function() {
        let guarant = $(this).attr("data-guarant")
        if (guarant == "true") {
            $("#liveDuration").addClass("form-group--disable")
        } else {
            $("#liveDuration").removeClass("form-group--disable")
        }
    })

    // 
})