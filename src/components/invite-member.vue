<template>
  <section class='container-total-box'>
    <ul>
      <li class='tab-content-lis'>
        <h3>邀请会员海报使用方法：</h3>
        <p>1、生成自己专属绑定其他会员的二维码海报</p>
        <p>2、长按将海报保存至本地</p>
        <p>3、将海报发送给你发展的并想成为优学优享会员的人，对方长按识别二维码</p>
        <p>4、即可使对方成为优学优享会员，并与其成为会员绑定关系</p>
      </li>
    </ul>
    <div class="invite-img-div">
      <p class="invite-img-p">
        图片正在加载中，请稍后……
      </p>
      <img :src='invites_img' class='invite-img'>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'invite-member',
    data () {
      return {
        invites_img: 'test'
      }
    },
    mounted () {
      this.AjaxToalFuncS()
      document.title = '邀请会员'
    },
    methods: {
      AjaxToalFuncS () {
//        var that = this
        this.$.ajax({
          url: this.baseUrl + 'wx_yxyx_api/get_agent_invite_img' + this.inviteStu,
          type: 'GET',
          dataType: 'JSONP',
          data: {'img_type': 2},
          success: (result) => {
            if (result['ret'] !== 0) {
              alert(result['info'])
            } else {
              // 成功
              this.invites_img = result.invite_img
              this.$('.invite-img-p').css('display', 'none')
              // that.createTotalHtml(result);
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
