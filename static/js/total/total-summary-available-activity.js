/**
 * Created by LE on 2017/10/27.
 */
var page_count=1,per_page_count=5;

$(function(){
    createTotalHtmls();
    AjaxToalFuncS();
    // AjaxToalFunc(baseUrl+"wx_yxyx_api/get_have_cash"+userActi1);
})
function AjaxToalFuncS(){
    $.ajax({
        url: baseUrl+"wx_yxyx_api/get_activity_rewards"+userId,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: {
            'is_cash':2,
            "page_num":page_count,
            "per_page_count":per_page_count
        },
        success: function (result) {
            if (result['ret'] != 0) {
                alert(result['info']);
            } else {
                // 成功
                // var url=baseUrl+"wx_yxyx_api/get_activity_rewards"+userId+"&page_num="+page_count;
                // createTotalHtml(result,url);
                createTotalHtml(result);
            }
        }
    });
}
//
function createTotalHtmls(){
    var strHtml="<ul></ul>";
    $(".container-total-box").html(strHtml);
}
function ajaxTab1(){
    AjaxToalFuncS();
    // AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_activity_rewards"+userIds2,page_count,per_page_count);
}
var disredsult="";
// 循环创建列表
function createTotalHtml(result){
// function createTotalHtml(result,url){
//     console.log(disredsult);
//     console.log(url);
//     if(disredsult==url){
//         return;
//     }
//     disredsult = url;
    $(".invite-first-num").html("");
    $(".container-total-box .btnMore").html("");
    page_count++;
    if(result.reward_list.list.length>0){
        var sDiv="<p class='invite-first-num'>总数：<span>"+result.activity_total_money+"</span>元</p>";
        $(".container-total-box").prepend(sDiv);
        var str="";
        for(var i=0;i<result.reward_list.list.length;i++){
            //agent_money_ex_type_str
            str+="<li class='tab-content-lis'>"+
                "<table>"+
                "<tr>"+
                "<td><p>活动：</p></td>"+
            "<td><p>"+result.reward_list.list[i].agent_money_ex_type_str+"</p></td>"+
            "</tr>"+
            "<tr>"+
            "<td><p>时间：</p></td>"+
            "<td><p>"+result.reward_list.list[i].add_time+"</p></td>"+
            "</tr>"+
            "<tr>"+
            "<td><p>奖励：</p></td>"+
            "<td class='total-invite-money'><p>"+result.reward_list.list[i].money+"元</p></td>"+
            "</tr>"+
            "</table>"+
            "</li>";
        }
        $(".container-total-box ul").append(str);
        if(result.reward_list.page_info.page_num < result.reward_list.page_info.total_num/5) {
            if (result.reward_list.list.length == 5) {
                $(".container-total-box").append("<div class='btnMore'><button onclick='ajaxTab1()'>下一页</button></div>");
            }
        }
    }else{
        // $(".btnMore button").html("无数据");
        // $(".btnMore").css("display","none");
        var str="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>"
        $(".container-total-box ul").html(str);
    }

    // $.getScript("js/total/total-summary-total.js");
}
