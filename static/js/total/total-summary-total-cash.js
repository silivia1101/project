/**
 * Created by LE on 2017/10/27.
 */
var page_count=1,per_page_count=5,tabIndex="",table_type=1,dataTab=0;
$(function(){
    createTotalHtmls();
    AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_commission_reward"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab)
    // page_count++;
})
// 动态创建tab切换
function createTotalHtmls(){
    var strHtml="<div class='aui-tab' id='tab'>"+
                "<div class='aui-tab-item aui-active'>我的邀请</div>"+
                "<div class='aui-tab-item'>会员邀请</div>"+
            "</div>"+
            "<div class='tab-div-container'>"+
                "<div class='tab-div-first'>"+
                    "<ul class='mine-invite'></ul>"+
                    // "<div class='btnMore'><button onclick='ajaxTab1()'>下一页</button></div>"+
                "</div>"+
                "<div class='tab-div-second'>"+
                    "<ul class='member-invite'></ul>"+
                    // "<div class='btnMore'><button onclick='ajaxTab1()'>下一页</button></div>"+
                "</div>"+
            "</div>";
    $(".container-total-box").html(strHtml);
    createAui();
    // $("div.aui-tab-item").click(function(){
    //     $(".tab-div-container ul").html("");
    //     $(".tab-div-container .btnMore").html("");
    //     page_count=1;
    //     tabIndex=$(this).html();
    //     AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_commission_reward"+userId,page_count,per_page_count,tabIndex);
    //     // page_count++;
    // })
    $("div.aui-tab-item").eq(0).click(function(){
        // $(".tab-div-container ul").eq(0).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=1;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_commission_reward"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
    $("div.aui-tab-item").eq(1).click(function(){
        // $(".tab-div-container ul").eq(1).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=2;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_commission_reward"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
}

// 点击加载更多
function ajaxTab1(indexTab){
    page_count++;
    table_type=indexTab;
    if(indexTab==1){
        dataTab=1;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_commission_reward"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    }else if(indexTab==2){
        dataTab=2;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_commission_reward"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
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
    var mineInvite="",mine_status="",minBtn="";
    if(result.child_reward.list.length>0){
        for(var i=0;i<result.child_reward.list.length;i++){
            mine_status=switchFunc(result.child_reward.list[i].count);
            // alert("mine_status="+mine_status);
            if(!mine_status){
                continue;
            }
            mineInvite+="<li class='tab-content-lis'>"+
                "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
                "<div class='total-cash-containers'>"+
                "<p>姓名：<span>"+result.child_reward.list[i].nickname+"</span></p>"+
                "<p>时间：<span>"+result.child_reward.list[i].create_time+"</span></p>"+
                "<p>购买课程：<span>"+result.child_reward.list[i].price+"</span></p>"+
                "<p>收入：<span class='spanColors'>"+result.child_reward.list[i].p_price+"元</span></p>"+
                "</div>"+
                "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
                "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
                "</div>"+
                "<div class='tab-content-lis-div'>"+
                "<img src='"+mine_status+"'>"+
                "<p>上满两节课可提现20%，上满8节课可全部提现</p>"+
                "</div>"+
                "</li>";
        }
        $(".mine-invite").append(mineInvite);
        if(result.child_reward.page_info.page_num < result.child_reward.page_info.total_num/5) {
            if (result.child_reward.list.length == 5) {
                minBtn = "<div class='btnMore'><button onclick='ajaxTab1(1)'>下一页</button></div>";
                $(".tab-div-first").append(minBtn);
                minBtn = "";
            }
        }
    }
    else{
        minBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>";
        $(".mine-invite").append(minBtn);
        minBtn="";
        // $(".tab-div-first .btnMore button").html("无数据");
    }
    $.getScript("js/total/total-summary-total.js");
}
// 會員邀請
function createFunc2(result,url){
    // 会员邀请
    var memberInvite="",member_status="",memBtn="";
    if(result.member_reward.list.length>0){
        for(var j=0;j<result.member_reward.list.length;j++){
            member_status=switchFunc(result.member_reward.list[j].count);
            if(!member_status){
                continue;
            }
            memberInvite+="<li class='tab-content-lis' >"+
                "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
                "<div class='total-cash-containers'>"+
                "<p>姓名：<span>"+result.member_reward.list[j].nickname+"</span></p>"+
                "<p>时间：<span>"+result.member_reward.list[j].create_time+"</span></p>"+
                "<p>购买课程：<span>"+result.member_reward.list[j].price+"</span></p>"+
                "<p>收入：<span class='spanColors'>"+result.member_reward.list[j].p_price+"元</span></p>"+
                "</div>"+
                "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
                "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
                "</div>"+
                "<div class='tab-content-lis-div'>"+
                "<img src='"+member_status+"'>"+
                "<p>上满两节课可提现20%，上满8节课可全部提现</p>"+
                "</div>"+
                "</li>";
        }
        $(".member-invite").append(memberInvite);
        if(result.member_reward.page_info.page_num < result.member_reward.page_info.total_num/5) {
            if (result.member_reward.list.length == 5) {
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

// 上课节数图片
function switchFunc(test){
    // alert(test);
        switch (test){
            case 0:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img0.png";break;
            case 1:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img1.png";break;
            case 2:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img2.png";break;
            case 3:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img3.png";break;
            case 4:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img4.png";break;
            case 5:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img5.png";break;
            case 6:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img6.png";break;
            case 7:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img7.png";break;
            case 8:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img8.png";break;
            case "0":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img0.png";break;
            case "1":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img1.png";break;
            case "2":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img2.png";break;
            case "3":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img3.png";break;
            case "4":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img4.png";break;
            case "5":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img5.png";break;
            case "6":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img6.png";break;
            case "7":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img7.png";break;
            case "8":return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img8.png";break;
            default:return "http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img8.png";break;
        }
}