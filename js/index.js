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
            name: '',
            data: generateDayWiseTimeSeries(0, 18)
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
            locales: [{
                "name": "ru",
                "options": {
                    "months": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    "shortMonths": ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    "days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "СБ"],
                }
            }],
            defaultLocale: "ru"
        },
        colors: ['#558AFF'],
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
            fill: '#000000',
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
            type: 'datetime',
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
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                },
                format: 'MMM',
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
            crosshairs: {

                stroke: {
                    color: '#2551AF',
                },
                fill: {
                    color: '#000000',
                },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: 0,
                    fontFamily: 0,
                },
            },
        },
        tooltip: {
            x: {
                show: true,
                format: 'dd MMM yyyy',
                formatter: undefined,
            },
            marker: {
                show: false,
            },
        },


    };
    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
}

function generateDayWiseTimeSeries(s, count) {
    var values = [
        [40000, 35000, 50000, 50000, 55000, 55000,
            60000, 50000, 50000, 60000, 68000, 75000,
            75000, 75000, 80000, 80000, 80000, 90000
        ]
    ];
    var i = 0;
    var series = [];
    var x = new Date();
    while (i < count) {
        series.push([x, values[s][i]]);
        x = new Date(x.setMonth(x.getMonth() - 1));
        i++;
    }
    return series;
}

$('.chart-block').mousemove(function(e) {
    var x = e.clientX
    let windowWidth = $(window).innerWidth()
    if (x < (windowWidth / 2) + 40) {
        $('.chart-block .apexcharts-tooltip').removeClass("apexcharts-tooltip--left ")
        $('.chart-block .apexcharts-tooltip').addClass("apexcharts-tooltip--right ")
    } else {
        $('.chart-block .apexcharts-tooltip').removeClass("apexcharts-tooltip--right ")
        $('.chart-block .apexcharts-tooltip').addClass("apexcharts-tooltip--left ")
    }
});

function chart2() {
    var options = {
        series: [{
            name: '',
            data: generateDayWiseTimeSeries(0, 18)
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
            locales: [{
                "name": "ru",
                "options": {
                    "months": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    "shortMonths": ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    "days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "СБ"],
                }
            }],
            defaultLocale: "ru"
        },
        colors: ['#558AFF'],
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
            fill: '#000000',
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
            type: 'datetime',
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
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                },
                format: 'MMM',
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
            crosshairs: {

                stroke: {
                    color: '#2551AF',
                },
                fill: {
                    color: '#000000',
                },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: 0,
                    fontFamily: 0,
                },
            },
        },
        tooltip: {
            x: {
                show: true,
                format: 'dd MMM yyyy',
                formatter: undefined,
            },
            marker: {
                show: false,
            },
        },


    };
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
}

function chart3() {
    var options = {
        series: [{
            name: '',
            data: generateDayWiseTimeSeries(0, 18)
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
            locales: [{
                "name": "ru",
                "options": {
                    "months": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    "shortMonths": ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    "days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "СБ"],
                }
            }],
            defaultLocale: "ru"
        },
        colors: ['#558AFF'],
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
            fill: '#000000',
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
            type: 'datetime',
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
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                },
                format: 'MMM',
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
            crosshairs: {

                stroke: {
                    color: '#2551AF',
                },
                fill: {
                    color: '#000000',
                },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: 0,
                    fontFamily: 0,
                },
            },
        },
        tooltip: {
            x: {
                show: true,
                format: 'dd MMM yyyy',
                formatter: undefined,
            },
            marker: {
                show: false,
            },
        },


    };
    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();
}


function chart4() {
    var options = {
        series: [{
            name: '',
            data: generateDayWiseTimeSeries(0, 18)
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
            locales: [{
                "name": "ru",
                "options": {
                    "months": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    "shortMonths": ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    "days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "СБ"],
                }
            }],
            defaultLocale: "ru"
        },
        colors: ['#558AFF'],
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
            fill: '#000000',
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
            type: 'datetime',
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
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                },
                format: 'MMM',
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
            crosshairs: {

                stroke: {
                    color: '#2551AF',
                },
                fill: {
                    color: '#000000',
                },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: 0,
                    fontFamily: 0,
                },
            },
        },
        tooltip: {
            x: {
                show: true,
                format: 'dd MMM yyyy',
                formatter: undefined,
            },
            marker: {
                show: false,
            },
        },


    };
    var chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();
}

