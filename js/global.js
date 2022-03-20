$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7               ' });

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


    $(".form-group2 input").keyup(function() {
        if ($(this).val()) {
            $(this).parents(".form-group2").removeClass("form-group2--error")
        }
    })

    formatThosands($("#homePrice .form-group__num span"))
    formatThosands($("#homeSquare .form-group__num span"))
    inputFormatThosands($(".create__price-input--format input"))
    inputFormatThosands($(".thousand-format"))

    $(".create__price-input--format input").change(function() {
        inputFormatThosands($(".create__price-input--format input"))
    })

    $(".thousand-format").change(function() {
        inputFormatThosands($(".thousand-format"))
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


    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        let parentTabs = $(this).parent(".tabs")
        $(parentTabs).children(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(parentTabs).siblings(".tab__content").removeClass("tab__content--active")
        $(parentTabs).siblings(`.tab__content[data-tab-path='${path}']`).addClass("tab__content--active")
        $('.tabs').animate({ scrollLeft: $(this).position().left }, 500);
    })
})