var isTrue = localStorage.getItem("isTrue");

if (isTrue !== "1") {
    window.location.pathname = "/l/toodid-question/index.html";
}
/*=======================function for change english number to persian ======================*/
/*persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
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
traverse(document.body);*/
$(document).ready(function () {
    /*=======================get amount ======================*/
    var color_gray = 'rgb(109,109,109)';
    var counter = 60;
    var isPage = "0";
    var license = true;
    var result_local = localStorage.getItem("response");
    var result_local_phoneNumber = localStorage.getItem("phoneNumber");
    var result_local_phoneNumber_user = localStorage.getItem("phoneNumber_user");
    var heightChange_chrome = localStorage.getItem("heightChange_chrome");
    var heightChange_safari = localStorage.getItem("heightChange_safari");

    var result_local_storage = JSON.parse(result_local);
    if (heightChange_chrome === '1') {
        $('.verify').addClass('change-height');
    }
    if (heightChange_safari === '1') {
        $('.verify').addClass('verify-safari');
    }
    /*=======================example======================*/
    $('#verify-number').mask('0000', {'translation': {0: {pattern: /[0-9*]|[\u06F0-\u06F9]/}}});

    /*=================sms counter================*/
    setTimeout(function sms() {
        if (counter == 0) {
            $('.sms .text').html("کد برای شما sms شده است")
            return false;
        }
        counter--;
        $('#time').html(convertToPersianNumber(counter.toString()));
        setTimeout(sms, 1000);
    }, 1000);
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");

  /*   function convertToEnglishNumber(input) {
         return input.replace(/[\u06F0-\u06F90]/g, function (m) {
             return persianDigits.indexOf(m);
         });
     }*/
    function convertToPersianNumber(input) {
        return input.replace(/\d/g, function (m) {
            return persianMap[parseInt(m)];
        });
    };
    /*=======================check======================*/
    setInterval(function () {
        var setverifyCode = $('#verify-number').val();
        if (setverifyCode !== "" && license === false) {
            $('.error').html("");
            $('.error').addClass('hidden');
        }
        if (setverifyCode.length === 4) {
            $('.verify-btn').addClass('submit-animate');
        }
    }, 300);
    /*===================ajax=================*/
    $('.number_value').html(convertToPersianNumber(result_local_phoneNumber_user));

    $('#verify-btn').click(function (event) {
        event.preventDefault();

        var setverifyCode = $('#verify-number').val();
        var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        function convertToEnglishNumber(input) {
            return input.replace(/[\u06F0-\u06F90]/g, function (m) {
                return persianDigits.indexOf(m);
            });
        }
        var regx_pesian_number =/[\u06F0-\u06F9]/;
        if(regx_pesian_number.test(setverifyCode)){
            setverifyCode = convertToEnglishNumber(setverifyCode);
        }

        if (setverifyCode === "") {
            $('.error').removeClass('hidden');
            $('.error').html("کد را وارد نمایید");
            license = false;
            return false;
        }
        $(this).val('');
        $(this).css('backgroundColor', color_gray);
        $('.loading__overlay').removeClass('hidden');
        var setverifyCode = $('#verify-number').val();
        var setchanelName = result_local_storage.result.channelName;
        var setchannel = result_local_storage.result.channel;
        $.post("http://www.ofoghplus.com/app/api/verify/", {
            phoneNumber: result_local_phoneNumber,
            verifyCode: setverifyCode,
            channelName: setchanelName,
            channel: setchannel
        }, function (r) {
            $(this).css('backgroundColor', '#C43E97');
            $('.icon_loading').addClass('hidden');
            $(this).val('تایید');
            $('.error').addClass('success').html(r.message);
            if (r.statusCode == 201) {
                window.location.pathname = "/l/toodid-question/download.html";
                isPage = "1";
                localStorage.setItem("isTrue2", isPage);
            }
            $('#verify-number').val("");
        });
    });
});
