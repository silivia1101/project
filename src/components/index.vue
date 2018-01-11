<template>
  <section class="containers-box">
    <!-- 广告条 -->
    <div class="aui-tips" id="tips-1">
        <img src='static/img/index/img1.svg' alt=''>
        <div class='aui-tips-title'><marquee>{{msg}}</marquee></div>
        <img src='static/img/index/img1-2.svg' @click='closeTips()'>
    </div>
    <!-- 用户信息 -->
    <section class="header-user-box">
        <section class="aui-content header-user">
          <div class='btn userTip' data-toggle='modal' data-target='#myModal'>
          </div>
          <div class='userImg'>
              <img :src='wx_headimgurl' alt=''>
          </div>
          <div class='userName'>{{usernick}}</div>
          <div  class='userTitle'>
            <img @click='memberFunc(strImg1)' :src='strImg2' alt=''>
          </div>
        </section>
        <section class="header-user-sibling">
        </section>
    </section>
    <!-- 邀请详情 -->
    <section class="mine">
      <h3 class="hDiv">邀请详情</h3>
      <div class='totalNum'>
        <dl class='total-left' @click='memberFunc(3)'>
          <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second//img/index/img4.svg' alt=''></dt>
            <dd>
            <p class='total-left-mine'>我的收入</p>
            <p class='total-left-money'>{{all_money}}元</p>
          </dd>
        </dl>
        <dl class='total-right' @click='memberFunc(4)'>
          <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img5.svg' alt=''></dt>
          <dd>
            <p class='total-right-invite'>邀请个数</p>
            <p class='total-right-count'>{{child_all_count}}个</p>
          </dd>
        </dl>
      </div>
    </section>
    <!-- 热门活动 -->
    <section class="activity">
      <h3 class="hDiv">热门活动</h3>
        <div class='totalNum'>
        <dl class='total-left dl-bottom hotActivity col-xs-4' @click='memberFunc(5)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img6.svg' ></dt>
        <dd>
        邀请学员
        </dd>
        </dl>
        <dl class='total-left dl-bottom col-xs-4' @click='memberFunc(6)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img7.svg'></dt>
        <dd>
        邀请会员
        </dd>
        </dl>
        <dl class='total-right dl-bottom col-xs-4' @click='memberFunc(7)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img8.svg'></dt>
        <dd>
        每日抽奖
        </dd>
        </dl>
        <dl class='total-left col-xs-4' @click='memberFunc(8)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img9.svg' alt=''></dt>
        <dd>
        更多活动
        </dd>
        </dl>
        </div>
    </section>
    <!-- 理优简介 -->
    <section class="leoIntroduce">
      <h3 class="hDiv">理优简介</h3>
        <div class='totalNum'>
        <dl class='total-left dl-bottom col-xs-4' @click='memberFunc(91)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img10.svg'></dt>
        <dd>
        理优教育
        </dd>
        </dl>
        <dl class='total-left dl-bottom col-xs-4' @click='memberFunc(92)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img11.svg'></dt>
        <dd>
        精品内容
        </dd>
        </dl>
        <dl class='total-right dl-bottom col-xs-4' @click='memberFunc(93)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img12.svg'></dt>
        <dd>
        学员反馈
        </dd>
        </dl>
        <dl class='total-left col-xs-4' @click='memberFunc(94)'>
        <dt><img src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img13.svg'></dt>
        <dd>
        预约试听
        </dd>
        </dl>
        </div>
    </section>

    <!-- 模态框（Modal） -->
    <div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
        <div class='modal-dialog'>
            <img src="../../static/img/index/img-header.svg" alt="">
            <div class='modal-content'>
                <div class='modal-header'>
                </div>
                <div class='modal-body'>
                    <div class='tabbable' id='tabs-250138'>
                        <ul class='nav nav-tabs'>
                            <li class='active'>
                                <a href='#panel-756045' data-toggle='tab'>邀请规则</a>
                            </li>
                            <li>
                                <a href='#panel-985168' data-toggle='tab'>常见问题</a>
                            </li>
                        </ul>
                        <div class='tab-content'>
                            <div class='tab-pane active' id='panel-756045'>
                                <h4>【邀请奖励】</h4>
                                <ul>
                                    <li>1、成功邀请学员，获得5元奖励</li>
                                    <li>2、老师成功联系学员，获得5元奖励</li>
                                    <li>3、学员预约测评课，获得10元奖励</li>
                                    <li>4、学员成功上完测评课，获得30元奖励</li>
                                    <!--<li class="litip">注：学员成功上完测评课，邀请奖励才可提现，满200元可提现。</li>-->
                                <!--</ul>-->
                                <h4>【签单佣金】</h4>
                                <p>黄金会员</p>
                                <!--<ul>-->
                                    <li>（1）被邀请人首次试听成功，可获得50元邀请奖励。</li>
                                    <li>（2）被邀请人首次购买课程，将获得课程实际收入的5%作为佣金福利，单笔佣金至多可获得500元。</li>
                                <!--</ul>-->
                                <p>水晶会员</p>
                                <!--<ul>-->
                                    <li>（1）被邀请人首次试听成功，可获得50元邀请奖励。</li>
                                    <li>（2）被邀请人首次购买课程，将获得课程实际收入的10%作为佣金，单笔佣金至多可获得1000元。</li>
                                    <li>（3）被邀请人又邀请了其他人首次试听成功，可获得25元邀请奖励。</li>
                                    <li>（4）被邀请人又邀请了其他人购买了课程，可获得其他人购买课程实际收入的5%作为佣金，单笔佣金至多可获得500元。</li>
                                <!--</ul>-->
                                <p>【提现规则】</p>
                                <!--<ul>-->
                                    <li>（1）当被邀请人成功上满2次课（含2次）后，可在个人中心申请提现单笔佣金的20%</li>
                                    <li>（2）当被邀请人成功上满8次课后（含8次），可在个人中心申请佣金全部提现。</li>
                                    <li class="litip">注：当被邀请人未上满2次课（不含2次）退费，将冻结此笔佣金，无法提现。</li>
                                <!--</ul>-->
                                <p>【提现金额】</p>
                                <!--<ul>-->
                                    <li>当用户满足提现规则，可提现金额将一次性全部提出。</li>
                                <!--</ul>-->
                                <p>【提现方式】</p>
                                <!--<ul>-->
                                    <li>（1）支付宝（2）银行卡</li>
                                <!--</ul>-->
                                <h4>【提现周期】</h4>
                                <!--<ul>-->
                                    <li>当用户满足提现金额并申请提现，申请提现后7个工作日发放至用户指定账号，如遇节假日顺延至节假日结束后7个工作日内。</li>
                                    <li>备注：如遇支付平台系统故障或网络故障，提现可能会稍有延迟，敬请谅解。</li>
                                    <li class="litip">注意事项：曾试听过或自行报名过试听课（非优学优享）的学员，在60天内，再次通过识别优学优享邀请海报二维码报名，无法再次报名。</li>
                                </ul>
                            </div>
                            <div class='tab-pane' id='panel-985168'>
                                <ul>
                                    <p>Q：如何获得优学优享账号</p>
                                    <li>A：1.理优账号与优学优享账号是关联的。理优学员进入“优学优享”服务号→点击“账号管理”→点击“登录账号”即可。</li>
                                    <li> 2.非理优学员进入“优学优享”服务号→点击“账号”→点击“注册账号”</li>

                                    <p>Q：同一手机号的理优账号与优学优享账号如何关联</p>
                                    <li>A：账号生成后自动关联，不同手机号的账号无法关联</li>
                                    <p>Q：账号等级有什么用</p>
                                    <li>A：账号等级不同，所获得的佣金不同。会员等级分为【黄金会员】和【水晶会员】</li>
                                    <p>Q：邀请人及被邀请人可获得什么福利</p>
                                    <li>A：1.邀请人：根据账号等级享有邀请奖励和佣金福利</li>
                                    <li>黄金会员</li>
                                    <li>（1）被邀请人首次试听成功，可获得50元邀请奖励。</li>
                                    <li>（2）被邀请人首次购买课程，将获得课程实际收入的5%作为佣金福利，单笔佣金至多可获得500元。</li>
                                    <li>水晶会员</li>
                                    <li>（1）被邀请人首次试听成功，可获得50元邀请奖励。</li>
                                    <li>（2）被邀请人首次购买课程，将获得课程实际收入的10%作为佣金，单笔佣金至多可获得1000元。</li>
                                    <li>（3）被邀请人又邀请了其他人首次试听成功，可获得25元邀请奖励。</li>
                                    <li>（4）被邀请人又邀请了其他人购买了课程，可获得其他人购买课程实际收入的5%作为佣金，单笔佣金至多可获得500元。</li>
                                    <li>2.被邀请人：被邀请人免费享受价值200元一节的名师测评课。</li>
                                    <li>【注：具体详情请在“优学优享”服务号→个人中心→邀请规则中查看。】</li>
                                    <p>Q：如何获取邀请券邀请好友</p>
                                    <li>A：进入“优学优享”服务号→在底部菜单栏中点击“我要邀请”→自动生成专属邀请券</li>
                                    <p>Q：如何使用邀请券</p>
                                    <li>将邀请券通过朋友圈或微博转发给好友，好友扫描二维码即可。</li>
                                    <p>Q：如何查看账号等级</p>
                                    <li>A：进入“优学优享”服务号→点击“账号管理”→点击“个人中心”在头像下方可查看账号等级</li>
                                    <p>Q：好友购课成功后如何查看佣金</p>
                                    <li>A：当您邀请的好友购课成功后，在“账号管理”→点击“个人中心”→点击“我的收入”中查看佣金情况</li>
                                    <p>Q：如何提取佣金</p>
                                    <li>A：进入“优学优享”服务号→点击“账号管理”→点击“个人中心”→点击“我要提现”。通过审核后，佣金会转入您指定的银行卡或支付宝账号。</li>
                                    <li class="litip">注：提现规则详情请见，“账号管理”→点击“个人中心”→“我要提现”→“提现规则”</li>
                                    <p>Q：申请提现周期</p>
                                    <li>A：申请提现后7个工作日发放至您指定的银行卡或支付宝账号。</li>
                                    <p>Q：如何查看提现进度</p>
                                    <li>A：进入“优学优享”服务号→点击“账号管理”→点击“个人中心”→点击“已提现”查看提现进度。</li>
                                    <p>Q：邀请券有没有使用次数</p>
                                    <li>邀请券不限次数。</li>
                                    <p>Q：如何查看邀请的人数与邀请的好友状态</p>
                                    <li>A：进入“优学优享”服务号→点击“账号管理”→点击“个人中心”→选择“学员详情”。在“学员详情”中，可查看成功购课人数与邀请人数以及状态。</li>
                                    <p>Q：邀请朋友，但他没有通过扫描二维码方式注册，而是自己注册，能关联起来么？</p>
                                    <li>A：不能关联，请务必告知好友扫描邀请券注册。（如有疑问请在服务号留言）</li>
                                    <li class="litip">注意事项：曾试听或自行报名（非优学优享）用户，在60天内，再次通过识别优学优享邀请海报二维码报名，依然可以成功报名课程，但无法成为推荐人的B用户或C用户</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-content-footer"></div>
                    </div>
                </div>
                <div class='modal-footer'>
                    <button type='button' class='btn btn-default' data-dismiss='modal'></button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>
  </section>
