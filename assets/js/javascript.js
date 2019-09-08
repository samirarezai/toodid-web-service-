/*=======================function for change english number to persian ======================*/
function ConvertNumberToPersion() {
    persian = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};

    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++)
                    el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
        }
    }
    traverse(document.body);
}
var license = true;
var parser = new UAParser();
var result = parser.getResult();
var setBrowser = result.browser.name;
var setDevice = result.device.model;
var setOs = result.os.name;
var heightChange = "0";
if (setDevice === undefined) {
    setDevice = "computer";
}
if (result.browser.name === 'Chrome') {
    $('.main').addClass('change-height');
    heightChange = "1";
}

$(document).ready(function () {
    /*=======================check======================*/
    setInterval(function () {
        var phoneNumber = $('#phone-number').val();
        if (phoneNumber !== "" &&  license === false) {
            $('.error').html("");
            $('.error').addClass('hidden');
        }
        if (phoneNumber.length === 11) {
            $('.submit-btn').addClass('submit-animate');
        }
    }, 300);
    /*=======================example======================*/
    $('#phone-number').mask('01233333333', {
        'translation': {
            0: {pattern: /(0)/},
            1: {pattern: /(9)/},
            2: {pattern: /(1|9)/},
            3: {pattern: /[0-9*]/}
        }
    });

    /*=======================go to class hidden======================*/
    $(".first-wrapper .list .item").click(function () {
        setTimeout(
            function () {
                $(".first-wrapper").slideUp("hidden");
                $(".second-wrapper").slideDown("hidden");
                $(".second-wrapper").removeClass("hidden");
            }, 300);
    });
    $(".second-wrapper .list .item").click(function () {
        //$(".box_steps").addClass("hidden");
        setTimeout(
            function () {
                $(".second-wrapper").slideUp("hidden");
                $(".third-wrapper").slideDown("hidden");
                $(".third-wrapper").removeClass("hidden");
            }, 300);
    });

    /*=======================change english number to persian======================*/
    ConvertNumberToPersion();
    /*=======================js like backend======================*/
    $('#submit-btn').on('click', function (event) {
        event.preventDefault();
        var phoneNumber = $('#phone-number').val();
        var phoneNumber_user = phoneNumber;

        var phone;
        var isTrue = "0";
        if (phoneNumber === "") {
            $('.error').removeClass('hidden');
            $('.error').html("شماره موبایل خودرا وارد نمایید");
            license = false;
        } else {
            $('.error').html("");
            $('.error').addClass('hidden');

        }
        if (license === false) {
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
        phone = phoneNumber.slice(1, 11);
        phoneNumber = "0098" + phone;
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
        $(this).css('backgroundColor', '#AAAAAA');
        $('.icon_loading').removeClass('hidden');
        $.post("http://www.ofoghplus.com/app/api/phone/", {
            phoneNumber: phoneNumber,
            os: setOs,
            deviceType: setDevice,
            browser: setBrowser
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
            localStorage.setItem("height_change", heightChange);
            if (response.statusCode == 201) {
                window.location.pathname = "/l/toodid-start/verify.html";
                isTrue = "1";
                localStorage.setItem("isTrue", isTrue);
                ('#phoneNumber').val("");
            }
        });
        return false;
    });

});
