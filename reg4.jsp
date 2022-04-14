<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%
    String email = (String) session.getAttribute("email");
    String email_exist_status = (String) session.getAttribute("email_exist_status");
    if(email==null){email="";}
    if(email_exist_status==null){email_exist_status="";}
%>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <link rel="stylesheet" href="css/swiper-bundle.min.css">
            <link rel="stylesheet" href="css/apexcharts.css">
            <link rel="stylesheet" href="css/nice-select.css">
            <link rel="stylesheet" href="css/jquery-ui.css">
            <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css">
            <link rel="stylesheet" href="css/style.css">
            <title>Регистрация</title>
        </head>

        <body>
            <div class="server-data">
                <span class="server-email"><%= email %></span>
                <span class="server-status"><%= email_exist_status %></span>
            </div>
            <div class="wrapper">

                <div class="auth">
                    <div class="auth__wrap">
                        <div class="auth__title">Укажите свой E-mail</div>
                        <div class="auth__desc">Это конфиденциально!</div>
                        <form action="" class="auth__form" id="regForm2">
                            <fieldset class='auth__form-group form-group2'>
                                <input type='email' name="email" />
                                <label>E-mail</label>
                                <div class="form-group2__error-text">
                                    <span class="codeEmpty">Введите E-mail</span>
                                    <span class="codeIncorrect">
                                        <%= email %> уже зарегистрирован
                                    </span>
                                </div>
                                <span class="form-group2__error-text"></span>
                            </fieldset>
                            <div class="auth__nav">
                                <a href="reg3.jsp" class="auth__back btn btn-blue-light">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.71 17.7102C12.8037 17.6172 12.8781 17.5066 12.9289 17.3848C12.9797 17.2629 13.0058 17.1322 13.0058 17.0002C13.0058 16.8682 12.9797 16.7375 12.9289 16.6156C12.8781 16.4937 12.8037 16.3831 12.71 16.2902L9.41 13.0002L17 13.0002C17.2652 13.0002 17.5196 12.8948 17.7071 12.7073C17.8946 12.5198 18 12.2654 18 12.0002C18 11.735 17.8946 11.4806 17.7071 11.2931C17.5196 11.1055 17.2652 11.0002 17 11.0002L9.41 11.0002L12.71 7.71019C12.8983 7.52188 13.0041 7.26649 13.0041 7.00019C13.0041 6.73388 12.8983 6.47849 12.71 6.29019C12.5217 6.10188 12.2663 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019L6.29 11.2902C6.19896 11.3853 6.12759 11.4974 6.08 11.6202C6.02709 11.7399 5.99977 11.8693 5.99977 12.0002C5.99977 12.1311 6.02709 12.2605 6.08 12.3802C6.12759 12.5029 6.19896 12.6151 6.29 12.7102L11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102Z" fill="#7786A5"/>
                                    </svg>
                                </a>
                                <span class="auth__disabled-btn"></span>
                                <button formaction="index?action=reg_step_4" formmethod="POST" type="submit" class="auth__btn btn btn-blue">Далее</button>
                            </div>
                        </form>

                    </div>
                </div>



            </div>

            <script src="js/jquery-1.11.3.min.js"></script>
            <script src="js/swiper.js"></script>
            <script src="js/apexcharts.min.js"></script>
            <script src="js/jquery.nice-select.min.js"></script>
            <script src="js/jquery-ui.min.js"></script>
            <script src="js/jquery.ui.touch-punch.min.js"></script>
            <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
            <script src="js/jquery.maskedinput.min.js"></script>
            <script src="js/index.js"></script>
            <script src="js/auth.js"></script>
            <script src="js/global.js"></script>

            <script>
                let localEmail = sessionStorage.getItem('email');
                if (localEmail !== 'undefined') {
                    $("input[name='email']").val(localEmail)
                }

                let emailServer = $(".server-email").html()
                let emailStatus = $(".server-status").html()
                let email = $("input[name='email']")
                console.log(emailStatus)

                if (emailStatus === "false") {
                    console.log(true)
                    $(email).parents(".form-group2").addClass("form-group2--error")
                    $(".form-group2__error-text").addClass("form-group2__error-code")
                } else {
                    console.log(false)
                    $(".form-group2__error-text").removeClass("form-group2__error-code")
                }

                function validate() {

                    console.log($(email).val().length)
                    if ($(email).val().length < 2) {
                        $(email).parents(".form-group2").addClass("form-group2--error")
                    } else {
                        $(email).parents(".form-group2").removeClass("form-group2--error")
                    }

                    if ($(email).val().length < 2) {
                        return false
                    }
                    sessionStorage.setItem('email', $(email).val());
                    return true
                }
                $(".auth__disabled-btn").click(function() {
                    if (validate()) {
                        $("button[type='submit']").click()
                    }
                });
            </script>
        </body>

        </html>