</template>

<script>
//import axios from 'axios'
import LeoHttp from 'util/http';
//const http = axios.create({
//	  	baseUrl: 'http://wx-yxyx.leo1v1.com',
//	  	timeout: 1000,
//	  	header: {'Content-Type': 'application/x-www-form-urlencoded;'}
//	  });
const leoHttp = new LeoHttp();
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
      indexTip: 0,
      tTime: '',
      strTip: ''
    }
  },
//  页面打开调用函数
  mounted () {
    this.onloadUp()
    document.title = '个人中心'
    //console.log(http)
   	console.log(leoHttp)
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
//    $.ajax({
//      'url': baseUrl + 'wx_yxyx_common/top_invite_list' + userId,
//      'type': 'POST',
//      'dataType': 'jsonp',
//      'data': {},
//      async: true,
//      success: (result) => {
//        console.log(result)
//        if (result['ret'] !== 0) {
//          alert(result['info'])
//          // $api.remove($api.byId("tips-1"))
//        } else {
//          // 反馈成功
//          if (result.list.length !== 0) {
//            this.setTimes(result)
//          } else {
//
//          }
//        }
//      },
//      error: function () {
//        alert('网络不太通畅，请稍后再试')
//      }
//    })
      
//    Ajax({
//			method: 'post',
//			url: '/wx_yxyx_common/top_invite_list"+userId',
//			data: {
////				firstName: 'fred'
//			}
//		})
//		.then(res => {
//			console.log(res);
//		});
      
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
			} else {
		    setInterval(() => {
		      this.marTip(result)
		    }, 8000)
			}
    },
