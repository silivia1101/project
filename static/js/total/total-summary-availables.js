// $(function(){
//     AjaxToalFunc(baseUrl+"wx_yxyx_api/agent_reward_sort_sum"+userTot1)
// })
$(function(){
    AjaxToalFuncS();
    // AjaxToalFunc(baseUrl+"wx_yxyx_api/agent_reward_sort_sum"+userTot0)
})
function AjaxToalFuncS(){
    $.ajax({
        url: baseUrl+"wx_yxyx_api/agent_reward_sort_sum"+userId,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: {'check_flag':1},
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
    var invite_reward=result.invite_reward,commission_reward=result.commission_reward,activity_money=result.activity_money;
    if(!invite_reward){
        invite_reward=0;
    }
    if(!commission_reward){
        commission_reward=0;
    }
    if(!activity_money){
        activity_money=0;
    }
    var str="<section class='cashIngBox' onclick='clickFunc(21)'>"+
        "<img src='img/total/total/img1.svg'>"+
        "<p class='moneyTip'>邀请奖励<span>（"+invite_reward+"）元</span></p>"+
        "</section>"+
        "<section class='cashIngBox' onclick='clickFunc(22)'>"+
        "<img src='img/total/total/img2.svg'>"+
        "<p class='moneyTip'>佣金奖励<span>（"+commission_reward+"）元</span></p>"+
        "</section>"+
        "<section class='cashIngBox' onclick='clickFunc(23)'>"+
        "<img src='img/total/total/img3.svg'>"+
        "<p class='moneyTip'>活动奖励<span>（"+activity_money+"）元</span></p>"+
        "</section>";
    $(".container-total-box").html(str);
}