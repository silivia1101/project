<template>
  <section class='cashIng'>
    <img v-if="listsArr==0" src='static/img/total/already-total.svg'>
    <div v-else>
      <img class='cashIngImg' src='static/img/cash/img1.svg' alt=''>
      <p class='cash-complete'>提现申请已提交</p>
      <p class='cash-tip'>金币正在努力送到您的账号中</p>
      <button class='buttons butn' @click='locationFunc()'><p>确认</p></button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'total-summary-cash',
  data () {
    return {
      listsArr: 0
    }
  },
  mounted () {
    this.AjaxCreate()
    document.title = '提现中'
  },
  methods: {
    AjaxCreate () {
      this.$.ajax({
        url: this.baseUrl + 'wx_yxyx_api/get_have_cash' + this.userId,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: {'check_money_flag': 0},
        success: result => {
          if (result['ret'] !== 0) {
            alert(result['info'])
          } else {
            // 成功
//            createTotalHtml(result);
            this.listsArr = result.list.length
          }
        }
      })
    },
    locationFunc () {
      this.$router.push('/total-summary')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/cash-withdrawal.less";
</style>
