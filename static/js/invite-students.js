/**
 * Created by LE on 2017/11/11.
 */
$(function(){
    AjaxToalFuncS();
})
function AjaxToalFuncS(){
    $.ajax({
        url: baseUrl+"wx_yxyx_api/get_agent_invite_img"+inviteStu,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: {'img_type':1},
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
    var str="<img src='"+result.invite_img+"' class='invite-img'>";
    $(".invite-img-div").html(str);
}