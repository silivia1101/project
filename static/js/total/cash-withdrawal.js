/**
 * Created by LE on 2017/11/8.
 */
$(function(){
    AjaxToalFuncS();
    // AjaxToalFunc(baseUrl+"wx_yxyx_api/get_have_cash"+userActi1);
})
function AjaxToalFuncS(){
    $.ajax({
        url: baseUrl+"wx_yxyx_api/get_have_cash"+userId,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: {'check_money_flag':0},
        success: function (result) {
            if (result['ret'] != 0) {
                alert(result['info']);
            } else {
                // 成功
                createTotalHtml(result);
            }
        }
    });
}
function createTotalHtml(result){
    // alert(result.list.length);
    if(result.list.length==0){
        var str="<img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/already-total.svg'>";
        $(".cashIng").html(str);
    }else{
        var strHtml="<img class='cashIngImg' src='img/cash/img1.svg' alt=''>"+
            "<p class='cash-complete'>提现申请已提交</p>"+
            "<p class='cash-tip'>金币正在努力送到您的账号中</p>"+
            "<button class='buttons butn' onclick='locationFunc()'><p>确认</p></button>";
        $(".cashIng").html(strHtml);
    }
}
function locationFunc(){
    window.location.href="total-summary.html";
}