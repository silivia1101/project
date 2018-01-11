// 倒计时
var interval = 1000;
//大转盘规则
 // 关闭弹框按钮
/* $(".cjgz-c").on('click', function() {
	$(".zz").hide();
	$(".zpgz").hide();
}); */
//抽奖代码
$(function() {
    // $(".zz").show();
    // $(".jl-tk").show();
	// var result=4;
    // createTotalHtml(result);
    AjaxToalFunc(baseUrl+"wx_yxyx_api/get_daily_lottery_count"+userId);
});
function createTotalHtml(result){
    var $btn = $('.g-lottery-img'); // 旋转的div
    var cishu = result.left_daily_lottery_count; //初始次数，由后台传入
    // var cishu = 2; //初始次数，由后台传入
    $('#cishu').html(cishu); //显示还剩下多少次抽奖机会
    var isture = 0; //是否正在抽奖
    var clickfunc = function(result) {
        switch (result.the_prize) {
            case 1: data=3;break;
            case 2: data=6;break;
            case 3: data=8;break;
            case 4: data=7;break;
            case 5: data=5;break;
            case 6: data=2;break;
            case 7: data=4;break;
            case 8: data=1;break;
        };
        switch (data) {
            case 1:
                // rotateFunc(1, 7, '1');
                rotateFunc(1, 5, "<p class='texts'><img src='img/award/img1.svg'></p><p class='ok-img'>知道了</p>");
                break;
            case 2:
                rotateFunc(2, 50, "<p class='texts'><img src='img/award/img05.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(2, 54, 'img/award/img05.svg');
                // rotateFunc(2, 54, '0.5');
                break;
            case 3:
                rotateFunc(3, 95, "<p class='texts'><img src='img/award/img-more.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(3, 98, '再接再厉');
                break;
            case 4:
                rotateFunc(4, 140, "<p class='texts'><img src='img/award/img08.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(4, 145, '0.8');
                break;
            case 5:
                rotateFunc(5, 185, "<p class='texts'><img src='img/award/img01.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(5, 190, '0.1');
                break;
            case 6:
                rotateFunc(6, 230, "<p class='texts'><img src='img/award/img-more.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(6, 235, '再接再厉');
                break;
            case 7:
                rotateFunc(7, 275, "<p class='texts'><img src='img/award/img005.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(7, 280, '0.05');
                break;
            case 8:
                rotateFunc(8, 320, "<p class='texts'><img src='img/award/img001.svg'></p><p class='ok-img'>知道了</p>");
                // rotateFunc(8, 320, '0.01');
                break;
        }
    };
    $(".btnAward").click(function() {
        $(".zz").hide();
        if (isture) return; // 如果在执行就退出
        isture = true; // 标志为 在执行
        // 测试
        if (cishu <= 0) { //当抽奖次数为0的时候执行
            // $(".zz").show();
            // $(".ok-img").on('click', function() {
            // 	$(".zz").hide();
            // });
            $('#cishu').html(0); //次数显示为0
            alert("没有次数了");
            isture = false;
        }
        else { //还有次数就执行
            cishu = cishu - 1; //执行转盘了则次数减1
            if (cishu <= 0) {
                cishu = 0;
            }
            $('#cishu').html(cishu);
            $.ajax({
                url: baseUrl+"wx_yxyx_api/do_daily_lottery"+userId,
                type: 'GET',
                // async:false,
                dataType: 'JSONP',
                data: {},
                success: function (result) {
                    if (result['ret'] != 0) {
                        alert(result['info']);
                    } else {
                        // 成功
                        // alert("test="+result.the_prize);
                        clickfunc(result);
                    }
                },
                error: function () {
                    alert("网络不太通畅，请稍后再试");
                }
            });
        }
    });
    var rotateFunc = function(awards, angle, text) {
        isture = true;
        $btn.stopRotate();
        $btn.rotate({
            angle: 0, //旋转的角度数
            duration: 4000, //旋转时间
            animateTo: angle + 1440, //给定的角度,让它根据得出来的结果加上1440度旋转
            callback: function() {
                isture = false; // 标志为 执行完毕
                // alert(text);
                $(".jl-tk").html(text);
                // $(".texts").html("<img src='"+text+"'>");
                $(".zz").show();
                $(".jl-tk").show();
				/* $(".cjgz-c").on('click', function() {
				 $(".zz").hide();
				 $(".jl-tk").hide();
				 }); */
                $(".ok-img").on('click', function() {
                    $(".zz").hide();
                    $(".jl-tk").hide();
                });
            }
        });
    };
}