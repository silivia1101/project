/**
 * Created by LE on 2017/10/27.
 */
var page_count=1,per_page_count=5,tabIndex="",table_type=1,dataTab=0;
$(function(){
    createTotalHtmls();
    AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    // page_count++;
})
function createTotalHtmls(){
    var strHtml="<div class='aui-tab' id='tab'>"+
                "<div class='aui-tab-item aui-active'>学员</div>"+
                "<div class='aui-tab-item'>会员</div>"+
	            "<div class='aui-tab-item'>学员&会员</div>"+
        "</div>"+
	"<div class='tab-div-container'>"+
                "<div class='tab-div-first'>"+
		"<p class='invite-first-num'>总数：<span></span></p>"+
                    "<ul class='studentList'></ul>"+
                    // "<div class='btnMore'><button onclick='ajaxTab1()'>点击加载更多</button></div>"+
                "</div>"+
                "<div class='tab-div-second'>"+
		"<p class='invite-first-num'>总数：<span></span></p>"+
                    "<ul class='memberList'></ul>"+
                    // "<div class='btnMore'><button onclick='ajaxTab1()'>点击加载更多</button></div>"+
                "</div>"+
                "<div class='tab-div-third'>"+
		"<p class='invite-first-num'>总数：<span></span></p>"+
                    "<ul class='studentMemberList'></ul>"+
                    // "<div class='btnMore'><button onclick='ajaxTab1()'>点击加载更多</button></div>"+
                "</div>"+
            "</div>";
    $(".container-total-box").html(strHtml);
createAuis();

    // $("div.aui-tab-item").click(function(){
    //     $(".tab-div-container ul").html("");
    //     $(".tab-div-container .btnMore").html("");
    //     tabIndex=$(this).html();
    //     page_count=1;
    //     AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,page_count,per_page_count,tabIndex);
    // })

    $("div.aui-tab-item").eq(0).click(function(){
        // $(".tab-div-container ul").eq(0).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=1;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
    $("div.aui-tab-item").eq(1).click(function(){
        // $(".tab-div-container ul").eq(1).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=2;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
    $("div.aui-tab-item").eq(2).click(function(){
        // $(".tab-div-container ul").eq(1).html("");
        // $(".tab-div-container .btnMore").html("");
        page_count=1;
        table_type=3;
        dataTab=0;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    })
}
// function ajaxTab1(){
//     // $(".tab-div-container .btnMore").html("");
//     // $(".tab-div-first .btnMore").html("");
//     // $(".tab-div-second .btnMore").html("");
//     // $(".tab-div-third .btnMore").html("");
//     AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,page_count,per_page_count);
// }

function ajaxTab1(indexTab){
    page_count++;
    table_type=indexTab;
    if(indexTab==1){
        dataTab=1;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    }else if(indexTab==2){
        dataTab=2;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    }else if(indexTab==3){
        dataTab=3;
        AjaxToalFuncs(baseUrl+"wx_yxyx_api/get_invite_type_list"+userId,{'page_num':page_count,'per_page_count':per_page_count,'table_type':table_type},table_type,dataTab);
    }
}

// var disredsult="";
// // 循环创建列表
// function createTotalHtml(result,url){
//     if(disredsult==url){
//         return;
//     }
//     disredsult = url;
//     $(".invite-first-num span").eq(0).html(result.steudent_first_num);
//     $(".invite-first-num span").eq(1).html(result.member_first_num);
//     $(".invite-first-num span").eq(2).html(result.student_and_member_first_num);
//     // 学员
//     var studentList="",student_list="",stuBtn="", mine_status="";
//     if(result.student_list.list.length>0){
//         // alert(result.student_list.list[0].nickname);
//         for(var i=0;i<result.student_list.list.length;i++){
//             // alert(result.student_list.list[i].agent_status)
//                 mine_status=switchFunc(result.student_list.list[i].agent_status,result.student_list.list[i].agent_student_status);
//                 // alert(mine_status);
//                 if(!mine_status){
//                     continue;
//                 }
//                 if(result.student_list.list[i].agent_status=="40"){
//                     studentList+="<li class='tab-content-lis' >"+
//                         "<div class='tab-content-lis-box'>"+
//                         "<div class='total-cash-containers'>"+
//                         "<p>姓名：<span>"+result.student_list.list[i].nickname+"</span></p>"+
//                         "<p>时间：<span>"+result.student_list.list[i].create_time+"</span></p>"+
//                         "<p>状态：<span class='total-invite-money'>"+mine_status+"</span></p>"+
//                         "</div>"+
//                         "</div>"+
//                         "</li>";
//                 }else{
//                     studentList+="<li class='tab-content-lis' >"+
//                         "<div class='tab-content-lis-box'>"+
//                         "<div class='total-cash-containers'>"+
//                         "<p>姓名：<span>"+result.student_list.list[i].nickname+"</span></p>"+
//                         "<p>时间：<span>"+result.student_list.list[i].create_time+"</span></p>"+
//                         "<p>状态：<span class=''>"+mine_status+"</span></p>"+
//                         "</div>"+
//                         "</div>"+
//                         "</li>";
//                 }
//             }
//         $(".studentList").append(studentList);
//         studentList="";student_list="";
//         if(result.student_list.page_info.page_num < result.student_list.page_info.total_num/5) {
//             if (result.student_list.list.length == 5) {
//                 stuBtn = "<div class='btnMore'><button onclick='ajaxTab1()'>下一页</button></div>";
//                 $(".tab-div-first").append(stuBtn);
//                 stuBtn = "";
//             }
//         }
//     }
//     else{
//         $(".invite-first-num").eq(0).html("");
//         stuBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>";
//         $(".studentList").append(stuBtn);
//         stuBtn="";
//         // $(".tab-div-first .btnMore button").html("无数据");
// 	}
//     // 会员
//     var memberList="",member_list="",memBtn="";
//     if(result.member_list.list.length>0){
//         for(var j=0;j<result.member_list.list.length;j++){
//             if(result.member_list.list[j].second_num==0){
//                 memberList+="<li class='tab-content-lis' >"+
//                     "<div class='tab-content-lis-box'>"+
//                     "<div class='total-cash-containers'>"+
//                     "<p>姓名：<span>"+result.member_list.list[j].nickname+"</span></p>"+
//                     "<p>时间：<span>"+result.member_list.list[j].create_time+"</span></p>"+
//                     "<p>邀请：<span class='total-invite-money'>"+result.member_list.list[j].second_num+"</span>人</p>"+
//                     "</div>"+
//                     "</div>"+
//                     "</li>";
//             }
//             else{
//                 for(var l=0;l<result.member_list.list[j].child.length;l++){
//                     var member_list_status=switchFunc(result.member_list.list[j].child[l].agent_status);
//                     if(!member_list_status){
//                         continue;
//                     }
//                     if(result.member_list.list[j].child[l].price==0){
//                         member_list+="<li>"+
//                             "<div class='total-cash-containers-child'>"+
//                             "<p class='usernickname'>姓名：<span>"+result.member_list.list[j].child[l].nickname+"</span></p>"+
//                             "<p>时间：<span>"+result.member_list.list[j].child[l].create_time+"</span></p>"+
//                             "<p>状态："+member_list_status+"</p>"+
//                             "</div>"+
//                             "</li>";
//                     }else{
//                         member_list+="<li>"+
//                             "<div class='total-cash-containers-child'>"+
//                             "<p class='usernickname'>姓名：<span>"+result.member_list.list[j].child[l].nickname+"</span></p>"+
//                             "<p>时间：<span>"+result.member_list.list[j].child[l].create_time+"</span></p>"+
//                             "<p>状态："+student_list_status+"<span>"+result.member_list.list[j].child[l].price+"</span>元</p>"+
//                             "</div>"+
//                             "</li>";
//                     }
//                 }
//                 memberList+="<li class='tab-content-lis' >"+
//                     "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
//                     "<div class='total-cash-containers'>"+
//                     "<p>姓名：<span>"+result.member_list.list[j].nickname+"</span></p>"+
//                     "<p>时间：<span>"+result.member_list.list[j].create_time+"</span></p>"+
//                     "<p>邀请：<span class='total-invite-money'>"+result.member_list.list[j].second_num+"</span>人</p>"+
//                     "</div>"+
//                     "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
//                     "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
//                     "</div>"+
//                     "<div class='tab-content-lis-div'>"+
//                     "<ul>"+member_list+
//                     "</ul>"+
//                     "</div>"+
//                     "</li>";
//             }
//         }
//         $(".memberList").append(memberList);
//         memberList="";member_list="";
//         if(result.member_list.page_info.page_num < result.member_list.page_info.total_num/5) {
//             if(result.member_list.list.length==5) {
//                 memBtn = "<div class='btnMore'><button onclick='ajaxTab1()'>下一页</button></div>";
//                 $(".tab-div-second").append(memBtn);
//                 memBtn = "";
//             }
//         }
//     }
//     else{
//         $(".invite-first-num").eq(1).html("");
//         memBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg'></div>";
//         $(".memberList").append(memBtn);
//         memBtn="";
//         // $(".tab-div-second .btnMore button").html("无数据");
// 	}
//     // 学员&会员
//     var studentMemberList="",student_member_list="",stuMemBtn="";
//     if(result.student_and_member_list.list.length>0){
//         // for(var k=result.student_and_member_list.list.length-1;k>=0;k--){
//         for(var k=0;k<result.student_and_member_list.list.length;k++){
//             console.log(result.student_and_member_list.list[2]);
//             // if(result.student_and_member_list.list[k].child.length==0){
//             if(result.student_and_member_list.list[k].second_num==0){
//                 studentMemberList="<li class='tab-content-lis' >"+
//                     "<div class='tab-content-lis-box'>"+
//                     "<div class='total-cash-containers'>"+
//                     "<p>姓名：<span>"+result.student_and_member_list.list[k].nickname+"</span></p>"+
//                     "<p>时间：<span>"+result.student_and_member_list.list[k].create_time+"</span></p>"+
//                     "<p>邀请：<span class='total-invite-money'>"+result.student_and_member_list.list[k].second_num+"</span>人</p>"+
//                     "</div>"+
//                     "</div>"+
//                     "</li>";
//             }
//             else{
//                 // for(var g=result.student_and_member_list.list[k].child.length-1;g>=0;g--){
//                 for(var g=0;g<result.student_and_member_list.list[k].child.length;g++){
//                     var student_member_list_status=switchFunc(result.student_and_member_list.list[k].child[g].agent_status,result.student_and_member_list.list[k].child[g].agent_student_status);
//                     if(!student_member_list_status){
//                         continue;
//                     }
//                     if(result.student_and_member_list.list[k].child[g].price==0){
//                         student_member_list+="<li>"+
//                             "<div class='total-cash-containers-child'>"+
//                             "<p class='usernickname'>姓名：<span>"+result.student_and_member_list.list[k].child[g].nickname+"</span></p>"+
//                             "<p>时间：<span>"+result.student_and_member_list.list[k].child[g].create_time+"</span></p>"+
//                             "<p>状态："+student_member_list_status+"</p>"+
//                             "</div>"+
//                             "</li>";
//                     }else{
//                         student_member_list+="<li>"+
//                             "<div class='total-cash-containers-child'>"+
//                             "<p class='usernickname'>姓名：<span>"+result.student_and_member_list.list[k].child[g].nickname+"</span></p>"+
//                             "<p>时间：<span>"+result.student_and_member_list.list[k].child[g].create_time+"</span></p>"+
//                             "<p>状态："+student_member_list_status+"<span>"+result.student_and_member_list.list[k].child[g].price+"</span>元</p>"+
//                             "</div>"+
//                             "</li>";
//                     }
//                 }
//                 // console.log(student_member_list);
//                 studentMemberList="<li class='tab-content-lis' >"+
//                     "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
//                     "<div class='total-cash-containers'>"+
//                     "<p>姓名：<span>"+result.student_and_member_list.list[k].nickname+"</span></p>"+
//                     "<p>时间：<span>"+result.student_and_member_list.list[k].create_time+"</span></p>"+
//                     "<p>邀请：<span class='total-invite-money'>"+result.student_and_member_list.list[k].second_num+"</span>人</p>"+
//                     "</div>"+
//                     "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
//                     "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
//                     "</div>"+
//                     "<div class='tab-content-lis-div'>"+
//                     "<ul>"+student_member_list+
//                 "</ul>"+
//                 "</div>"+
//                 "</li>";
//             }
//             // console.log(studentMemberList);
//             $(".studentMemberList").append(studentMemberList);
//         }
//         // console.log(studentMemberList);
//         studentMemberList="";
//         student_member_list="";
//         if(result.student_and_member_list.page_info.page_num < result.student_and_member_list.page_info.total_num/5) {
//             if (result.student_and_member_list.list.length == 5) {
//                 stuMemBtn = "<div class='btnMore'><button onclick='ajaxTab1()'>下一页</button></div>";
//                 $(".tab-div-third").append(stuMemBtn);
//                 stuMemBtn = "";
//             }
//         }
//     }
//     else{
//         $(".invite-first-num").eq(2).html("");
//         stuMemBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg'></div>";
//         $(".studentMemberList").append(stuMemBtn);
//         stuMemBtn="";
//         // $(".tab-div-third .btnMore button").html("无数据");
// 	}
//     $.getScript("js/total/total-summary-total.js");
//     // $.getScript("js/total/total-summary-total.js");
// }

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
    if(dataTab==3 && table_type==3){
        createFunc3(result,url);
        return;
    }
    if(table_type==1 && dataTab==0){
        // $(".tab-div-container ul").eq(0).html("");
        $(".studentList").html("");
        createFunc1(result,url);
        return;
    }
    if(table_type==2 && dataTab==0){
        // $(".tab-div-container ul").eq(1).html("");
        $(".memberList").html("");
        createFunc2(result,url);
        return;
    }
    if(table_type==3 && dataTab==0){
        // $(".tab-div-container ul").eq(2).html("");
        $(".studentMemberList").html("");
        createFunc3(result,url);
        return;
    }
}
// 学员
function createFunc1(result,url){
    $(".invite-first-num span").eq(0).html(result.steudent_first_num);
    // 学员
    var studentList="",student_list="",stuBtn="", mine_status="";
    if(result.student_list.list.length>0){
        // alert(result.student_list.list[0].nickname);
        for(var i=0;i<result.student_list.list.length;i++){
            // alert(result.student_list.list[i].agent_status)
            mine_status=switchFunc(result.student_list.list[i].agent_status,result.student_list.list[i].agent_student_status);
            // alert(mine_status);
            if(!mine_status){
                continue;
            }
            if(result.student_list.list[i].agent_status=="40"){
                studentList+="<li class='tab-content-lis' >"+
                    "<div class='tab-content-lis-box'>"+
                    "<div class='total-cash-containers'>"+
                    "<p>姓名：<span>"+result.student_list.list[i].nickname+"</span></p>"+
                    "<p>时间：<span>"+result.student_list.list[i].create_time+"</span></p>"+
                    "<p>状态：<span class='total-invite-money'>"+mine_status+"</span></p>"+
                    "</div>"+
                    "</div>"+
                    "</li>";
            }else{
                studentList+="<li class='tab-content-lis' >"+
                    "<div class='tab-content-lis-box'>"+
                    "<div class='total-cash-containers'>"+
                    "<p>姓名：<span>"+result.student_list.list[i].nickname+"</span></p>"+
                    "<p>时间：<span>"+result.student_list.list[i].create_time+"</span></p>"+
                    "<p>状态：<span class=''>"+mine_status+"</span></p>"+
                    "</div>"+
                    "</div>"+
                    "</li>";
            }
        }
        $(".studentList").append(studentList);
        studentList="";student_list="";
        if(result.student_list.page_info.page_num < result.student_list.page_info.total_num/5) {
            if (result.student_list.list.length == 5) {
                stuBtn = "<div class='btnMore'><button onclick='ajaxTab1(1)'>下一页</button></div>";
                $(".tab-div-first").append(stuBtn);
                stuBtn = "";
            }
        }
    }
    else{
        $(".invite-first-num").eq(0).html("");
        stuBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>";
        $(".studentList").append(stuBtn);
        stuBtn="";
        // $(".tab-div-first .btnMore button").html("无数据");
    }
    $.getScript("js/total/total-summary-total.js");
}
// 会员
function createFunc2(result,url){
    $(".invite-first-num span").eq(1).html(result.member_first_num);
    // 会员
    var memberList="",member_list="",memBtn="";
    if(result.member_list.list.length>0){
        for(var j=0;j<result.member_list.list.length;j++){
            if(result.member_list.list[j].second_num==0){
                memberList+="<li class='tab-content-lis' >"+
                    "<div class='tab-content-lis-box'>"+
                    "<div class='total-cash-containers'>"+
                    "<p>姓名：<span>"+result.member_list.list[j].nickname+"</span></p>"+
                    "<p>时间：<span>"+result.member_list.list[j].create_time+"</span></p>"+
                    "<p>邀请：<span class='total-invite-money'>"+result.member_list.list[j].second_num+"</span>人</p>"+
                    "</div>"+
                    "</div>"+
                    "</li>";
            }
            else{
                member_list="";
                for(var l=0;l<result.member_list.list[j].child.length;l++){
                    var member_list_status=switchFunc(result.member_list.list[j].child[l].agent_status);
                    if(!member_list_status){
                        continue;
                    }
                    if(result.member_list.list[j].child[l].price==0){
                        member_list+="<li>"+
                            "<div class='total-cash-containers-child'>"+
                            "<p class='usernickname'>姓名：<span>"+result.member_list.list[j].child[l].nickname+"</span></p>"+
                            "<p>时间：<span>"+result.member_list.list[j].child[l].create_time+"</span></p>"+
                            "<p>状态："+member_list_status+"</p>"+
                            "</div>"+
                            "</li>";
                    }else{
                        member_list+="<li>"+
                            "<div class='total-cash-containers-child'>"+
                            "<p class='usernickname'>姓名：<span>"+result.member_list.list[j].child[l].nickname+"</span></p>"+
                            "<p>时间：<span>"+result.member_list.list[j].child[l].create_time+"</span></p>"+
                            "<p>状态："+student_list_status+"<span>"+result.member_list.list[j].child[l].price+"</span>元</p>"+
                            "</div>"+
                            "</li>";
                    }
                }
                memberList+="<li class='tab-content-lis' >"+
                    "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
                    "<div class='total-cash-containers'>"+
                    "<p>姓名：<span>"+result.member_list.list[j].nickname+"</span></p>"+
                    "<p>时间：<span>"+result.member_list.list[j].create_time+"</span></p>"+
                    "<p>邀请：<span class='total-invite-money'>"+result.member_list.list[j].second_num+"</span>人</p>"+
                    "</div>"+
                    "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
                    "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
                    "</div>"+
                    "<div class='tab-content-lis-div'>"+
                    "<ul>"+member_list+
                    "</ul>"+
                    "</div>"+
                    "</li>";
            }
        }
        $(".memberList").append(memberList);
        memberList="";
        if(result.member_list.page_info.page_num < result.member_list.page_info.total_num/5) {
            if(result.member_list.list.length==5) {
                memBtn = "<div class='btnMore'><button onclick='ajaxTab1(2)'>下一页</button></div>";
                $(".tab-div-second").append(memBtn);
                memBtn = "";
            }
        }
    }
    else{
        $(".invite-first-num").eq(1).html("");
        memBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg'></div>";
        $(".memberList").append(memBtn);
        memBtn="";
        // $(".tab-div-second .btnMore button").html("无数据");
    }
    $.getScript("js/total/total-summary-total.js");
}
// 学员&会员
function createFunc3(result,url){
    $(".invite-first-num span").eq(2).html(result.student_and_member_first_num);
    // 学员&会员
    var studentMemberList="",student_member_list="",stuMemBtn="",stuMem_status="";
    if(result.student_and_member_list.list.length>0){
        // for(var k=result.student_and_member_list.list.length-1;k>=0;k--){
        for(var k=0;k<result.student_and_member_list.list.length;k++){
            stuMem_status=switchFunc(result.student_and_member_list.list[k].agent_status,result.student_and_member_list.list[k].agent_student_status);
            // alert(mine_status);
            if(!stuMem_status){
                continue;
            }
            console.log(result.student_and_member_list.list[2]);
            // if(result.student_and_member_list.list[k].child.length==0){
            if(result.student_and_member_list.list[k].second_num==0){
                studentMemberList="<li class='tab-content-lis' >"+
                    "<div class='tab-content-lis-box'>"+
                    "<div class='total-cash-containers'>"+
                    "<p>姓名：<span>"+result.student_and_member_list.list[k].nickname+"</span></p>"+
                    "<p>时间：<span>"+result.student_and_member_list.list[k].create_time+"</span></p>"+
                    "<p>状态：<span class=''>"+stuMem_status+"</span></p>"+
                    "<p>邀请：<span class='total-invite-money'>"+result.student_and_member_list.list[k].second_num+"</span>人</p>"+
                    "</div>"+
                    "</div>"+
                    "</li>";
            }
            else{
                student_member_list="";
                // for(var g=result.student_and_member_list.list[k].child.length-1;g>=0;g--){
                for(var g=0;g<result.student_and_member_list.list[k].child.length;g++){
                    var student_member_list_status=switchFunc(result.student_and_member_list.list[k].child[g].agent_status,result.student_and_member_list.list[k].child[g].agent_student_status);
                    if(!student_member_list_status){
                        continue;
                    }
                    if(result.student_and_member_list.list[k].child[g].price==0){
                        student_member_list+="<li>"+
                            "<div class='total-cash-containers-child'>"+
                            "<p class='usernickname'>姓名：<span>"+result.student_and_member_list.list[k].child[g].nickname+"</span></p>"+
                            "<p>时间：<span>"+result.student_and_member_list.list[k].child[g].create_time+"</span></p>"+
                            "<p>状态："+student_member_list_status+"</p>"+
                            "</div>"+
                            "</li>";
                    }else{
                        student_member_list+="<li>"+
                            "<div class='total-cash-containers-child'>"+
                            "<p class='usernickname'>姓名：<span>"+result.student_and_member_list.list[k].child[g].nickname+"</span></p>"+
                            "<p>时间：<span>"+result.student_and_member_list.list[k].child[g].create_time+"</span></p>"+
                            "<p>状态："+student_member_list_status+"<span>"+result.student_and_member_list.list[k].child[g].price+"</span>元</p>"+
                            "</div>"+
                            "</li>";
                    }
                }
                // console.log(student_member_list);
                studentMemberList="<li class='tab-content-lis' >"+
                    "<div class='tab-content-lis-box' onclick='bindClickFunc(this)'>"+
                    "<div class='total-cash-containers'>"+
                    "<p>姓名：<span>"+result.student_and_member_list.list[k].nickname+"</span></p>"+
                    "<p>时间：<span>"+result.student_and_member_list.list[k].create_time+"</span></p>"+
                    "<p>状态：<span class=''>"+stuMem_status+"</span></p>"+
                    "<p>邀请：<span class='total-invite-money'>"+result.student_and_member_list.list[k].second_num+"</span>人</p>"+
                    "</div>"+
                    "<img class='total-bottom' src='img/total/total-arrow-bottom.svg'>"+
                    "<img class='total-top' src='img/total/total-arrow-top.svg'>"+
                    "</div>"+
                    "<div class='tab-content-lis-div'>"+
                    "<ul>"+student_member_list+
                    "</ul>"+
                    "</div>"+
                    "</li>";
            }
            // console.log(studentMemberList);
            $(".studentMemberList").append(studentMemberList);

        }
        // console.log(studentMemberList);
        studentMemberList="";
        student_member_list="";
        if(result.student_and_member_list.page_info.page_num < result.student_and_member_list.page_info.total_num/5) {
            if (result.student_and_member_list.list.length == 5) {
                stuMemBtn = "<div class='btnMore'><button onclick='ajaxTab1(3)'>下一页</button></div>";
                $(".tab-div-third").append(stuMemBtn);
                stuMemBtn = "";
            }
        }
    }
    else{
        // $(".invite-first-num").eq(2).html("");
        $(".invite-first-num").eq(2).html("");
        stuMemBtn="<div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg'></div>";
        $(".studentMemberList").append(stuMemBtn);
        stuMemBtn="";
        // $(".tab-div-third .btnMore button").html("无数据");
    }
    $.getScript("js/total/total-summary-total.js");
}

// function switchFunc(test,strstatus){
//     // 0无 1已报名 10已回访 20安排试听 30成功试听 40成功购课
//     switch (test){
//         case "0": "无";break;
//         case 0: "无";break;
//         case "2":return "未接通";break;
//         case 2:return "未接通";break;
//         case "10":return "已回访";break;
//         case 10:return "已回访";break;
//         case 20:return "安排试听";break;
//         case "20":return "安排试听";break;
//         case 30:return "成功试听";break;
//         case "30":return "成功试听";break;
//         case 40:return "成功购课";break;
//         case "40":return "成功购课";break;
//     }
// }
// function switchFunc(test,strstatus){
//     if(test=="0"){
//         return "无";
//     }
//     if(test=="2"){
//         return "未接通";
//     }
//     if(test=="10"){
//         return "已回访";
//     }
//     if(test=="20"){
//         return "安排试听";
//     }
//     if(test=="20" && strstatus=="100"){
//         return "安排试听[无意向]";
//     }
//     if(test=="30"){
//         return "成功试听";
//     }
//     if(test=="30" && strstatus=="100"){
//         return "成功试听[无意向]";
//     }
//     if(test=="40"){
//         return "成功购课";
//     }
// }
// 学员状态选择
function switchFunc(test,strstatus){
    // switch (test){
    //     case "0":return ["已邀请","img/total/total/invite/img-invite.svg"];break;
    //     case "2":return ["未接通","img/total/total/invite/img-invite.svg"];break;
    //     case "10":return ["课程老师已联系学员","img/total/total/invite/img-connect.svg"];break;
    //     case "20":return ["已预约","img/total/total/invite/img-order.svg"];break;
    //     case "30":return ["已试听","img/total/total/invite/img-trail.svg"];break;
    // }
    if(test=="0"){
        return "已邀请";
    }
    if(test=="2"){
        return "未接通";
    }
    if(test=="10"){
        return "课程老师已联系学员";
    }
    if(test=="20"){
        return "课程老师已联系学员[预约成功]";
    }
    if(test=="20" && strstatus=="100"){
        return "课程老师已联系学员[无意向]";
    }
    if(test=="30"){
        return "学员已上完测评课";
    }
    if(test=="30" && strstatus=="100"){
        return "学员已上完测评课[无意向]";
    }
    if(test=="40"){
        return "成功购课";
    }
}