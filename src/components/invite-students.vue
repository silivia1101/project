<template>
  <section class='container-total-box'>
    <ul>
        <li class='tab-content-lis'>
            <h3>邀请学员海报使用方法：</h3>
            <p>1、生成带有自己微信头像和自己专属邀请报名二维码海报</p>
            <p>2、长按将海报保存至本地</p>
            <p>3、将海报发送给需要报名免费1对1测评课的家长</p>
            <p>4、对方通过长按识别二维码即可进入表单，填写信息即可报名免费1对1测评课</p>
        </li>
    </ul>
    <div class='invite-img-div'>
        <p class='invite-img-p'>
            图片正在加载中，请稍后……
        </p>
        <img :src='invites_img' class='invite-img'>
    </div>
  </section>
</template>

<script>
export default {
  name: 'invite-students',
  data () {
    return {
      invites_img: 'test'
    }
  },
  mounted () {
    this.AjaxToalFuncS()
    document.title = '邀请学员'
  },
  methods: {
    AjaxToalFuncS () {
//    var that = this
      this.$.ajax({
        url: this.baseUrl + 'wx_yxyx_api/get_agent_invite_img' + this.inviteStu,
        type: 'GET',
        dataType: 'JSONP',
        data: {'img_type': 1},
        success: (result) => {
	        if (result['ret'] !== 0) {
	          alert(result['info'])
	        } else {
	          // 成功
	          this.invites_img = result.invite_img
	          this.$('.invite-img-p').css('display', 'none')
	          // that.createTotalHtml(result)
	        }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
