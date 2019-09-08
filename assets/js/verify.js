var isTrue = localStorage.getItem("isTrue");

if (isTrue !== "1") {
    window.location.pathname = "/l/toodid-start/index.html";
}
$(document).ready(function () {

    var counter = 60;
    var isPage = "0";
    var license = true;
    var result_local = localStorage.getItem("response");
    var result_local_phoneNumber = localStorage.getItem("phoneNumber");
    var result_local_phoneNumber_user = localStorage.getItem("phoneNumber_user");
    var height_change = localStorage.getItem("height_change");
    var result_local_storage = JSON.parse(result_local);
    if (height_change === '1') {
        $('.verify').addClass('change-height');
    }
    /*=======================example======================*/
    $('#verify-number').mask('0000', {'translation': {0: {pattern: /[0-9*]/}}});

    /*=================sms counter================*/
    setTimeout(function sms() {
        if (counter == 0) {
            $('.sms .text').html("کد برای شما sms شده است")
            return false;
        }
        counter--;
        $('#time').html(counter);
        setTimeout(sms, 1000);
    }, 1000);
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

    $('.number_value').html(result_local_phoneNumber_user);
    /*if (result_local_phoneNumber_user == null){
        $('.number_value').html("شماره ای وارد نشده");
    }*/

    $('#verify-btn').click(function (event) {
        event.preventDefault();

        var setverifyCode = $('#verify-number').val();

        if (setverifyCode === "") {
            $('.error').removeClass('hidden');
            $('.error').html("کد را وارد نمایید");
            license = false;
            return false;
        }
        $(this).val('');
        $('.icon_loading').removeClass('hidden');
        var setverifyCode = $('#verify-number').val();
        var setchanelName = result_local_storage.result.channelName;
        var setchannel = result_local_storage.result.channel;
        $.post("http://www.ofoghplus.com/app/api/verify/", {
            phoneNumber: result_local_phoneNumber,
            verifyCode: setverifyCode,
            channelName: setchanelName,
            channel: setchannel
        }, function (r) {
            $('.icon_loading').addClass('hidden');
            $(this).val('تایید');
            $('.error').addClass('success').html(r.message);
            if (r.statusCode == 201) {
                window.location.pathname = "/l/toodid-start/download.html";
                isPage = "1";
                localStorage.setItem("isTrue2", isPage);
            }
            $('#verify-number').val("");
        });
    });
});
