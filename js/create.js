$(document).ready(function() {

    $(".alone-answer .create__radio input").change(function() {
        $(".create__btn").click()
    })

    $(".create__btn").click(function() {
        console.log(false)
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

    $(".create-table__check--item input").change(function() {
        cartSelect()
    })

    $(".create-table__check--all input").change(function() {
        if ($(this).prop('checked')) {
            $(".create-table__check--item input").prop('checked', true)
        } else {
            $(".create-table__check--item input").prop('checked', false)
        }
    })

    $(".add-faq").click(function(e) {
        let block = `
            <div class="create__block">
                <div class="create__group">
                    <div class="create__grid">
                        <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                            <input type='text' />
                            <label>Популярный вопрос</label>
                        </fieldset>
                        <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                            <textarea></textarea>
                            <label>Ответ на вопрос</label>
                        </fieldset>
                    </div>
                </div>
            </div>
            `
        $(this).siblings(".create__blocks").append(block)
    })

    $(".add-infrastructure").click(function(e) {
        let block = `
        <div class="create__block">
            <div class="create__group">
                <div class="create__grid">
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <input type='text' />
                        <label>Заголовок блока</label>
                    </fieldset>
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <textarea></textarea>
                        <label>Описание</label>
                    </fieldset>
                </div>
            </div>

            <div class="create__group">
                <div class="create__group-top">
                    <div class="create__group-title">Превью к видео</div>
                </div>
                <div class="create__gallery">
                    <div class="create__gallery-buttons">
                        <button class="create__gallery-upload btn btn-blue-dark">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 11.667C17.2788 11.667 17.0669 11.7548 16.9106 11.9111C16.7543 12.0674 16.6665 12.2793 16.6665 12.5003V15.8337C16.6665 16.0547 16.5787 16.2666 16.4224 16.4229C16.2661 16.5792 16.0542 16.667 15.8332 16.667H4.1665C3.94549 16.667 3.73353 16.5792 3.57725 16.4229C3.42097 16.2666 3.33317 16.0547 3.33317 15.8337V12.5003C3.33317 12.2793 3.24537 12.0674 3.08909 11.9111C2.93281 11.7548 2.72085 11.667 2.49984 11.667C2.27882 11.667 2.06686 11.7548 1.91058 11.9111C1.7543 12.0674 1.6665 12.2793 1.6665 12.5003V15.8337C1.6665 16.4967 1.9299 17.1326 2.39874 17.6014C2.86758 18.0703 3.50346 18.3337 4.1665 18.3337H15.8332C16.4962 18.3337 17.1321 18.0703 17.6009 17.6014C18.0698 17.1326 18.3332 16.4967 18.3332 15.8337V12.5003C18.3332 12.2793 18.2454 12.0674 18.0891 11.9111C17.9328 11.7548 17.7208 11.667 17.4998 11.667ZM9.40817 13.092C9.48742 13.1679 9.58088 13.2273 9.68317 13.267C9.78292 13.3111 9.89078 13.3339 9.99984 13.3339C10.1089 13.3339 10.2168 13.3111 10.3165 13.267C10.4188 13.2273 10.5123 13.1679 10.5915 13.092L13.9248 9.75866C14.0818 9.60174 14.1699 9.38891 14.1699 9.16699C14.1699 8.94507 14.0818 8.73224 13.9248 8.57533C13.7679 8.41841 13.5551 8.33025 13.3332 8.33025C13.1113 8.33025 12.8984 8.41841 12.7415 8.57533L10.8332 10.492V2.50033C10.8332 2.27931 10.7454 2.06735 10.5891 1.91107C10.4328 1.75479 10.2209 1.66699 9.99984 1.66699C9.77882 1.66699 9.56686 1.75479 9.41058 1.91107C9.2543 2.06735 9.1665 2.27931 9.1665 2.50033V10.492L7.25817 8.57533C7.18047 8.49763 7.08823 8.43599 6.98671 8.39394C6.88519 8.35189 6.77639 8.33025 6.6665 8.33025C6.55662 8.33025 6.44781 8.35189 6.3463 8.39394C6.24478 8.43599 6.15254 8.49763 6.07484 8.57533C5.99714 8.65302 5.9355 8.74527 5.89345 8.84678C5.8514 8.9483 5.82976 9.05711 5.82976 9.16699C5.82976 9.27687 5.8514 9.38568 5.89345 9.4872C5.9355 9.58872 5.99714 9.68096 6.07484 9.75866L9.40817 13.092Z" fill="#EEF1F5"/>
                        </svg>
                        <span>Загрузить</span>
                        <input type="file">
                    </button>
                        <button class="create__gallery-delete btn btn-blue-light">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6667 5.00033H13.3333V4.16699C13.3333 3.50395 13.0699 2.86807 12.6011 2.39923C12.1323 1.93038 11.4964 1.66699 10.8333 1.66699H9.16667C8.50363 1.66699 7.86774 1.93038 7.3989 2.39923C6.93006 2.86807 6.66667 3.50395 6.66667 4.16699V5.00033H3.33333C3.11232 5.00033 2.90036 5.08812 2.74408 5.2444C2.5878 5.40068 2.5 5.61264 2.5 5.83366C2.5 6.05467 2.5878 6.26663 2.74408 6.42291C2.90036 6.57919 3.11232 6.66699 3.33333 6.66699H4.16667V15.8337C4.16667 16.4967 4.43006 17.1326 4.8989 17.6014C5.36774 18.0703 6.00363 18.3337 6.66667 18.3337H13.3333C13.9964 18.3337 14.6323 18.0703 15.1011 17.6014C15.5699 17.1326 15.8333 16.4967 15.8333 15.8337V6.66699H16.6667C16.8877 6.66699 17.0996 6.57919 17.2559 6.42291C17.4122 6.26663 17.5 6.05467 17.5 5.83366C17.5 5.61264 17.4122 5.40068 17.2559 5.2444C17.0996 5.08812 16.8877 5.00033 16.6667 5.00033ZM8.33333 4.16699C8.33333 3.94598 8.42113 3.73402 8.57741 3.57774C8.73369 3.42146 8.94565 3.33366 9.16667 3.33366H10.8333C11.0543 3.33366 11.2663 3.42146 11.4226 3.57774C11.5789 3.73402 11.6667 3.94598 11.6667 4.16699V5.00033H8.33333V4.16699ZM14.1667 15.8337C14.1667 16.0547 14.0789 16.2666 13.9226 16.4229C13.7663 16.5792 13.5543 16.667 13.3333 16.667H6.66667C6.44565 16.667 6.23369 16.5792 6.07741 16.4229C5.92113 16.2666 5.83333 16.0547 5.83333 15.8337V6.66699H14.1667V15.8337Z" fill="#7786A5"/>
                        </svg>
                        <span>Удалить</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        `
        $(this).siblings(".create__blocks").append(block)
    })


    $(".create__tab-add").click(function() {
        $(this).hide()
        $(this).siblings(".create__new-tab").addClass("create__new-tab--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.create__new-tab');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".create__new-tab").hasClass("create__new-tab--active")) {
                $(".create__new-tab").removeClass("create__new-tab--active")
                $(".create__tab-add").show()
            }
        }
    });


    $(".create__new-tab button").click(function() {
        let input = $("#new-tab")

        if (!input.val()) {
            $(input).parent(".form-group2").addClass("form-group2--error")
            return
        }


        let tabLength = +$(this).parents(".tabs").find(".tab").length
        let newTab = `
            <div class="tab" data-tab-path="${tabLength+1}">${input.val()}</div>
        `
        let newTabContent = `
            <div class="tab__content" data-tab-path="${tabLength+1}">${tabLength+1}</div>
        `
        console.log(tabLength)
        $(`.tab[data-tab-path="${tabLength}"]`).after(newTab)
        $(`.tab__content[data-tab-path="${tabLength}"]`).after(newTabContent)
        $("#new-tab").val("")
        $(this).parent(".create__new-tab").removeClass("create__new-tab--active")
        $(this).parents(".tabs").find(".create__tab-add").show()



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


    $(".create-table__icon").click(function() {
        $(".photo-modal").addClass("photo-modal--active")
    })
    $(".photo-modal__bg").click(function() {
        $(".photo-modal").removeClass("photo-modal--active")
    })
})

function cartSelect() {
    let selectedCart = []

    $(".create-table__check--item input").each(function(index, el) {
        selectedCart.push($(el).prop('checked'))
    });

    if (selectedCart.find((i) => i === false) === false) {
        $(".create-table__check--all input").prop('checked', false)
    }

    if (selectedCart.find((i) => i === false) === undefined) {
        $(".create-table__check--all input").prop('checked', true)
    }
}


function addInfastructure() {
    let block = `
        <div class="create__block">
            <div class="create__group">
                <div class="create__grid">
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <input type='text' />
                        <label>Заголовок блока</label>
                    </fieldset>
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <textarea></textarea>
                        <label>Описание</label>
                    </fieldset>
                </div>
            </div>

            <div class="create__group">
                <div class="create__group-top">
                    <div class="create__group-title">Превью к видео</div>
                </div>
                <div class="create__gallery">
                    <div class="create__gallery-buttons">
                        <button class="create__gallery-upload btn btn-blue-dark">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 11.667C17.2788 11.667 17.0669 11.7548 16.9106 11.9111C16.7543 12.0674 16.6665 12.2793 16.6665 12.5003V15.8337C16.6665 16.0547 16.5787 16.2666 16.4224 16.4229C16.2661 16.5792 16.0542 16.667 15.8332 16.667H4.1665C3.94549 16.667 3.73353 16.5792 3.57725 16.4229C3.42097 16.2666 3.33317 16.0547 3.33317 15.8337V12.5003C3.33317 12.2793 3.24537 12.0674 3.08909 11.9111C2.93281 11.7548 2.72085 11.667 2.49984 11.667C2.27882 11.667 2.06686 11.7548 1.91058 11.9111C1.7543 12.0674 1.6665 12.2793 1.6665 12.5003V15.8337C1.6665 16.4967 1.9299 17.1326 2.39874 17.6014C2.86758 18.0703 3.50346 18.3337 4.1665 18.3337H15.8332C16.4962 18.3337 17.1321 18.0703 17.6009 17.6014C18.0698 17.1326 18.3332 16.4967 18.3332 15.8337V12.5003C18.3332 12.2793 18.2454 12.0674 18.0891 11.9111C17.9328 11.7548 17.7208 11.667 17.4998 11.667ZM9.40817 13.092C9.48742 13.1679 9.58088 13.2273 9.68317 13.267C9.78292 13.3111 9.89078 13.3339 9.99984 13.3339C10.1089 13.3339 10.2168 13.3111 10.3165 13.267C10.4188 13.2273 10.5123 13.1679 10.5915 13.092L13.9248 9.75866C14.0818 9.60174 14.1699 9.38891 14.1699 9.16699C14.1699 8.94507 14.0818 8.73224 13.9248 8.57533C13.7679 8.41841 13.5551 8.33025 13.3332 8.33025C13.1113 8.33025 12.8984 8.41841 12.7415 8.57533L10.8332 10.492V2.50033C10.8332 2.27931 10.7454 2.06735 10.5891 1.91107C10.4328 1.75479 10.2209 1.66699 9.99984 1.66699C9.77882 1.66699 9.56686 1.75479 9.41058 1.91107C9.2543 2.06735 9.1665 2.27931 9.1665 2.50033V10.492L7.25817 8.57533C7.18047 8.49763 7.08823 8.43599 6.98671 8.39394C6.88519 8.35189 6.77639 8.33025 6.6665 8.33025C6.55662 8.33025 6.44781 8.35189 6.3463 8.39394C6.24478 8.43599 6.15254 8.49763 6.07484 8.57533C5.99714 8.65302 5.9355 8.74527 5.89345 8.84678C5.8514 8.9483 5.82976 9.05711 5.82976 9.16699C5.82976 9.27687 5.8514 9.38568 5.89345 9.4872C5.9355 9.58872 5.99714 9.68096 6.07484 9.75866L9.40817 13.092Z" fill="#EEF1F5"/>
                        </svg>
                        <span>Загрузить</span>
                        <input type="file">
                    </button>
                        <button class="create__gallery-delete btn btn-blue-light">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6667 5.00033H13.3333V4.16699C13.3333 3.50395 13.0699 2.86807 12.6011 2.39923C12.1323 1.93038 11.4964 1.66699 10.8333 1.66699H9.16667C8.50363 1.66699 7.86774 1.93038 7.3989 2.39923C6.93006 2.86807 6.66667 3.50395 6.66667 4.16699V5.00033H3.33333C3.11232 5.00033 2.90036 5.08812 2.74408 5.2444C2.5878 5.40068 2.5 5.61264 2.5 5.83366C2.5 6.05467 2.5878 6.26663 2.74408 6.42291C2.90036 6.57919 3.11232 6.66699 3.33333 6.66699H4.16667V15.8337C4.16667 16.4967 4.43006 17.1326 4.8989 17.6014C5.36774 18.0703 6.00363 18.3337 6.66667 18.3337H13.3333C13.9964 18.3337 14.6323 18.0703 15.1011 17.6014C15.5699 17.1326 15.8333 16.4967 15.8333 15.8337V6.66699H16.6667C16.8877 6.66699 17.0996 6.57919 17.2559 6.42291C17.4122 6.26663 17.5 6.05467 17.5 5.83366C17.5 5.61264 17.4122 5.40068 17.2559 5.2444C17.0996 5.08812 16.8877 5.00033 16.6667 5.00033ZM8.33333 4.16699C8.33333 3.94598 8.42113 3.73402 8.57741 3.57774C8.73369 3.42146 8.94565 3.33366 9.16667 3.33366H10.8333C11.0543 3.33366 11.2663 3.42146 11.4226 3.57774C11.5789 3.73402 11.6667 3.94598 11.6667 4.16699V5.00033H8.33333V4.16699ZM14.1667 15.8337C14.1667 16.0547 14.0789 16.2666 13.9226 16.4229C13.7663 16.5792 13.5543 16.667 13.3333 16.667H6.66667C6.44565 16.667 6.23369 16.5792 6.07741 16.4229C5.92113 16.2666 5.83333 16.0547 5.83333 15.8337V6.66699H14.1667V15.8337Z" fill="#7786A5"/>
                        </svg>
                        <span>Удалить</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        `
    $(".create__blocks").append(block)
}

function addAbout() {
    let block = `
            <div class="create__block">
            <div class="create__group">
                <div class="create__group-selects">
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="Строительная компания" />
                        </fieldset>
                        <fieldset class='create__form-group create__price-input--small create__price-input--small270 create__price-input form-group2'>
                            <input type='text' value="" />
                        </fieldset>
                    </div>
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="Стаж на рынке" />
                        </fieldset>
                        <div class="custom-select custom-select--270">
                            <div class="custom-select__target">
                                <input disabled type="text" value="12 лет">
                            </div>
                            <div class="custom-select__dropdown">
                                <div class="custom-select__dropdown-inner">
                                    <div class="custom-select__dropdown-item custom-select__dropdown-item--selected">
                                        <span>12 лет</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.82918 8.73635C3.73372 8.83237 3.60349 8.88594 3.46821 8.88594C3.33292 8.88594 3.20269 8.83237 3.10723 8.73635L0.224383 5.85304C-0.0747942 5.55386 -0.0747942 5.06873 0.224383 4.77011L0.585358 4.40905C0.884628 4.10987 1.3692 4.10987 1.66838 4.40905L3.46821 6.20897L8.3316 1.34548C8.63087 1.0463 9.11591 1.0463 9.41462 1.34548L9.7756 1.70655C10.0748 2.00572 10.0748 2.49076 9.7756 2.78947L3.82918 8.73635Z" fill="#6FB08D"/>
                                        </svg>
                                    </div>
                                    <div class="custom-select__dropdown-item">
                                        <span>2</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.82918 8.73635C3.73372 8.83237 3.60349 8.88594 3.46821 8.88594C3.33292 8.88594 3.20269 8.83237 3.10723 8.73635L0.224383 5.85304C-0.0747942 5.55386 -0.0747942 5.06873 0.224383 4.77011L0.585358 4.40905C0.884628 4.10987 1.3692 4.10987 1.66838 4.40905L3.46821 6.20897L8.3316 1.34548C8.63087 1.0463 9.11591 1.0463 9.41462 1.34548L9.7756 1.70655C10.0748 2.00572 10.0748 2.49076 9.7756 2.78947L3.82918 8.73635Z" fill="#6FB08D"/>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="Специализация" />
                        </fieldset>
                        <div class="custom-select custom-select--270">
                            <div class="custom-select__target">
                                <input disabled type="text" value="Строительство жилой не">
                            </div>
                            <div class="custom-select__dropdown">
                                <div class="custom-select__dropdown-inner">
                                    <div class="custom-select__dropdown-item custom-select__dropdown-item--selected">
                                        <span>Строительство жилой не</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.82918 8.73635C3.73372 8.83237 3.60349 8.88594 3.46821 8.88594C3.33292 8.88594 3.20269 8.83237 3.10723 8.73635L0.224383 5.85304C-0.0747942 5.55386 -0.0747942 5.06873 0.224383 4.77011L0.585358 4.40905C0.884628 4.10987 1.3692 4.10987 1.66838 4.40905L3.46821 6.20897L8.3316 1.34548C8.63087 1.0463 9.11591 1.0463 9.41462 1.34548L9.7756 1.70655C10.0748 2.00572 10.0748 2.49076 9.7756 2.78947L3.82918 8.73635Z" fill="#6FB08D"/>
                                        </svg>
                                    </div>
                                    <div class="custom-select__dropdown-item">
                                        <span>2</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.82918 8.73635C3.73372 8.83237 3.60349 8.88594 3.46821 8.88594C3.33292 8.88594 3.20269 8.83237 3.10723 8.73635L0.224383 5.85304C-0.0747942 5.55386 -0.0747942 5.06873 0.224383 4.77011L0.585358 4.40905C0.884628 4.10987 1.3692 4.10987 1.66838 4.40905L3.46821 6.20897L8.3316 1.34548C8.63087 1.0463 9.11591 1.0463 9.41462 1.34548L9.7756 1.70655C10.0748 2.00572 10.0748 2.49076 9.7756 2.78947L3.82918 8.73635Z" fill="#6FB08D"/>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="Уже построено" />
                        </fieldset>
                        <fieldset class='create__form-group create__price-input--small create__price-input--small270 create__price-input form-group2'>
                            <input type='text' value="" />
                        </fieldset>
                    </div>
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="В стадии строительства" />
                        </fieldset>
                        <fieldset class='create__form-group create__price-input--small create__price-input--small270 create__price-input form-group2'>
                            <input type='text' value="" />
                        </fieldset>
                    </div>
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="Репутация" />
                        </fieldset>
                        <div class="custom-select custom-select--270">
                            <div class="custom-select__target">
                                <input disabled type="text" value="78% покупателей готовы">
                            </div>
                            <div class="custom-select__dropdown">
                                <div class="custom-select__dropdown-inner">
                                    <div class="custom-select__dropdown-item custom-select__dropdown-item--selected">
                                        <span>78% покупателей готовы</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.82918 8.73635C3.73372 8.83237 3.60349 8.88594 3.46821 8.88594C3.33292 8.88594 3.20269 8.83237 3.10723 8.73635L0.224383 5.85304C-0.0747942 5.55386 -0.0747942 5.06873 0.224383 4.77011L0.585358 4.40905C0.884628 4.10987 1.3692 4.10987 1.66838 4.40905L3.46821 6.20897L8.3316 1.34548C8.63087 1.0463 9.11591 1.0463 9.41462 1.34548L9.7756 1.70655C10.0748 2.00572 10.0748 2.49076 9.7756 2.78947L3.82918 8.73635Z" fill="#6FB08D"/>
                                        </svg>
                                    </div>
                                    <div class="custom-select__dropdown-item">
                                        <span>2</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.82918 8.73635C3.73372 8.83237 3.60349 8.88594 3.46821 8.88594C3.33292 8.88594 3.20269 8.83237 3.10723 8.73635L0.224383 5.85304C-0.0747942 5.55386 -0.0747942 5.06873 0.224383 4.77011L0.585358 4.40905C0.884628 4.10987 1.3692 4.10987 1.66838 4.40905L3.46821 6.20897L8.3316 1.34548C8.63087 1.0463 9.11591 1.0463 9.41462 1.34548L9.7756 1.70655C10.0748 2.00572 10.0748 2.49076 9.7756 2.78947L3.82918 8.73635Z" fill="#6FB08D"/>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="create__group-select create__price">
                        <fieldset class='create__form-group create__price-input form-group2'>
                            <input type='text' disabled value="Регионы строительства" />
                        </fieldset>
                        <fieldset class='create__form-group create__price-input--small create__price-input--small270 create__price-input form-group2'>
                            <input type='text' value="" />
                        </fieldset>
                    </div>
                </div>
                <button class="create__add create__group-select-add btn btn-blue">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.33301V16.6663" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.6668 10H3.3335" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>

            <div class="create__group">
                <div class="create__group-top">
                    <div class="create__group-title">О застройщике</div>
                </div>
                <div class="create__grid">
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <input type='text' />
                        <label>Заголовок блока</label>
                    </fieldset>
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <textarea></textarea>
                        <label>Описание</label>
                    </fieldset>
                </div>
            </div>

            <div class="create__group">
                <div class="create__group-top">
                    <div class="create__group-title">Превью к видео</div>
                </div>
                <div class="create__gallery">
                    <div class="create__gallery-buttons">
                        <button class="create__gallery-upload btn btn-blue-dark">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 11.667C17.2788 11.667 17.0669 11.7548 16.9106 11.9111C16.7543 12.0674 16.6665 12.2793 16.6665 12.5003V15.8337C16.6665 16.0547 16.5787 16.2666 16.4224 16.4229C16.2661 16.5792 16.0542 16.667 15.8332 16.667H4.1665C3.94549 16.667 3.73353 16.5792 3.57725 16.4229C3.42097 16.2666 3.33317 16.0547 3.33317 15.8337V12.5003C3.33317 12.2793 3.24537 12.0674 3.08909 11.9111C2.93281 11.7548 2.72085 11.667 2.49984 11.667C2.27882 11.667 2.06686 11.7548 1.91058 11.9111C1.7543 12.0674 1.6665 12.2793 1.6665 12.5003V15.8337C1.6665 16.4967 1.9299 17.1326 2.39874 17.6014C2.86758 18.0703 3.50346 18.3337 4.1665 18.3337H15.8332C16.4962 18.3337 17.1321 18.0703 17.6009 17.6014C18.0698 17.1326 18.3332 16.4967 18.3332 15.8337V12.5003C18.3332 12.2793 18.2454 12.0674 18.0891 11.9111C17.9328 11.7548 17.7208 11.667 17.4998 11.667ZM9.40817 13.092C9.48742 13.1679 9.58088 13.2273 9.68317 13.267C9.78292 13.3111 9.89078 13.3339 9.99984 13.3339C10.1089 13.3339 10.2168 13.3111 10.3165 13.267C10.4188 13.2273 10.5123 13.1679 10.5915 13.092L13.9248 9.75866C14.0818 9.60174 14.1699 9.38891 14.1699 9.16699C14.1699 8.94507 14.0818 8.73224 13.9248 8.57533C13.7679 8.41841 13.5551 8.33025 13.3332 8.33025C13.1113 8.33025 12.8984 8.41841 12.7415 8.57533L10.8332 10.492V2.50033C10.8332 2.27931 10.7454 2.06735 10.5891 1.91107C10.4328 1.75479 10.2209 1.66699 9.99984 1.66699C9.77882 1.66699 9.56686 1.75479 9.41058 1.91107C9.2543 2.06735 9.1665 2.27931 9.1665 2.50033V10.492L7.25817 8.57533C7.18047 8.49763 7.08823 8.43599 6.98671 8.39394C6.88519 8.35189 6.77639 8.33025 6.6665 8.33025C6.55662 8.33025 6.44781 8.35189 6.3463 8.39394C6.24478 8.43599 6.15254 8.49763 6.07484 8.57533C5.99714 8.65302 5.9355 8.74527 5.89345 8.84678C5.8514 8.9483 5.82976 9.05711 5.82976 9.16699C5.82976 9.27687 5.8514 9.38568 5.89345 9.4872C5.9355 9.58872 5.99714 9.68096 6.07484 9.75866L9.40817 13.092Z" fill="#EEF1F5"/>
                        </svg>
                        <span>Загрузить</span>
                        <input type="file">
                    </button>
                        <button class="create__gallery-delete btn btn-blue-light">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6667 5.00033H13.3333V4.16699C13.3333 3.50395 13.0699 2.86807 12.6011 2.39923C12.1323 1.93038 11.4964 1.66699 10.8333 1.66699H9.16667C8.50363 1.66699 7.86774 1.93038 7.3989 2.39923C6.93006 2.86807 6.66667 3.50395 6.66667 4.16699V5.00033H3.33333C3.11232 5.00033 2.90036 5.08812 2.74408 5.2444C2.5878 5.40068 2.5 5.61264 2.5 5.83366C2.5 6.05467 2.5878 6.26663 2.74408 6.42291C2.90036 6.57919 3.11232 6.66699 3.33333 6.66699H4.16667V15.8337C4.16667 16.4967 4.43006 17.1326 4.8989 17.6014C5.36774 18.0703 6.00363 18.3337 6.66667 18.3337H13.3333C13.9964 18.3337 14.6323 18.0703 15.1011 17.6014C15.5699 17.1326 15.8333 16.4967 15.8333 15.8337V6.66699H16.6667C16.8877 6.66699 17.0996 6.57919 17.2559 6.42291C17.4122 6.26663 17.5 6.05467 17.5 5.83366C17.5 5.61264 17.4122 5.40068 17.2559 5.2444C17.0996 5.08812 16.8877 5.00033 16.6667 5.00033ZM8.33333 4.16699C8.33333 3.94598 8.42113 3.73402 8.57741 3.57774C8.73369 3.42146 8.94565 3.33366 9.16667 3.33366H10.8333C11.0543 3.33366 11.2663 3.42146 11.4226 3.57774C11.5789 3.73402 11.6667 3.94598 11.6667 4.16699V5.00033H8.33333V4.16699ZM14.1667 15.8337C14.1667 16.0547 14.0789 16.2666 13.9226 16.4229C13.7663 16.5792 13.5543 16.667 13.3333 16.667H6.66667C6.44565 16.667 6.23369 16.5792 6.07741 16.4229C5.92113 16.2666 5.83333 16.0547 5.83333 15.8337V6.66699H14.1667V15.8337Z" fill="#7786A5"/>
                        </svg>
                        <span>Удалить</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        `
    $(".create__blocks").append(block)
}

function addService() {
    let block = `
        <div class="create__block">
            <div class="create__group">
                <div class="create__grid">
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <input type='text' />
                        <label>Заголовок блока</label>
                    </fieldset>
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <textarea></textarea>
                        <label>Описание</label>
                    </fieldset>
                </div>
            </div>

            <div class="create__group">
                <div class="create__group-top">
                    <div class="create__group-title">Изображение</div>
                </div>
                <div class="create__gallery">
                    <div class="create__gallery-buttons">
                        <button class="create__gallery-upload btn btn-blue-dark">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 11.667C17.2788 11.667 17.0669 11.7548 16.9106 11.9111C16.7543 12.0674 16.6665 12.2793 16.6665 12.5003V15.8337C16.6665 16.0547 16.5787 16.2666 16.4224 16.4229C16.2661 16.5792 16.0542 16.667 15.8332 16.667H4.1665C3.94549 16.667 3.73353 16.5792 3.57725 16.4229C3.42097 16.2666 3.33317 16.0547 3.33317 15.8337V12.5003C3.33317 12.2793 3.24537 12.0674 3.08909 11.9111C2.93281 11.7548 2.72085 11.667 2.49984 11.667C2.27882 11.667 2.06686 11.7548 1.91058 11.9111C1.7543 12.0674 1.6665 12.2793 1.6665 12.5003V15.8337C1.6665 16.4967 1.9299 17.1326 2.39874 17.6014C2.86758 18.0703 3.50346 18.3337 4.1665 18.3337H15.8332C16.4962 18.3337 17.1321 18.0703 17.6009 17.6014C18.0698 17.1326 18.3332 16.4967 18.3332 15.8337V12.5003C18.3332 12.2793 18.2454 12.0674 18.0891 11.9111C17.9328 11.7548 17.7208 11.667 17.4998 11.667ZM9.40817 13.092C9.48742 13.1679 9.58088 13.2273 9.68317 13.267C9.78292 13.3111 9.89078 13.3339 9.99984 13.3339C10.1089 13.3339 10.2168 13.3111 10.3165 13.267C10.4188 13.2273 10.5123 13.1679 10.5915 13.092L13.9248 9.75866C14.0818 9.60174 14.1699 9.38891 14.1699 9.16699C14.1699 8.94507 14.0818 8.73224 13.9248 8.57533C13.7679 8.41841 13.5551 8.33025 13.3332 8.33025C13.1113 8.33025 12.8984 8.41841 12.7415 8.57533L10.8332 10.492V2.50033C10.8332 2.27931 10.7454 2.06735 10.5891 1.91107C10.4328 1.75479 10.2209 1.66699 9.99984 1.66699C9.77882 1.66699 9.56686 1.75479 9.41058 1.91107C9.2543 2.06735 9.1665 2.27931 9.1665 2.50033V10.492L7.25817 8.57533C7.18047 8.49763 7.08823 8.43599 6.98671 8.39394C6.88519 8.35189 6.77639 8.33025 6.6665 8.33025C6.55662 8.33025 6.44781 8.35189 6.3463 8.39394C6.24478 8.43599 6.15254 8.49763 6.07484 8.57533C5.99714 8.65302 5.9355 8.74527 5.89345 8.84678C5.8514 8.9483 5.82976 9.05711 5.82976 9.16699C5.82976 9.27687 5.8514 9.38568 5.89345 9.4872C5.9355 9.58872 5.99714 9.68096 6.07484 9.75866L9.40817 13.092Z" fill="#EEF1F5"/>
                        </svg>
                        <span>Загрузить</span>
                        <input type="file">
                    </button>
                        <button class="create__gallery-delete btn btn-blue-light">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6667 5.00033H13.3333V4.16699C13.3333 3.50395 13.0699 2.86807 12.6011 2.39923C12.1323 1.93038 11.4964 1.66699 10.8333 1.66699H9.16667C8.50363 1.66699 7.86774 1.93038 7.3989 2.39923C6.93006 2.86807 6.66667 3.50395 6.66667 4.16699V5.00033H3.33333C3.11232 5.00033 2.90036 5.08812 2.74408 5.2444C2.5878 5.40068 2.5 5.61264 2.5 5.83366C2.5 6.05467 2.5878 6.26663 2.74408 6.42291C2.90036 6.57919 3.11232 6.66699 3.33333 6.66699H4.16667V15.8337C4.16667 16.4967 4.43006 17.1326 4.8989 17.6014C5.36774 18.0703 6.00363 18.3337 6.66667 18.3337H13.3333C13.9964 18.3337 14.6323 18.0703 15.1011 17.6014C15.5699 17.1326 15.8333 16.4967 15.8333 15.8337V6.66699H16.6667C16.8877 6.66699 17.0996 6.57919 17.2559 6.42291C17.4122 6.26663 17.5 6.05467 17.5 5.83366C17.5 5.61264 17.4122 5.40068 17.2559 5.2444C17.0996 5.08812 16.8877 5.00033 16.6667 5.00033ZM8.33333 4.16699C8.33333 3.94598 8.42113 3.73402 8.57741 3.57774C8.73369 3.42146 8.94565 3.33366 9.16667 3.33366H10.8333C11.0543 3.33366 11.2663 3.42146 11.4226 3.57774C11.5789 3.73402 11.6667 3.94598 11.6667 4.16699V5.00033H8.33333V4.16699ZM14.1667 15.8337C14.1667 16.0547 14.0789 16.2666 13.9226 16.4229C13.7663 16.5792 13.5543 16.667 13.3333 16.667H6.66667C6.44565 16.667 6.23369 16.5792 6.07741 16.4229C5.92113 16.2666 5.83333 16.0547 5.83333 15.8337V6.66699H14.1667V15.8337Z" fill="#7786A5"/>
                        </svg>
                        <span>Удалить</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        `
    $(".create__blocks").append(block)
}

function addPlus() {
    block = `
        <div class="create__block">
            <div class="create__group">
                <div class="create__grid">
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <input type='text' />
                        <label>Заголовок блока</label>
                    </fieldset>
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <textarea></textarea>
                        <label>Описание</label>
                    </fieldset>
                </div>
            </div>
        </div>
    `
    $(".create__blocks--plus").append(block)
}

function addMinus() {
    block = `
        <div class="create__block">
            <div class="create__group">
                <div class="create__grid">
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <input type='text' />
                        <label>Заголовок блока</label>
                    </fieldset>
                    <fieldset class='create__form-group create__form-group--100 create__form-group--800 form-group2'>
                        <textarea></textarea>
                        <label>Описание</label>
                    </fieldset>
                </div>
            </div>
        </div>
    `
    $(".create__blocks--minus").append(block)
}

function addFaq(e) {

}