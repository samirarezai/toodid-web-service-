/*٠١٢٣٤٥٦٧٨٩*/
/*=======================get amount ======================*/
var color_gray = '#696969';
var color_background = 'rgb(153,208,192)';
var license = true;
var license_single = true;
var parser = new UAParser();
var result = parser.getResult();
var setBrowser = result.browser.name;
var setDevice = result.device.model;
var setOs = result.os.name;
var heightChange_chrome = "0";
var heightChange_safari = "0";
var sum = 0;

if (setDevice === undefined) {
    setDevice = "computer";
}
if (result.browser.name === 'Chrome') {
    $('.main').addClass('change-height');
    heightChange_chrome = "1";
} else if ((result.browser.name === 'Safari')) {

    $('.main').addClass('safari-style');
    heightChange_safari = "1";
    $('.main').height(window.innerHeight);
    var height = window.innerHeight ? window.innerHeight : $(window).height();
    $('.main').height(height);
}


$(document).ready(function () {
    /*=======================check======================*/
    setInterval(function () {
        var phoneNumber = $('#phone-number').val();
        if ((phoneNumber !== "" && license === false) && (license_single === true)) {
            $('.error').html("");
            $('.error').addClass('hidden');
        }
        if (phoneNumber.length === 11) {
            $('.submit-btn').addClass('submit-animate');
        }
        if (((phoneNumber[2] === '1') || (phoneNumber[2] === '9')) && license_single === false) {
            $('.error').html("");
            $('.error').addClass('hidden');
            license_single = true;
        }
    }, 300);
    /*=======================example======================*/
    $('#phone-number').mask('01233333333', {
        'translation': {
            0: {pattern: /[0٠]|(\u06F0)/},
            1: {pattern: /[9٩]|(\u06F9)/},
            2: {pattern: /[19١٩]|(\u06F1)|(\u06F9)/},
            3: {pattern: /[0-9*]|[\u06F0-\u06F9]|[۰۱۲۳۴۵۶۷۸۹]/}
        },
        'onInvalid': function (val, e, f, invalid, options) {
            if ((invalid[0].p === 2 && invalid[0].v === '3') || (invalid[0].p === 2 && invalid[0].v === '0') || (invalid[0].p === 2 && invalid[0].v === '2')||(invalid[0].p === 2 && invalid[0].v === '۳')|| (invalid[0].p === 2 && invalid[0].v === '۰')|| (invalid[0].p === 2 && invalid[0].v === '۲')) {
                $('.error').removeClass('hidden');
                $('.error').html("امکان استفاده برای مشترکین همراه اول مقدوراست");
                license_single = false;
            } else {
                $('.error').html("");
                $('.error').addClass('hidden');
                license_single = true;
            }
        }
    });

    /*=======================go to class hidden======================*/
    $(".first-wrapper .joint#PsychologyQuestion1 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion1').addClass("hidden");
            $('.joint#PsychologyQuestion2').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion2 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion2').addClass("hidden");
            $('.joint#PsychologyQuestion3').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion3 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion3').addClass("hidden");
            $('.joint#PsychologyQuestion4').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion4 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion4').addClass("hidden");
            $('.joint#PsychologyQuestion5').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion5 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion5').addClass("hidden");
            $('.joint#PsychologyQuestion6').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion6 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion6').addClass("hidden");
            $('.joint#PsychologyQuestion7').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion7 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion7').addClass("hidden");
            $('.joint#PsychologyQuestion8').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion8 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion8').addClass("hidden");
            $('.joint#PsychologyQuestion9').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion9 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion9').addClass("hidden");
            $('.joint#PsychologyQuestion10').removeClass("hidden");
        }, 300);

    });
    $(".first-wrapper .joint#PsychologyQuestion10 .item").click(function () {
        sum = sum + Number($(this).attr('data-value'));
        setTimeout(function () {
            $('.joint#PsychologyQuestion10').addClass("hidden");
            $('body.body').css('backgroundColor', color_background);
            $('.main').css('background', color_background);
            $(".image-box").removeClass("hidden");
            $(".image-box").css("display",'flex');
            $(".third-wrapper").slideDown("hidden");
            $(".third-wrapper").removeClass("hidden");
            if (result.browser.name === 'Chrome') {
                $('.main').addClass('change-height');
                heightChange_chrome = "1";
            } else if ((result.browser.name === 'Safari')&&(navigator.platform == 'iPhone' || navigator.platform == 'iPod' ||  navigator.platform == 'iPad')) {
                $(".image-box").css("display",'block');
            }
        }, 300);

    });
    /*=======================js like backend======================*/
    $('#submit-btn').on('click', function (event) {
        event.preventDefault();
        var phoneNumber = $('#phone-number').val();
        var phoneNumber_user = phoneNumber;
        var location_href = window.location.href;
        var phone;
        var isTrue = "0";
        if (phoneNumber === "") {
            $('.error').removeClass('hidden');
            $('.error').html("شماره موبایل خودرا وارد نمایید");
            license = false;
        } else {
            $('.error').html("");
            $('.error').addClass('hidden');
            license = true;
        }
        if ((license === false) || phoneNumber.length !== 11) {
            return false;
        }
        /*  if (phoneNumber === "") {
              $('.error').removeClass('hidden');
              $('.error').html("شماره موبایل خودرا وارد نمایید");
              license = false;
          } else if (!((number_regex.test(phoneNumber)) && (((phoneNumber.length === (11)) && (phoneNumber[0] === '0')) || ((phoneNumber.length === (13)) && (phoneNumber[0] === '+')) || ((phoneNumber.length === (14)) && (phoneNumber[0] === '0') && (phoneNumber[1] === '0'))))) { // if invalid email
              $('.error').removeClass('hidden');
              $('.error').html("شماره موبایل وارد شده معتبر نمی باشد");
              license = false;
          } else {
              $('.error').addClass('hidden');
          }

          if (license === false) {
              return false;
          }*/
        var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        function convertToEnglishNumber(input) {
            return input.replace(/[\u06F0-\u06F90]/g, function (m) {
                return persianDigits.indexOf(m);
            });
        }
        var regx_pesian_number =/[\u06F0-\u06F9]/;
        phone = phoneNumber.slice(1, 11);
        if(regx_pesian_number.test(phone)){
            phoneNumber = "۰۰۹۸" + phone;
            phoneNumber = convertToEnglishNumber(phoneNumber);
        }else {
            phoneNumber = "0098" + phone;
        }

        /* if (phoneNumber.length === (11)) {
             phone = phoneNumber.slice(1, 11);
             phoneNumber = "0098" + phone;
         }
         if ((phoneNumber.length === (13))) {
             phone = phoneNumber.slice(3, 13);
             phoneNumber = "0098" + phone;
         }*/

        /*===================user info=================*/


        /*===================ajax=================*/
        $(this).val('');
        $(this).css('backgroundColor', color_gray);
        $('.loading__overlay').removeClass('hidden');
        $.post("http://www.ofoghplus.com/app/api/phone/", {
            phoneNumber: phoneNumber,
            os: setOs,
            deviceType: setDevice,
            browser: setBrowser,
            url: location_href
        }, function (response) {
            $(this).css('backgroundColor', '#C43E97');
            $('.icon_loading').addClass('hidden');
            $(this).val('تایید');
            if (response.statusCode != 201) {
                $(".error").html(response.message);
            }
            var response_string = JSON.stringify(response);
            localStorage.setItem("response", response_string);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("phoneNumber_user", phoneNumber_user);
            localStorage.setItem("heightChange_chrome", heightChange_chrome);
            localStorage.setItem("heightChange_safari", heightChange_safari);
            localStorage.setItem("sum", sum);
            if (response.statusCode == 201) {
                window.location.pathname = "/l/toodid-question/verify.html";
                isTrue = "1";
                localStorage.setItem("isTrue", isTrue);
                ('#phoneNumber').val("");
            }
        });
        return false;
    });

});
