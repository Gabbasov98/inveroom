const apiUrl = "http://62.113.98.140:8080"


$(document).ready(function() {
    // $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7               ' });


    $(".form-group2 input").each(function(index, el) {
        let val = $(el).val()
        if (val) {
            $(el).addClass("input-active")
        } else {
            $(el).removeClass("input-active")
        }
    });

    $(".form-group2 textarea").each(function(index, el) {
        let val = $(el).val()
        if (val) {
            $(el).addClass("input-active")
        } else {
            $(el).removeClass("input-active")
        }
    });


    let val2 = $(".form-group2 textarea").val()

    $(".form-group2 input").change(function() {
        let val = $(this).val()
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


    $(".main__price-currency-item").click(function() {
        $(this).siblings(".main__price-currency-item").removeClass("main__price-currency-item--active")
        $(this).addClass("main__price-currency-item--active")
    })


})

function redirect(url) {
    window.location.replace(`${url}`);
}