//    根据判断调用marqueeHtml函数并传入不同参数
    marTip (result)  {
		    if (this.indexs === 0) {
		        this.indexs++
		        this.marqueeHtml(result)
		        this.indexTip = this.indexTip + 1
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
	    this.tTime = parseDate(result.list[this.indexTip].create_time)
	    this.strTip = result.list[this.indexTip].from_nick + '于' + this.tTime + '成功邀请了' + result.list[this.indexTip].new_nick
	    // $(".aui-tips-title marquee").html(strTip)
	    return this.msg = this.strTip
    },
//    Ajax获取用户信息
    getUserInfo () {
      $.ajax({
//          "url": 'http://test.admin.leo1v1.com/wx_yxyx_api/get_user_center_info?_agent_id=54',
	      'url': baseUrl + 'wx_yxyx_api/get_user_center_info' + userId,
	      'type': 'POST',
	      'dataType': 'jsonp',
	      'data': {},
	      async: true,
	      success: (result) => {
	          if (result['ret'] !== 0) {
	            // alert(result['info']);
	        		this.$router.push('/login')
	          } else {
	            // 反馈成功
	            this.buildingHtml(result)
	          }
	      },
	      error: function () {
	        alert('网络不太通畅，请稍后再试')
	      }
      })
    },
//    根据ajax获取到的结果绘制页面数据
    buildingHtml (result) {
      this.wx_headimgurl = result.user_info_list.wx_headimgurl
      this.usernick = result.user_info_list.usernick
      this.all_money = result.user_info_list.all_money
      this.child_all_count = result.user_info_list.child_all_count
      // 用户信息  this.
      $('.header-user-sibling').css({'backgroundImage': 'url(' + result.user_info_list.wx_headimgurl + ')', 'opacity': 0.3, 'backgroundPosition': 'center'})
      if (result.user_info_list.agent_level_str === '水晶会员') {
        this.strImg1 = '2'
        this.strImg2 = 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img-diamond.svg'
      } else if (result.user_info_list.agent_level_str === '黄金会员' && result.user_info_list.test_lesson_succ_flog === 1) {
        this.strImg1 = '11'
        this.strImg2 = 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img-gold.svg'
      } else if (result.user_info_list.agent_level_str === '黄金会员' && result.user_info_list.test_lesson_succ_flog === 0) {
        this.strImg1 = '1'
        this.strImg2 = 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/index/img-gold.svg'
      }
      this.p_phone = result.user_info_list.phone
      this.wx_openid = result.user_info_list.wx_openid
    },
//    页面路由跳转
    memberFunc (num) {
      switch (num) {
        case '1':
	        this.$router.push('/member-gold')
	        break
        case '11':
	        this.$router.push('/member-gold-trail')
	        break
        case '2':
	        this.$router.push('/member-diamond')
	        break
        case 3:
          this.$router.push('/total-summary')
          break
        case 4:
          this.$router.push('/invite-num')
          break
        case 5:
          this.$router.push('/invite-students')
          break
        case 6:
          this.$router.push('/invite-member')
          break
        case 7:
	        this.$router.push('/lottery-draw')
	        break
        case 8:
          this.$router.push('/more-activity')
          break
        case 91:
          window.location.href = 'http://wx-yxyx-web.leo1v1.com/wx_yxyx_leo-Introduction/index.html'
          break
        case 92:
          window.location.href = 'http://wx-yxyx-web.leo1v1.com/wx_yxyx_BoutiqueContent/index.html'
          break
        case 93:
          window.location.href = 'http://wx-yxyx-web.leo1v1.com/wx_yxyx_student_feedback/index.html'
          break
        case 94:
          window.location.href = 'http://www.leo1v1.com/market-l/index.html'
          break
        default:
          break
      }
    }
  }
//  ,
//  beforeDestroy: function () {
//		
//	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  @import "../../static/css/index.less";
</style>
