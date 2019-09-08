var isVerified = false;
var isTrue = localStorage.getItem("isTrue");
var isTrue2 = localStorage.getItem("isTrue2");
if (isTrue === "1" && isTrue2 === "1") {
    isVerified = true;
} else {
    window.location.pathname = "/l/toodid-start/index.html";
}
$(document).ready(function () {
$("#download-btn").on( "click", function() {
    var href = $("#download-btn").attr('href');
    window.location.href = href;
});
$("#download-btn").trigger( "click" );

var result_local = localStorage.getItem("response");
var result_local_phoneNumber = localStorage.getItem("phoneNumber");
var result_local_storage = JSON.parse(result_local);
var setchanelName = result_local_storage.result.channelName;
var setchannel = result_local_storage.result.channel;

$.post("http://www.ofoghplus.com/app/api/verifyuser/", {
    phoneNumber: result_local_phoneNumber,
    isVerified: isVerified,
    channelName: setchanelName,
    channel: setchannel
}, function (r) {
    $('.error').addClass('success').html(r.message);
    localStorage.clear();
});
});
