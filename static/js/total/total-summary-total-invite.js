/**
 * Created by LE on 2017/10/27.
 */
var page_count=1,per_page_count=5,tabIndex="",table_type=1,dataTab=0;

$(function(){
    createTotalHtmls();
    AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    // page_count++;
})

// tab切换动态创建
function createTotalHtmls(){
    createAui();
    $("div.aui-tab-item").eq(0).click(function(){
        // $(".tab-div-container ul").eq(0).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=1;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
    $("div.aui-tab-item").eq(1).click(function(){
        // $(".tab-div-container ul").eq(1).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=2;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
}
// 点击加载更多
function ajaxTab1(indexTab){
    page_count++;
    table_type=indexTab;
    // $(".tab-div-container .btnMore").html("");
    if(indexTab==1){
        dataTab=1;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    }else if(indexTab==2){
        dataTab=2;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    }
}

var disredsult="";
// 循环创建tab切换内容列表
function createTotalHtml(result,url,table_type,dataTab){
    console.log(disredsult);
    console.log(url);
    if(disredsult==url){
        return;
    }
    disredsult = url;

    $(".tab-div-container .btnMore").html("");
    // $(".btnMore").remove();
    if(dataTab==1 && table_type==1){
        createFunc1(result,url);
        return;
    }
    if(dataTab==2 && table_type==2){
        createFunc2(result,url);
        return;
    }
    if(table_type==1 && dataTab==0){
        $(".mine-invite").html("");
        // $(".tab-div-container ul").eq(0).html("");
        createFunc1(result,url);
        return;}
    if(table_type==2 && dataTab==0){
        // $(".tab-div-container ul").eq(1).html("");
        $(".member-invite").html("");
        createFunc2(result,url);
        return;
    }
}
// 我的邀请
function createFunc1(result,url){
    // 我的邀请
    var mineInvite="",mine_status=[],minBtn="";
    if(result.my_invite.list.length>0){
        for(var i=0;i<result.my_invite.list.length;i++){
            mine_status=switchFunc(result.my_invite.list[i].agent_status,result.my_invite.list[i].agent_student_status);
            if(!mine_status){
                continue;
            }
            mineInvite+="<li class='tab-content-lis'>"+
                "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
                "<div class='total-cash-containers'>"+
                "<p>姓名：<span>"+result.my_invite.list[i].nickname+"</span></p>"+
                "<p>时间：<span>"+result.my_invite.list[i].create_time+"</span></p>"+
                "<p>状态：<span>"+mine_status[0]+"</span></p>"+
                "<p>收入：<span class='spanColors'>"+result.my_invite.list[i].agent_status_money+"元</span></p>"+
                "</div>"+
                "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
                "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
                "</div>"+
                "<div class='tab-content-lis-div'>"+
                "<img src='"+mine_status[1]+"'>"+
                "<p>被邀请人完成试听课后即可提现</p>"+
                "</div>"+
                "</li>";
        }
        $(".mine-invite").append(mineInvite);
        mineInvite="";
        if(result.my_invite.page_info.page_num < result.my_invite.page_info.total_num/5) {
            if (result.my_invite.list.length == 5) {
                // $(".tab-div-first .btnMore").css("display","block");
                minBtn = "<div class='btnMore'><button onclick='ajaxTab1(1)'>下一页</button></div>";
                $(".tab-div-first").append(minBtn);
                minBtn = "";
            }
        }
    }
    else{
        minBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg'></div>";
        $(".member-invite").append(minBtn);
        minBtn="";
        // $(".tab-div-first .btnMore button").html("无数据");
    }
    $.getScript("js/total/total-summary-total.js");
}
// 會員邀請
function createFunc2(result,url){
// 会员邀请
    var memberInvite="",member_status=[],memBtn="";
    if(result.member_invite.list.length>0){
        for(var j=0;j<result.member_invite.list.length;j++){
            member_status=switchFunc(result.member_invite.list[j].agent_status,result.member_invite.list[j].agent_student_status);
            if(!member_status){
                continue;
            }
            memberInvite+="<li class='tab-content-lis' >"+
                "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
                "<div class='total-cash-containers'>"+
                "<p>姓名：<span>"+result.member_invite.list[j].nickname+"</span></p>"+
                "<p>时间：<span>"+result.member_invite.list[j].create_time+"</span></p>"+
                "<p>状态：<span>"+member_status[0]+"</span></p>"+
                "<p>收入：<span class='spanColors'>"+result.member_invite.list[j].agent_status_money+"元</span></p>"+
                "</div>"+
                "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
                "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
                "</div>"+
                "<div class='tab-content-lis-div'>"+
                "<img src='"+member_status[1]+"'>"+
                "<p>被邀请人完成试听课后即可提现</p>"+
                "</div>"+
                "</li>";
        }
        $(".member-invite").append(memberInvite);
        memberInvite="";
        if(result.member_invite.page_info.page_num < result.member_invite.page_info.total_num/5) {
            if (result.member_invite.list.length == 5) {
                memBtn = "<div class='btnMore'><button onclick='ajaxTab1(2)'>下一页</button></div>";
                $(".tab-div-second").append(memBtn);
                memBtn = "";
            }
        }
    }
    else{
        memBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg'></div>";
        $(".member-invite").append(memBtn);
        memBtn="";
        // $(".tab-div-second .btnMore button").html("无数据");
    }
    $.getScript("js/total/total-summary-total.js");
}

// 状态选择
function switchFunc(test,strstatus){
    // switch (test){
    //     case "0":return ["已邀请","img/total/total/invite/img-invite.svg"];break;
    //     case "2":return ["未接通","img/total/total/invite/img-invite.svg"];break;
    //     case "10":return ["课程老师已联系学员","img/total/total/invite/img-connect.svg"];break;
    //     case "20":return ["已预约","img/total/total/invite/img-order.svg"];break;
    //     case "30":return ["已试听","img/total/total/invite/img-trail.svg"];break;
    // }
    if(test=="0"){
        return ["已邀请","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-invite.svg"];
    }
    if(test=="2"){
        return ["未接通","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-invite.svg"];
    }
    if(test=="10"){
        return ["课程老师已联系学员","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-connect.svg"];
    }
    if(test=="20"){
        return ["课程老师已联系学员[预约成功]","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-order.svg"];
    }
    if(test=="20" && strstatus=="100"){
        return ["课程老师已联系学员[无意向]","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-order.svg"];
    }
    if(test=="30"){
        return ["学员已上完测评课","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-trail.svg"];
    }
    if(test=="30" && strstatus=="100"){
        return ["学员已上完测评课[无意向]","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-trail.svg"];
    }
    if(test=="40"){
        return ["成功购课","http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/invite/img-trail.svg"];
    }
}

