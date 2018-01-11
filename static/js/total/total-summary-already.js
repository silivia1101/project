/**
 * Created by LE on 2017/10/21.
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
        data: {'check_money_flag':1},
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
    if(result.list.length==0){
        var str="<img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/already-total.svg'>";
        $("table").html(str);
    }
    else{
        var strHtml="",mine_status="";
        strHtml+="<thead><tr><th>提现日期</th><th>提现金额</th><th>状态</th></tr></thead> <tbody>"
        for(var i=result.list.length-1;i>=0;i--){
        // for(var i=0;i<40;i++){
            mine_status="已提现";
            strHtml+="<tr>"+
                "<td>"+result.list[i].create_time+"</td>"+
                "<td>￥"+result.list[i].cash+"</td>"+
                "<td>"+mine_status+"</td>"+
                "</tr>";
            // }
        }
        strHtml+=" </tbody>";
        $("table").append(strHtml);
    }
}

