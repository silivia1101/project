/**
 * Created by LE on 2017/10/27.
 */
$(function(){
    AjaxCreate();
})
function AjaxCreate(){
    AjaxToalFunc(baseUrl+"wx_yxyx_api/my_income_info"+userId);
}
function createTotalHtml(result){
    var strHtml="<section class='aui-content aui-margin-t-10 aui-margin-b-10'>"+
        "<ul class='aui-list aui-list-in'>"+
        "<li class='aui-list-item' onclick='clickFunc(1)'>"+
        "<div class='aui-list-item-inner'>"+
        "<div class='aui-list-item-title total-first'>"+
        "总收入金额"+
        "</div>"+
        "<div class='aui-list-item-right'><span>"+result.income_info.all_money+"元</span><img src='img/total/total-arrow.svg'>"+
        "</div>"+
        "</div>"+
        "</li>"+
        "<li class='aui-list-item' onclick='clickFunc(2)'>"+
        "<div class='aui-list-item-inner'>"+
        "<div class='aui-list-item-title total-second'>"+
        "可提现"+
        "</div>"+
        "<div class='aui-list-item-right'><span>"+result.income_info.open_moeny+"元</span><img src='img/total/total-arrow.svg'>"+
        "</div>"+
        "</div>"+
        "</li>"+
        "<li class='aui-list-item' onclick='clickFunc(3)'>"+
        "<div class='aui-list-item-inner'>"+
        "<div class='aui-list-item-title total-third'>"+
        "已提现"+
        "</div>"+
        "<div class='aui-list-item-right'><span>"+result.income_info.all_have_cush_money+"元</span><img src='img/total/total-arrow.svg'>"+
        "</div>"+
        "</div>"+
        "</li>"+
        "<li class='aui-list-item' onclick='clickFunc(4)'>"+
        "<div class='aui-list-item-inner'>"+
        "<div class='aui-list-item-title total-fouth'>"+
        "提现中"+
        "</div>"+
        "<div class='aui-list-item-right'><span>"+result.income_info.is_cash_money+"元</span><img src='img/total/total-arrow.svg'>"+
        "</div>"+
        "</div>"+
        "</li>"+
        "</ul>"+
        "</section>"+
        "<section class='cashIngBox'>"+
        "<img src='img/total/total-img5.svg' alt=''>"+
        "<p class='moneys'>"+result.income_info.open_moeny+"元</p>"+
        "<p class='moneyTip'>我的可提现金额</p>"+
        "<section class='cashIng'>"+
        "<button class='buttons'><p>申请提现</p></button>"+
        "</section>"+
        "</section>"+
        "<section class='total-footer'>"+
        "为方便工作人员打款，每次申请都必须全部提现，每次提现到账时间为7个工作日"+
    "</section>";
    $(".container-total-box").html(strHtml);
    // alert("可提现金额="+result.income_info.open_moeny);
    // alert("正在提现="+result.income_info.is_cash_money);
    if(result.income_info.open_moeny==0){
        $(".buttons").css("opacity","0.5");
    }else if(result.income_info.open_moeny<25){
        $(".buttons").css("opacity","0.5");
    }else if(result.income_info.is_cash_money!=0){
        $(".buttons").css("opacity","0.5");
    }
    else{
        $(".buttons").css("opacity","1");
        $(".buttons").click(function(){
            clickFunc(5);
        });
    }
}