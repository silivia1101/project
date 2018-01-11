<template>
  <section class="container-total-box">
    <section class='cashIngBox' @click='clickFunc(11)'>
      <img src='static/img/total/total/img1.svg'>
      <p class='moneyTip'>邀请奖励<span>（{{invite_reward}}）元</span></p>
      </section>
    <section class='cashIngBox' @click='clickFunc(12)'>
    <img src='static/img/total/total/img2.svg'>
    <p class='moneyTip'>佣金奖励<span>（{{commission_reward}}）元</span></p>
    </section>
    <section class='cashIngBox' @click='clickFunc(13)'>
    <img src='static/img/total/total/img3.svg'>
    <p class='moneyTip'>活动奖励<span>（{{activity_money}}）元</span></p>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'total-summary',
    data () {
      return {
        invite_reward: 0,
        commission_reward: 0,
        activity_money: 0
      }
    },
    mounted () {
      this.AjaxCreate()
      document.title = '总收入'
    },
    methods: {
      AjaxCreate () {
//          var that=this
        this.$.ajax({
          url: this.baseUrl + 'wx_yxyx_api/agent_reward_sort_sum' + this.userId,
          type: 'GET',
          // async:false,
          dataType: 'JSONP',
          data: {'check_flag': 0},
          success: (result) => {
            if (result['ret'] !== 0) {
              alert(result['info'])
            } else {
              // 成功
              this.createTotalHtml(result)
            }
          }
        })
      },
      createTotalHtml (result) {
        this.invite_reward = result.invite_reward
        this.commission_reward = result.commission_reward
        this.activity_money = result.activity_money
      },
      clickFunc (index) {
        switch (index) {
	        case 11:
	          this.$router.push('/total-summary-total-invite')
	          break
	        case 12:
	          this.$router.push('/total-summary-total-cash')
	          break
        	case 13:
          	this.$router.push('/total-summary-total-activity')
          	break
        	default:
          	break
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
