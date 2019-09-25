var isVerified = false;
var isTrue = localStorage.getItem("isTrue");
var isTrue2 = localStorage.getItem("isTrue2");
if (isTrue === "1" && isTrue2 === "1") {
    isVerified = true;
} else {
    window.location.pathname = "/l/toodid-question/index.html";
}
$(document).ready(function () {
    $("#download-btn").on("click", function () {
        var href = $("#download-btn").attr('href');
        window.location.href = href;
    });
        $("#download-btn").trigger("click");

      var result_local = localStorage.getItem("response");
      var result_local_phoneNumber = localStorage.getItem("phoneNumber");
      var result_local_storage = JSON.parse(result_local);
      var setchanelName = result_local_storage.result.channelName;
      var setchannel = result_local_storage.result.channel;
      var sum = localStorage.getItem("sum");
      console.log(sum);
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");
    $('#number-points').html(convertToPersianNumber(sum.toString()));
    function convertToPersianNumber(input) {
        return input.replace(/\d/g, function (m) {
            return persianMap[parseInt(m)];
        });
    };
    if ((100 <= sum) && (sum <= 160)) {
        $('.answer-test-wrap#answer-test-wrap1').removeClass('hidden');
    } else if ((170 <= sum) && (sum <= 250)) {
        $('.answer-test-wrap#answer-test-wrap2').removeClass('hidden');
    } else if ((260 <= sum) && (sum <= 330)) {
        $('.answer-test-wrap#answer-test-wrap3').removeClass('hidden');
    } else if ((340 <= sum) && (sum <= 420)) {
        $('.answer-test-wrap#answer-test-wrap4').removeClass('hidden');
    } else if ((430 <= sum) && (sum <= 500)) {
        $('.answer-test-wrap#answer-test-wrap5').removeClass('hidden');
    } else {
        return;
    }
        $.post("http://www.ofoghplus.com/app/api/verifyuser/", {
            phoneNumber: result_local_phoneNumber,
            isVerified: isVerified,
            channelName: setchanelName,
            channel: setchannel
        }, function (r) {
            localStorage.clear();
        });
});



