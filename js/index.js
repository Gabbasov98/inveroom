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

    $(".form-group__dropdown-inner").mCustomScrollbar()
    $(".custom-select__dropdown-inner").mCustomScrollbar()
    $(".price-select__dropdown-inner").mCustomScrollbar()

    $(".main__price-show").click(function() {
        if ($(this).parents(".main__price").hasClass("main__price--active")) {
            $(".main__price").removeClass("main__price--active")
        } else {
            $(".main__price").removeClass("main__price--active")
            $(this).parents(".main__price").addClass("main__price--active")
        }

    })

    $(document).mouseup(function(e) {
        var div = $('.main__price');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("main__price--active")) {
                $(div).removeClass("main__price--active")
            }

        }
    });

    $(".detail__desc-btn").click(function() {
        $(this).toggleClass("detail__desc-btn--active")
        $(this).siblings(".detail__desc-item--hidden").toggleClass("detail__desc-item--show")
    })

    if (window.innerWidth < 769) {
        $(".detail__desc-item:nth-child(2)").addClass("detail__desc-item--hidden")
    }


    $(window).resize(function() {
        if (window.innerWidth < 769) {
            $(".detail__desc-item:nth-child(2)").addClass("detail__desc-item--hidden")
        } else {
            $(".detail__desc-item:nth-child(2)").removeClass("detail__desc-item--hidden")
        }
    });



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
        $(this).parents(".tab__content").find(".object__table-row--hidden").toggleClass("object__table-row--show")
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
        $(this).siblings("label").addClass("label--active")
    })

    $(".form-group__dropdown input").change(function() {
        let value = $(this).parents(".form-group__dropdown").find("input:checked").siblings("label").children(".form-group__info").html()
        $(this).parents(".form-group__dropdown").siblings(".form-group__wrap").find(".form-group__info").html(value)
        $(this).parents(".form-group__dropdown").removeClass("form-group__dropdown--active")
        $(this).parents(".form-group__dropdown").siblings(".form-group__wrap--dropdown").removeClass("form-group__wrap--disable")
        $(this).parents(".form-group__dropdown").siblings("label").removeClass("label--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.form-group__dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.hasClass("form-group__dropdown--active")) {
                div.removeClass("form-group__dropdown--active")
                div.siblings(".form-group__wrap").removeClass("form-group__wrap--disable")
                div.siblings("label").removeClass("label--active")
            }

        }
    });




    $("#homePrice .polzunok").slider({
        animate: "fast",
        range: "min",
        min: 30000,
        max: 1000000,
        value: 158500,
        slide: function(event, ui) {
            $("#homePrice .form-group__num span").text(ui.value)
            formatThosands($("#homePrice .form-group__num span"))
        }
    });

    $("#rentPeriod .polzunok").slider({
        animate: "fast",
        range: "min",
        min: 0,
        max: 20,
        value: 5,
        slide: function(event, ui) {
            $("#rentPeriod .form-group__num span").text(ui.value)
        }
    });

    $("#homeSquare .polzunok").slider({
        animate: "fast",
        range: "min",
        min: 20,
        max: 1000,
        value: 202,
        slide: function(event, ui) {
            $("#homeSquare .form-group__num span").text(ui.value)
            formatThosands($("#homeSquare .form-group__num span"))
        }
    });

    $("#useOption .polzunok").slider({
        animate: "fast",
        range: "min",
        min: 0,
        max: 12,
        value: 7,
        slide: function(event, ui) {
            $("#useOption .form-group__num span").text(ui.value)
        }
    });


    $("#finishDate .polzunok").slider({
        animate: "fast",
        range: "min",
        min: 1,
        max: 48,
        value: 5,
        slide: function(event, ui) {
            $("#finishDate .form-group__wrap .form-group__num2 span").text(ui.value)
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

    $(".catalog-card__more").click(function() {
        $(this).siblings(".catalog-card__dropdown").addClass("catalog-card__dropdown--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.main__more-dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".main__more-dropdown").hasClass("main__more-dropdown--active")) {
                $(".main__more-dropdown").removeClass("main__more-dropdown--active")
            }
        }
    });

    $(document).mouseup(function(e) {
        var div = $('.catalog-card__dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".catalog-card__dropdown").hasClass("catalog-card__dropdown--active")) {
                $(".catalog-card__dropdown").removeClass("catalog-card__dropdown--active")
            }
        }
    });

    $(".chess .chess__flat").click(function() {
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
                <a href="" class="chess__info-link">
                    <span>Перейти на страницу</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.29 6.28982C11.1963 6.38278 11.1219 6.49338 11.0711 6.61524C11.0203 6.7371 10.9942 6.8678 10.9942 6.99981C10.9942 7.13183 11.0203 7.26253 11.0711 7.38439C11.1219 7.50625 11.1963 7.61685 11.29 7.70981L14.59 10.9998L7 10.9998C6.73478 10.9998 6.48043 11.1052 6.29289 11.2927C6.10536 11.4802 6 11.7346 6 11.9998C6 12.265 6.10536 12.5194 6.29289 12.7069C6.48043 12.8945 6.73478 12.9998 7 12.9998L14.59 12.9998L11.29 16.2898C11.1017 16.4781 10.9959 16.7335 10.9959 16.9998C10.9959 17.2661 11.1017 17.5215 11.29 17.7098C11.4783 17.8981 11.7337 18.0039 12 18.0039C12.2663 18.0039 12.5217 17.8981 12.71 17.7098L17.71 12.7098C17.801 12.6147 17.8724 12.5026 17.92 12.3798C17.9729 12.2601 18.0002 12.1307 18.0002 11.9998C18.0002 11.8689 17.9729 11.7395 17.92 11.6198C17.8724 11.4971 17.801 11.3849 17.71 11.2898L12.71 6.28982C12.617 6.19609 12.5064 6.12169 12.3846 6.07092C12.2627 6.02015 12.132 5.99402 12 5.99402C11.868 5.99402 11.7373 6.02015 11.6154 6.07092C11.4936 6.12169 11.383 6.19609 11.29 6.28982Z" fill="#2551AF"/>
                    </svg>
                </a>
            </div>
        `

        let blockPosition = $(".chess__middle-wrap").offset().top
        let elemetPosition = $(this).offset().top

        if ($(this).hasClass("chess__flat--active")) {
            $(".chess__flat").removeClass("chess__flat--active")
            $(".chess__info").remove()
        } else {
            $(".chess__flat").removeClass("chess__flat--active")
            $(".chess__info").remove()
            $(this).addClass("chess__flat--active")
            if (window.innerWidth < 992) {
                $(this).parents(".chess__middle-wrap").append(flatInfo)
                $(".chess__info").css("top", `${elemetPosition - blockPosition + 40}px`)
                if ((elemetPosition - blockPosition) > 420) {
                    $(".chess__info").css("transform", "translateX(-50%) translateY(-570px)")
                }
            } else {
                $(this).append(flatInfo)
                if ((elemetPosition - blockPosition) > 450) {
                    $(".chess__info").addClass("chess__info--top")
                }
            }

        }

        if ($(this).hasClass('chess__flat--green')) {
            $(".chess__info-link").remove()
        }

        console.log(blockPosition)
        console.log(elemetPosition)





        $(document).mouseup(function(e) {
            var div = $('.chess__info');
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.remove()
            }
        });
    })

    $(".pay__table-open-btn").click(function() {
        $(".pay__table-row-hidden").addClass("pay__table-row-show")
        $(".pay__table-close").addClass("pay__table-close--active")
    })
    $(".pay__table-close").click(function() {
        $(".pay__table-row-hidden").removeClass("pay__table-row-show")
        $(".pay__table-close").removeClass("pay__table-close--active")
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
        openGallery()
    })

    $(".main__gallery-item").click(function() {
        openGallery()
    })

    $(".materials__gallery-item").click(function() {
        openGallery()
    })

    $(".page-item__top").click(function() {
        $(this).parents(".page-item").toggleClass("page-item--active")
        $(this).parents(".page-item").find(".page-item__bottom").slideToggle(2)
        if ($(this).parents(".page-item").hasClass("chart")) {
            chart1()
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
        }
    })

    $(".profit__group-hover").hover(onIn, onOut);

    $(".catalog-card__img-tab").mouseover(function() {
        let path = $(this).attr("data-tab-path")
        let parent = $(this).parents(".catalog-card__img")
        $(parent).find(".catalog-card__img-tab").removeClass("catalog-card__img-tab--active")
        $(this).addClass("catalog-card__img-tab--active")
        $(parent).find(".catalog-card__img-item").removeClass("catalog-card__img-item--active")
        $(parent).find(`.catalog-card__img-item[data-tab-path="${path}"]`).addClass("catalog-card__img-item--active")
    })

    $(".custom-select__target").click(function() {
        $(this).parents(".custom-select").toggleClass("custom-select--active")

    })

    $(document).mouseup(function(e) {
        var div = $('.custom-select__dropdown-inner');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.parents(".custom-select").hasClass("custom-select--active")) {
                div.parents(".custom-select").removeClass("custom-select--active")
            }
        }
    });


    function unselectOption(dropdown) {
        console.log($(dropdown))

        if ($(dropdown).hasClass("custom-select__dropdown-item--country")) {
            $(".custom-select__dropdown-item--country").removeClass("custom-select__dropdown-item--selected")
            $(dropdown).addClass("custom-select__dropdown-item--selected")
            $(dropdown).next().slideToggle()
        } else {
            $(dropdown).parents(".custom-select__dropdown").find(".custom-select__dropdown-item").removeClass("custom-select__dropdown-item--selected")
            $(dropdown).parents(".custom-select").removeClass("custom-select--active")
        }
    }

    $(".custom-select__dropdown-item").click(function() {
        unselectOption($(this))
        $(this).addClass("custom-select__dropdown-item--selected")
        $(this).parents(".custom-select").find("input").attr("value", $(this).children("span").text())

        if (!$(this).parents(".custom-select").children("label").hasClass("label--active")) {
            $(this).parents(".custom-select").children("label").addClass("label--active")
        }
    })

    $(".price-select__price ").click(function() {
        $(this).parents(".price-select").toggleClass("price-select--active")
        $(".price-select__dropdown-item").removeClass("price-select__dropdown-item--disabled")
    })

    $(document).mouseup(function(e) {
        var div = $('.price-select__dropdown-inner');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.parents(".price-select").hasClass("price-select--active")) {
                div.parents(".price-select").removeClass("price-select--active")
            }
        }
    });

    $(".price-select__from .price-select__dropdown-item").click(function() {
        $(".price-select__from .price-select__dropdown-item").removeClass("price-select__dropdown-item--selected")
        $(this).addClass("price-select__dropdown-item--selected")
        $(this).parents(".price-select").children("label").addClass("label--active")
        let value = $(this).children("span").html()
        $(this).parents(".price-select").find(".price-select__price-from").html(value)

        let dataPrice = parseInt($(this).attr("data-price"))
        console.log(dataPrice)

        $(".price-select__to .price-select__dropdown-item").each(function(index, el) {
            let dataPrice2 = parseInt($(el).attr("data-price"));
            if (dataPrice2 < dataPrice) {
                $(el).addClass("price-select__dropdown-item--disabled")
                console.log("few")
            } else {
                $(el).removeClass("price-select__dropdown-item--disabled")
            }
        });

        $(".price-select").addClass("price-select--selected")
        if ($(".price-select__to .price-select__dropdown-item").hasClass("price-select__dropdown-item--selected")) {
            $(".price-select").removeClass("price-select--active")
        }
    })

    $(".price-select__to .price-select__dropdown-item").click(function() {
        $(".price-select__to .price-select__dropdown-item").removeClass("price-select__dropdown-item--selected")
        $(this).addClass("price-select__dropdown-item--selected")
        $(this).parents(".price-select").find("label").addClass("label--active")
        let value = $(this).children("span").html()
        $(this).parents(".price-select").find(".price-select__price-to").html(value)

        let dataPrice = parseInt($(this).attr("data-price"))
        console.log(dataPrice)

        $(".price-select__from .price-select__dropdown-item").each(function(index, el) {
            let dataPrice2 = parseInt($(el).attr("data-price"));
            if (dataPrice2 > dataPrice) {
                $(el).addClass("price-select__dropdown-item--disabled")
                console.log("few")
            } else {
                $(el).removeClass("price-select__dropdown-item--disabled")
            }
        });
        $(".price-select").addClass("price-select--selected")
        if ($(".price-select__from .price-select__dropdown-item").hasClass("price-select__dropdown-item--selected")) {
            $(".price-select").removeClass("price-select--active")
        }
    })

    $(".room-select__rooms").click(function() {
        $(this).parents(".room-select").toggleClass("room-select--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.room-select__dropdown-inner');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.parents(".room-select").hasClass("room-select--active")) {
                div.parents(".room-select").removeClass("room-select--active")
            }
        }
    });

    $(".room-select__dropdown input").change(function() {
        if (isRoomSelected()) {
            $(".room-select > label").addClass("label--active")
        } else {
            $(".room-select > label").removeClass("label--active")
        }
    })


    if (isRoomSelected()) {
        $(".room-select > label").addClass("label--active")
    } else {
        $(".room-select > label").removeClass("label--active")
    }

    function isRoomSelected() {
        let inputs = []
        $(".room-select__dropdown input").each(function(index, el) {
            let input = $(el).prop('checked')
            inputs.push(input)

            attr = $(el).attr("data-room")
            if (input) {
                $(`.room-select__room[data-room='${attr}']`).addClass("room-select__room--active")
            } else {
                $(`.room-select__room[data-room='${attr}']`).removeClass("room-select__room--active")
            }
        });

        if (inputs.includes(true)) {
            return true
        } else {
            return false
        }
    }



})

function onIn() {
    let path = $(this).attr("data-hover-path")
    $(`.profit__group-hover[data-hover-path="${path}"]`).addClass("profit__group-hover--active")
}

function onOut() {
    let path = $(this).attr("data-hover-path")
    $(`.profit__group-hover[data-hover-path="${path}"]`).removeClass("profit__group-hover--active")
        // $(this).removeClass("profit__group-hover--active")
}

function openGallery() {
    $("body").append('<div class="backdrop"></div>')
    $("body").addClass("fixed-body")
    $(".gallery-modal").addClass("gallery-modal--active")

    $(".gallery-modal__close").click(function() {
        $(".gallery-modal").removeClass("gallery-modal--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })
    $(".backdrop").click(function() {
        $(".gallery-modal").removeClass("gallery-modal--active")
        $(this).remove()
        $("body").removeClass("fixed-body")
    })
}