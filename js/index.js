function planSlider() {
    var swiper = new Swiper('.plan__slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.plan__slider1 .swiper-button-next',
            prevEl: '.plan__slider1 .swiper-button-prev',
        },
        pagination: {
            el: '.plan__slider1 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function planSlider2() {
    var swiper = new Swiper('.plan__slider2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.plan__slider2 .swiper-button-next',
            prevEl: '.plan__slider2 .swiper-button-prev',
        },
        pagination: {
            el: '.plan__slider2 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function planSlider3() {
    var swiper = new Swiper('.plan__slider3 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.plan__slider3 .swiper-button-next',
            prevEl: '.plan__slider3 .swiper-button-prev',
        },
        pagination: {
            el: '.plan__slider3 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function planSlider4() {
    var swiper = new Swiper('.plan__slider4 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.plan__slider4 .swiper-button-next',
            prevEl: '.plan__slider4 .swiper-button-prev',
        },
        pagination: {
            el: '.plan__slider4 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function viewSlider() {
    var swiper = new Swiper('.view__slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.view__slider1 .swiper-button-next',
            prevEl: '.view__slider1 .swiper-button-prev',
        },
        pagination: {
            el: '.view__slider1 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function viewSlider2() {
    var swiper = new Swiper('.view__slider2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.view__slider2 .swiper-button-next',
            prevEl: '.view__slider2 .swiper-button-prev',
        },
        pagination: {
            el: '.view__slider2 .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function infrastructureSlider() {
    var swiper = new Swiper('.infrastructure .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.infrastructure .swiper-button-next',
            prevEl: '.infrastructure .swiper-button-prev',
        },
        pagination: {
            el: '.infrastructure .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function serviceSlider() {
    var swiper = new Swiper('.service .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.service .swiper-button-next',
            prevEl: '.service .swiper-button-prev',
        },
        pagination: {
            el: '.service .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

function chart1() {
    var options = {
        series: [{
            name: 'График изменения цены',
            data: [
                40000, 35000, 50000, 50000, 55000, 55000,
                60000, 50000, 50000, 60000, 68000, 75000,
                75000, 75000, 80000, 80000, 80000, 90000
            ]
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'stepline',
            width: 2,
            colors: ['#558AFF'],
        },

        fill: {
            colors: ['#fff'],
            type: ['solid']
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            row: {
                stroke: ['#E1EDFD'],
            },
        },

        markers: {
            size: 0,
            hover: {
                sizeOffset: 14
            }
        },
        yaxis: {
            opposite: true,
            categories: [
                '10 000', '20 000', '30 000', '40 000', '50 000',
                '60 000', '70 000', '80 000', '90 000'
            ],
            min: 0,
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: -3,
            },
        },
        xaxis: {
            categories: [
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
                'Ноя', 'Дек', '2022', 'Фев', 'Март', 'Апр',
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
            ],
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 2,
                offsetY: 2,
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
}

function chart2() {
    var options = {
        series: [{
            name: 'График изменения цены',
            data: [
                40000, 35000, 50000, 50000, 55000, 55000,
                60000, 50000, 50000, 60000, 68000, 75000,
                75000, 75000, 80000, 80000, 80000, 90000
            ]
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'stepline',
            width: 2,
            colors: ['#558AFF'],
        },

        fill: {
            colors: ['#fff'],
            type: ['solid']
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            row: {
                stroke: ['#E1EDFD'],
            },
        },

        markers: {
            size: 0,
            hover: {
                sizeOffset: 14
            }
        },
        yaxis: {
            opposite: true,
            categories: [
                '10 000', '20 000', '30 000', '40 000', '50 000',
                '60 000', '70 000', '80 000', '90 000'
            ],
            min: 0,
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: -3,
            },
        },
        xaxis: {
            categories: [
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
                'Ноя', 'Дек', '2022', 'Фев', 'Март', 'Апр',
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
            ],
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 2,
                offsetY: 2,
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
}

function chart3() {
    var options = {
        series: [{
            name: 'График изменения цены',
            data: [
                40000, 35000, 50000, 50000, 55000, 55000,
                60000, 50000, 50000, 60000, 68000, 75000,
                75000, 75000, 80000, 80000, 80000, 90000
            ]
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'stepline',
            width: 2,
            colors: ['#558AFF'],
        },

        fill: {
            colors: ['#fff'],
            type: ['solid']
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            row: {
                stroke: ['#E1EDFD'],
            },
        },

        markers: {
            size: 0,
            hover: {
                sizeOffset: 14
            }
        },
        yaxis: {
            opposite: true,
            categories: [
                '10 000', '20 000', '30 000', '40 000', '50 000',
                '60 000', '70 000', '80 000', '90 000'
            ],
            min: 0,
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: -3,
            },
        },
        xaxis: {
            categories: [
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
                'Ноя', 'Дек', '2022', 'Фев', 'Март', 'Апр',
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
            ],
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 2,
                offsetY: 2,
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();
}


function chart4() {
    var options = {
        series: [{
            name: 'График изменения цены',
            data: [
                40000, 35000, 50000, 50000, 55000, 55000,
                60000, 50000, 50000, 60000, 68000, 75000,
                75000, 75000, 80000, 80000, 80000, 90000
            ]
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'stepline',
            width: 2,
            colors: ['#558AFF'],
        },

        fill: {
            colors: ['#fff'],
            type: ['solid']
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            row: {
                stroke: ['#E1EDFD'],
            },
        },

        markers: {
            size: 0,
            hover: {
                sizeOffset: 14
            }
        },
        yaxis: {
            opposite: true,
            categories: [
                '10 000', '20 000', '30 000', '40 000', '50 000',
                '60 000', '70 000', '80 000', '90 000'
            ],
            min: 0,
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: -3,
            },
        },
        xaxis: {
            categories: [
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
                'Ноя', 'Дек', '2022', 'Фев', 'Март', 'Апр',
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
            ],
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 2,
                offsetY: 2,
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();
}

function chart5() {
    var options = {
        series: [{
            name: 'График изменения цены',
            data: [
                40000, 35000, 50000, 50000, 55000, 55000,
                60000, 50000, 50000, 60000, 68000, 75000,
                75000, 75000, 80000, 80000, 80000, 90000
            ]
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'stepline',
            width: 2,
            colors: ['#558AFF'],
        },

        fill: {
            colors: ['#fff'],
            type: ['solid']
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            row: {
                stroke: ['#E1EDFD'],
            },
        },

        markers: {
            size: 0,
            hover: {
                sizeOffset: 14
            }
        },
        yaxis: {
            opposite: true,
            categories: [
                '10 000', '20 000', '30 000', '40 000', '50 000',
                '60 000', '70 000', '80 000', '90 000'
            ],
            min: 0,
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: -3,
            },
        },
        xaxis: {
            categories: [
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
                'Ноя', 'Дек', '2022', 'Фев', 'Март', 'Апр',
                'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт',
            ],
            labels: {
                style: {
                    colors: ['#7786A5'],
                    fontSize: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 2,
                offsetY: 2,
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();
}


function initPlanSliders() {
    planSlider()
    planSlider2()
    planSlider3()
    planSlider4()
}

function initViewSliders() {
    viewSlider()
    viewSlider2()
}

function initCharts() {
    // chart1()

}

$(document).ready(function() {
    initPlanSliders()
    initViewSliders()
    infrastructureSlider()
    serviceSlider()
        // initCharts()
    if (document.getElementById("chart1")) {
        chart1()
    }
    if (document.getElementById("chart2")) {
        chart2()
    }
    if (document.getElementById("chart3")) {
        chart3()
    }
    if (document.getElementById("chart4")) {
        chart4()
    }
    if (document.getElementById("chart5")) {
        chart5()
    }
    $(".select").niceSelect()



    $(".main__price-show").click(function() {
        $(this).parents(".main__price").toggleClass("main__price--active")
    })

    $(".detail__desc-btn").click(function() {
        $(this).toggleClass("detail__desc-btn--active")
        $(this).siblings(".detail__desc-item--hidden").toggleClass("detail__desc-item--show")
    })


    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        let parentTabs = $(this).parent(".tabs")
        $(parentTabs).children(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(parentTabs).siblings(".tab__content").removeClass("tab__content--active")
        $(parentTabs).siblings(`.tab__content[data-tab-path='${path}']`).addClass("tab__content--active")
        $('.tabs').animate({ scrollLeft: $(this).position().left }, 500);
    })

    $(".chess .tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".chess .tab__content").removeClass("tab__content--active")
        $(`.chess .tab__content[data-tab-path='${path}']`).addClass("tab__content--active")
    })

    $(".plan .tab").click(function() {
        initPlanSliders()
    })

    $(".view .tab").click(function() {
        initViewSliders()
    })
    setTimeout(() => {
        $(".chart .tab[data-tab-path='2']").trigger('click');
        firstChart()
    }, 1000);

    function firstChart() {
        setTimeout(() => {
            $(".chart .tab[data-tab-path='1']").trigger('click');
        }, 1000);
    }

    $(".chart .tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".chart .tab__content").removeClass("tab__content--active")
        $(`.chart .tab__content[data-tab-path='${path}']`).addClass("tab__content--active")
    })


    $(".faq__item-show").click(function() {
        $(this).parent(".faq__item").toggleClass("faq__item--active")
        $(this).siblings(".faq__item-hidden").slideToggle()
    })

    $(".location__btn").click(function() {
        $(this).toggleClass("location__btn--active")
        $(this).siblings(".detail__item--hidden").toggleClass("detail__item--show")
    })

    $(".info__btn").click(function() {
        $(this).toggleClass("info__btn--active")
        $(this).siblings(".info__item-desc-p--hidden").toggleClass("info__item-desc-p--show")
    })

    $(".object__btn").click(function() {
        $(this).toggleClass("object__btn--active")
        $(this).parents(".object").find(".object__table-row--hidden").toggleClass("object__table-row--show")
    })

    $(".tab__more").click(function() {
        $(this).hide()
        $(this).siblings(".tab").removeClass("tab--hidden")
    })

    $(".catalog-card__favourite").click(function() {
        $(this).toggleClass("catalog-card__favourite--active")
    })

    $(".form-group__wrap--dropdown").click(function() {
        $(this).addClass("form-group__wrap--disable")
        $(this).siblings(".form-group__dropdown").addClass("form-group__dropdown--active")
    })

    $(".form-group__dropdown input").change(function() {
        let value = $(this).parents(".form-group__dropdown").find("input:checked").siblings("label").children(".form-group__info").html()
        console.log(value)
        $(this).parents(".form-group__dropdown").siblings(".form-group__wrap").find(".form-group__info").html(value)
        $(this).parents(".form-group__dropdown").removeClass("form-group__dropdown--active")
        $(this).parents(".form-group__dropdown").siblings(".form-group__wrap--dropdown").removeClass("form-group__wrap--disable")
    })

    $(document).mouseup(function(e) {
        var div = $('.form-group__dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.hasClass("form-group__dropdown--active")) {
                div.removeClass("form-group__dropdown--active")
                div.siblings(".form-group__wrap").removeClass("form-group__wrap--disable")
            }

        }
    });


    $("#homePrice .polzunok").slider({
        animate: "slow",
        range: "min",
        min: 0,
        max: 1000000,
        value: 158500,
        slide: function(event, ui) {
            $("#homePrice .form-group__num span").text($("#homePrice .polzunok").slider("value"));
        }
    });

    $("#rentPeriod .polzunok").slider({
        animate: "slow",
        range: "min",
        min: 0,
        max: 21,
        value: 5,
        slide: function(event, ui) {
            $("#rentPeriod .form-group__num span").text($("#rentPeriod .polzunok").slider("value"));
        }
    });

    $("#homeSquare .polzunok").slider({
        animate: "slow",
        range: "min",
        min: 0,
        max: 1000,
        value: 202,
        slide: function(event, ui) {
            $("#homeSquare .form-group__num span").text($("#homeSquare .polzunok").slider("value"));
        }
    });




})