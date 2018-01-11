/**
 * Created by seven on 16-12-1.
 */
$(function () {
    $('.buttons').click(function () {
        sumitTrial($(this));
    });
    $("#code-span").click(sendCode)
})
// 验证码验证

$('.ele-code').bind('input propertychange',function(){
    $(".spanTips").html("");
})
// $('.ele-code').blur(function(){
//     var code=$('.ele-code').val();
//     // var codeL=isNaN(code);
//     // var reg=/^\d+$/;
//     var reg=(/[\d]/.test(String.fromCharCode(event.keyCode)))
//     if (code.length < 4 || !reg.test(code)) {
//         console.log($('.ele-code'))
//         $('.ele-code').val("");
//         alert("请输入正确的验证码");
//         return;
//     }
// });
// 实时监测手机号输入位数正确时发送验证码按钮颜色变化
$('.ele-phone').bind('input propertychange',function(){
    $(".spanTips").html("");
    var phone = $('.ele-phone').val();
    if(phone.length==11){
        $("#code-span").css({"color":"#f87b4c","border":"1px solid #f87b4c"});
    }else{
        $("#code-span").css({"color":"#ccc","border":"1px solid #ccc"});
    }
})
// 提交
function sumitTrial(node) {
    var dialog = new auiDialog();
    // if (!netBtnEnable(node)) {
    //     return;
    // }
    var node_phone = node.parent().parent().find('.ele-phone');
    var node_code = node.parent().parent().find('.ele-code');
    var phone = node_phone.val();
    var code = node_code.val();
    var phoneReg = /(^1\d{10}$)/;
    var reg=/^\d{4}$/;
    // |(^+1\d{10}$)
    $(".spanTips").html("");
    if(!phoneReg.test(phone) && !reg.test(code)){
        node.parent().parent().find('.ele-code').val("");
        node.parent().parent().find('.ele-phone').val("");
        // alert("请输入合法的手机号");
        $(".spanTips").html("输入错误");
        return;
    }
    if(!phoneReg.test(phone)){
        node.parent().parent().find('.ele-phone').val("");
        // alert("请输入合法的手机号");
        $(".spanTips").html("手机号输入错误");
        return;
    }
    // $(".input-div").eq(0).html("");
    if (!reg.test(code)) {
        console.log($('.ele-code'));
        node.parent().parent().find('.ele-code').val("");
        // $('.ele-code').val("");
        $(".spanTips").html("验证码输入错误");
        // alert("请输入正确的验证码");
        return;
    }

    var requestData = {
        // 'type': reg_type,
        'phone': phone,
        // 'p_phone':p_phone,
        'code':code
    }
    $.ajax({
        url: baseUrl+'/wx_yxyx_common/bind',
        data: requestData,
        dataType: 'JSONP',
        success: function (result) {
            if (result['ret'] != 0) {
                alert(result['info']);
                // dialog.alert({
                //     title:"",
                //     msg:strHtml,
                //     buttons:["<section class='cashIng'>"+
                //     "<button class='buttons'><p>再试一次</p></button>"+
                //     "</section>"]
                // },function(ret){
                //     console.log(ret)
                //
                // })
            } else {
                window.location.href='login-suc.html';
            }
        },
        error: function () {
            alert("网络不太通畅，请稍后再试");
        }
    });
}
function codeTimer(countSec) {
    var codeInt =  setInterval(function () {
        if(countSec == 0){
            clearInterval(codeInt)
            $("#code-span").text('重新获取')
            $("#code-span").on('click',sendCode);
            return;
        }
        $("#code-span").text(countSec-- + '秒')
    },1000)
}

function sendCode() {
    var phone = $('.ele-phone').val();
    var phoneReg = /(^1\d{10}$)/;
    $(".login_container span").html("");
    if(!phoneReg.test(phone)){
        $('.ele-phone').val("");
        // alert("请输入合法的手机号");
        $(".spanTips").html("手机号输入错误");
        return;
    }
    $(".login_container span").html("");
    $("#code-span").off('click');
    $.ajax({
        url: baseUrl+'/wx_yxyx_common/send_phone_code',
        data: {
            'phone': phone
        },
        dataType: 'JSONP',
        success: function (result) {
            if (result['ret'] != 0) {
                $("#code-span").text("重新获取")
                $("#code-span").on('click',sendCode);
                alert(result['info']);
            } else {
                // alert(result.code);
                codeTimer(60)

            }
        },
        error: function () {
            alert("网络不太通畅，请稍后再试");
            $("#code-span").on('click',sendCode);
        }
    });
}