/**
 * Created by LE on 2017/10/31.
 */
$(function(){
    $(".cash-banner").html("<img src='img/cash/cash-bank.png'>");
    AjaxToalFunc(baseUrl+"wx_yxyx_api/get_agent_bank_info"+userId);
})
function createTotalHtml(result){
    $(".cardUserName").val(result.data.bank_account);
    $(".cardUserId").val(result.data.idcard);
    $(".cardUserBankName").val(result.data.bank_address);
    $(".cardUserBankProvince").val(result.data.bank_province);
    $(".cardUserBankCity").val(result.data.bank_city);
    $(".cardUserNum").val(result.data.bankcard);
    $(".cardUserPhone").val(result.data.bank_phone);
    if(result.data.bank_type){
        $(".cardUserType").val(result.data.bank_type);
    }
    // alert("tdds");
}
$('.cardUserId').blur(function(){
    var stridcard=$('.cardUserId').val();
    var reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!reg.test(stridcard)){
        $('.cardUserId').val("");
        alert("请输入合法的身份证号");
    }
})

$('.cardUserPhone').blur(function(){
    var strbank_phone=$('.cardUserPhone').val();
    var phoneReg = /(^1\d{10}$)/;
    // |(^+1\d{10}$)
    if(!phoneReg.test(strbank_phone)){
        $('.cardUserPhone').val("");
        alert("请输入合法的手机号");
    }
});
$(".buttons").click(function(){
    var bank_account=$(".cardUserName").val();
    var idcard=$(".cardUserId").val();
    var bank_address=$(".cardUserBankName").val();
    var bank_province=$(".cardUserBankProvince").val();
    var bank_city=$(".cardUserBankCity").val();
    var bankcard=$(".cardUserNum").val();
    var bank_phone=$(".cardUserPhone").val();
    var bank_type=$(".cardUserType").val();
    if(!bank_account && !idcard && !bank_address && !bank_province && !bank_city && !bankcard && !bank_phone && !bank_type){
        alert("请完善信息后提交");
    }else{
        Ajax(bank_account,idcard,bank_address,bank_province,bank_city,bankcard,bank_phone,bank_type);
    }
})
function Ajax(bank_account,idcard,bank_address,bank_province,bank_city,bankcard,bank_phone,bank_type){
    var requestData={
        bank_account:bank_account,
        idcard:idcard,
        bank_address:bank_address,
        bank_province:bank_province,
        bank_city:bank_city,
        bankcard:bankcard,
        bank_phone:bank_phone,
        bank_type:bank_type
    };
    // alert("持卡人："+bank_account+"；身份证号："+idcard+"；支行名称："+bank_address+"；开户省："+bank_province+"；开户市："+bank_city+"；卡号bankcard："+bankcard+"；预留手机号："+bank_phone+"；银行卡类型："+bank_type);
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