function chart5() {
    var options = {
        series: [{
            name: '',
            data: generateDayWiseTimeSeries(0, 18)
        }],
        chart: {
            type: 'line',
            height: 700,
            width: '100%',
            background: '#fff',
            toolbar: {
                show: false,
            },
            locales: [{
                "name": "ru",
                "options": {
                    "months": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    "shortMonths": ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    "days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "СБ"],
                }
            }],
            defaultLocale: "ru"
        },
        colors: ['#558AFF'],
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
            fill: '#000000',
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
            type: 'datetime',
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
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                },
                format: 'MMM',
            },
            axisBorder: {
                show: true,
                color: '#E1EDFD',
                height: 6,
                width: '110%',
                offsetX: -100,
                offsetY: 2
            },
            crosshairs: {

                stroke: {
                    color: '#2551AF',
                },
                fill: {
                    color: '#000000',
                },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: 0,
                    fontFamily: 0,
                },
            },
        },
        tooltip: {
            x: {
                show: true,
                format: 'dd MMM yyyy',
                formatter: undefined,
            },
            marker: {
                show: false,
            },
        },


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

    $(".pay .tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".pay .tab__content").removeClass("tab__content--active")
        $(`.pay .tab__content[data-tab-path='${path}']`).addClass("tab__content--active")
    })

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

    $("#useOption .polzunok").slider({
        animate: "slow",
        range: "min",
        min: 0,
        max: 13,
        value: 7,
        slide: function(event, ui) {
            $("#useOption .form-group__wrap .form-group__num span").text($("#useOption .polzunok").slider("value"));
        }
    });

    $("#useOption input[type='radio']").change(function() {
        let num = parseInt($("#useOption .form-group__wrap .form-group__num2 span").text())
        $("#useOption .polzunok").slider({
            animate: "slow",
            range: "min",
            min: 0,
            max: 13,
            value: num,
            slide: function(event, ui) {
                $("#useOption .form-group__wrap .form-group__num2 span").text($("#useOption .polzunok").slider("value"));
            }
        });
    })

    $("#finishDate .polzunok").slider({
        animate: "slow",
        range: "min",
        min: 0,
        max: 1000,
        value: 54,
        slide: function(event, ui) {
            $("#finishDate .form-group__wrap .form-group__num2 span").text($("#finishDate .polzunok").slider("value"));
        }
    });



    $(".profit__nav-year").click(function() {
        let year = $(this).attr("data-path-year")
        console.log(year)
        if ($(`.profit__nav-months[data-path-year="${year}"]`).hasClass("profit__nav-months--active")) {
            $(".profit__nav-months").removeClass("profit__nav-months--active")
            $(".profit__nav-year").removeClass("profit__nav-year--active")
        } else {
            $(".profit__nav-months").removeClass("profit__nav-months--active")
            $(`.profit__nav-months[data-path-year="${year}"]`).addClass("profit__nav-months--active")
            $(".profit__nav-year").removeClass("profit__nav-year--active")
            $(this).addClass("profit__nav-year--active")
        }

    })

    $(".profit__group1-open").click(function() {
        let group = $(this).attr("data-group-path")
        console.log(group)
        if ($(this).hasClass("profit__group1-open--active")) {
            $(this).removeClass("profit__group1-open--active")
            $(`.profit__group2[data-group-path="${group}"]`).removeClass("profit__group2--active")
            $(`.profit__group3[data-group-path="${group}"]`).removeClass("profit__group3--active")
        } else {
            $(this).addClass("profit__group1-open--active")
            $(`.profit__group2[data-group-path="${group}"]`).addClass("profit__group2--active")
        }
    })

    $(".profit__group2-open-btn").click(function() {
        let subgroup = $(this).attr("data-subgroup-path")
        $(this).toggleClass("profit__group2-open-btn--active")
        $(`.profit__group3[data-subgroup-path="${subgroup}"]`).toggleClass("profit__group3--active")
    })


    $(".main__more").click(function() {
        $(".main__more-dropdown").addClass("main__more-dropdown--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.main__more-dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".main__more-dropdown").hasClass("main__more-dropdown--active")) {
                $(".main__more-dropdown").removeClass("main__more-dropdown--active")
            }
        }
    });

    $(".chess__flat").click(function() {
        let flatInfo = `
            <div class="chess__info">
                <div class="chess__info-map">
                    <img src="img/room-map.svg" alt="">
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Статус</div>
                    <div class="chess__info-desc green-text">Доступна</div>
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Этаж</div>
                    <div class="chess__info-desc">20</div>
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Всего комнат</div>
                    <div class="chess__info-desc">3</div>
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Спален</div>
                    <div class="chess__info-desc">2</div>
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Общая площадь</div>
                    <div class="chess__info-desc">202 м²</div>
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Жилая площадь</div>
                    <div class="chess__info-desc">167 м²</div>
                </div>
                <div class="chess__info-item">
                    <div class="chess__info-title">Цена</div>
                    <div class="chess__info-desc">158 000 €</div>
                </div>
            </div>
        `
        $(".chess__flat").removeClass("chess__flat--active")
        $(".chess__info").remove()
        $(this).addClass("chess__flat--active")
        $(this).append(flatInfo)

        let blockPosition = $(".chess__middle-wrap").offset().top
        let elemetPosition = $(this).offset().top
        console.log(blockPosition)
        console.log(elemetPosition)
        if ((elemetPosition - blockPosition) > 370) {
            $(".chess__info").addClass("chess__info--top")
        }
    })

    $(".pay__table-open").click(function() {
        $(".pay__table-row-hidden").removeClass("pay__table-row-hidden")
    })

    $(".object__table-btn").click(function() {
        $(".object__table-dropdown").removeClass("object__table-dropdown--active")
        $(this).siblings(".object__table-dropdown").addClass("object__table-dropdown--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.object__table-dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("object__table-dropdown--active")) {
                $(div).removeClass("object__table-dropdown--active")
            }
        }
    });

    $(".main__gallery-btn").click(function() {
        $("body").append('<div class="backdrop"></div>')
        $(".gallery-modal").addClass("gallery-modal--active")

        $(".gallery-modal__close").click(function() {
            $(".gallery-modal").removeClass("gallery-modal--active")
            $(".backdrop").remove()
        })
        $(".backdrop").click(function() {
            $(".gallery-modal").removeClass("gallery-modal--active")
            $(this).remove()
        })
    })


})