<template>
	<section class="container-total-box">
	  <div class="login_container">
	    <img src="img/login/banner.svg" class="login-img">
	    <div class="input-div">
	      <img src="img/login/tel.svg" alt="">
	      <input type="number" pattern="[0-9]*" class="input-txt ele-phone" placeholder="请输入手机号"/>
	      <!--<input type="number" class="input-txt ele-phone" value="17283478374" placeholder="请输入手机号"/>-->
	    </div>
	    <div class="input-div">
	      <img src="img/login/code.svg" alt="">
	      <input type="number" class="input-txt ele-code" placeholder="请输入验证码"/>
	      <span id="code-span">获取验证码</span>
	    </div>
	    <span class="spanTips" style="color: #f00;"></span>
	  </div>
	  <section class='cashIng'>
	    <button class='buttons'><p>立即报名</p></button>
	  </section>
	</section>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '',
      wx_headimgurl: '',
      usernick: '',
      all_money: '',
      child_all_count: '',
      strImg1: '1',
      strImg2: '',
      p_phone: '',
      wx_openid: '',
      indexs: 0,
      indexTip: 0
    }
  },
//  页面打开调用函数
  mounted () {
    this.onloadUp()
    document.title = '个人中心'
  },
  methods: {
//      点击关闭滚动条
    closeTips () {
      this.$api.remove(this.$api.byId('tips-1'))
    },
//    信息调用接口
    onloadUp () {
      this.getUserTips()
      this.getUserInfo()
    },
//    获取顶部显示信息（滚动条）
    getUserTips () {
//      var that=this
      $.ajax({
        'url': baseUrl + 'wx_yxyx_common/top_invite_list' + userId,
        'type': 'POST',
        'dataType': 'jsonp',
        'data': {},
        async: true,
        success: (result) => {
          console.log(result)
          if (result['ret'] !== 0) {
            alert(result['info'])
            // $api.remove($api.byId("tips-1"))
          } else {
            // 反馈成功
            if (result.list.length !== 0) {
              this.setTimes(result)
            } else {

            }
          }
        },
        error: () => {
          alert('网络不太通畅，请稍后再试')
        }
      })
//      this.$http.post("http://wx-yxyx.leo1v1.com/wx_yxyx_common/top_invite_list"+userId)
//        .then((result) => {
//          console.log(result)
//          if (result['ret'] != 0) {
//            alert(result['info'])
//          } else {
//            // 反馈成功
//            if(result.list.length!=0){
//              this.setTimes(result,0,0)
//            }else{
//
//            }
//          }
//        })
//        .catch((error) => {
//          console.log(error);
//        });
    },
//    设置定时器
    setTimes (result) {
			if (this.indexs === 0) {
			  this.marTip(result)
			}else{
		    setInterval(function () {
		      this.marTip(result)
		    }, 8000)
			}
    },
//    根据判断调用marqueeHtml函数并传入不同参数
    marTip (result)  {
		    if (this.indexs === 0) {
		        this.indexs++
		        this.marqueeHtml(result)
		        this.indexTip = this.indexTip+1
		        this.setTimes(result)
		    } else {
		        if (this.indexTip <= result.list.length - 1) {
		            // 广播条
		            this.marqueeHtml(result)
		            this.indexTip = this.indexTip + 1
		        } else if (this.indexTip > result.list.length - 1) {
		            this.indexTip = 0
		            this.marqueeHtml(result)
		        }
		    }
    },
//    动态创建滚动条显示内容
    marqueeHtml (result) {
        var tTime = parseDate(result.list[this.indexTip].create_time)
        var strTip = result.list[this.indexTip].from_nick+'于'+tTime+'成功邀请了'+result.list[this.indexTip].new_nick
        // $(".aui-tips-title marquee").html(strTip)
        return this.msg = strTip
    },
//    Ajax获取用户信息
    getUserInfo () {
//        var that=this
        $.ajax({
//          "url": 'http://test.admin.leo1v1.com/wx_yxyx_api/get_user_center_info?_agent_id=54',
           'url': baseUrl+ 'wx_yxyx_api/get_user_center_info'+ userId,
          'type': 'POST',
          'dataType': 'jsonp',
          'data': {},
          async: true,
          success: (result) => {
              if (result['ret'] !== 0) {
                  // alert(result['info']);
                  window.location.href = 'login.html'
                  
              } else {
                  // 反馈成功
                  this.buildingHtml(result)
              }
          },
          error: () => {
            alert('网络不太通畅，请稍后再试')
          }
      });
    },
//    根据ajax获取到的结果绘制页面数据
    buildingHtml (result) {
      this.wx_headimgurl = result.user_info_list.wx_headimgurl
      this.usernick = result.user_info_list.usernick
      this.all_money = result.user_info_list.all_money
      this.child_all_count = result.user_info_list.child_all_count
      // 用户信息
      $('.header-user-sibling').css({'backgroundImage':'url('+result.user_info_list.wx_headimgurl+')', 'opacity': 0.3, 'backgroundPosition':'center'})

      if (result.user_info_list.agent_level_str === '水晶会员') {
          this.strImg1 = '2'
          this.strImg2 = 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img-diamond.svg'
      } else if (result.user_info_list.agent_level_str === '黄金会员' && result.user_info_list.test_lesson_succ_flog==1) {
          this.strImg1 = '11'
          this.strImg2 = 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img-gold.svg'
      } else if (result.user_info_list.agent_level_str === '黄金会员' && result.user_info_list.test_lesson_succ_flog==0) {
          this.strImg1 = '1'
          this.strImg2 = 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img-gold.svg'
      }
      this.p_phone = result.user_info_list.phone
      this.wx_openid = result.user_info_list.wx_openid
    },
//    页面路由跳转
    memberFunc (num)  {
      switch (num) {
        case '1':
            this.$router.push('/member-gold')
            break;
        case '11':
            this.$router.push('/member-gold-trail')
            break;
        case '2':
            this.$router.push('/member-diamond')
            break;
        case 3:
            this.$router.push('/total-summary')
            break;
        case 4:
            this.$router.push('/invite-num')
            break;
        case 5:
            this.$router.push('/invite-students')
            break;
        case 6:
            this.$router.push('/invite-member')
            break;
        case 7:
            this.$router.push('/lottery-draw')
            break;
        case 8:
            this.$router.push('/more-activity')
            break;
        case 91:
            window.location.href="http://wx-yxyx-web.leo1v1.com/wx_yxyx_leo-Introduction/index.html"
            break;
        case 92:
            window.location.href="http://wx-yxyx-web.leo1v1.com/wx_yxyx_BoutiqueContent/index.html"
            break;
        case 93:
            window.location.href="http://wx-yxyx-web.leo1v1.com/wx_yxyx_student_feedback/index.html"
            break;
        case 94:
            window.location.href="http://www.leo1v1.com/market-l/index.html"
            break;
        default:
            break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  @import "../../static/css/index.less";
</style>
