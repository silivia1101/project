/**
 * Created by LE on 2017/10/31.
 */
$(function(){
    $(".cash-banner").html("<img src='img/cash/cash-net.png'>");
    AjaxToalFunc(baseUrl+"wx_yxyx_api/get_agent_alipay_info"+userId);
})
function createTotalHtml(result){
    $(".userPayName").val(result.data.zfb_name);
    $(".userPayfor").val(result.data.zfb_account);
}
// var zfb_name,zfb_account;
$(".buttons").click(function(){
    var zfb_name=$(".userPayName").val();
    var zfb_account=$(".userPayfor").val();
    if(!zfb_name && !zfb_account){
        alert("请完善信息后提交");
    }else{
        Ajax(zfb_name,zfb_account);
    }
})
function Ajax(zfb_name,zfb_account){
    var requestData={
        zfb_name:zfb_name,
        zfb_account:zfb_account
    }
    // alert("姓名："+zfb_name+"；支付宝账号："+zfb_account);
    $.ajax({
        url: baseUrl+"wx_yxyx_api/update_bank_info"+userId,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: requestData,
        success: function (result) {
            if (result['ret'] != 0) {
                alert(result['info']);
            } else {
                // 成功
                // subBankInfo(result);
                // alert("提交成功");
                window.location.href="total-summary-cash.html";
            }
        },
        error: function () {
            alert("网络不太通畅，请稍后再试");
        }
    });
}