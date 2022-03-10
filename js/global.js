$(document).ready(function() {
    let val = $(".form-group2 input").val()
    let val2 = $(".form-group2 textarea").val()
    if (val) {
        $(this).addClass("input-active")
    } else {
        $(this).removeClass("input-active")
    }
    if (val2) {
        $(this).addClass("input-active")
    } else {
        $(this).removeClass("input-active")
    }
    $(".form-group2 input").change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-active")
        } else {
            $(this).removeClass("input-active")
        }
    })

    $(".form-group2 textarea").change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-active")
        } else {
            $(this).removeClass("input-active")
        }
    })


    formatThosands($("#homePrice .form-group__num span"))
    formatThosands($("#homeSquare .form-group__num span"))
    inputFormatThosands($(".create__price-input--format input"))

    $(".create__price-input--format input").change(function() {
        inputFormatThosands($(".create__price-input--format input"))
    })

    function formatThosands(el) {
        let val = parseInt($(el).text())
        val = val.toLocaleString('ru-RU')
        $(el).text(val)
    }

    function inputFormatThosands(el) {
        let val = parseInt($(el).val())
        val = val.toLocaleString('ru-RU')
        $(el).attr("value", val)
    }
})