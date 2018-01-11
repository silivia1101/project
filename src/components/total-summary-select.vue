<template>
  <section>
    <div @click="clickFunc(51)">
      <img src="static/img/cash/img-card.svg" alt="">
      <p>提现到银行卡</p>
    </div>
    <div @click="clickFunc(52)">
      <img src="static/img/cash/img-net.svg" alt="">
      <p>提现到支付宝</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'total-summary-select',
  data () {
    return {
      all_money: 0
    }
  },
  mounted () {
    document.title = '提现选择'
  },
  methods: {
    clickFunc (index) {
      switch (index) {
        case 51:
	        this.$router.push('/total-summary-select-bank')
	        break
        case 52:
	        this.$router.push('/total-summary-select-net')
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
  @import "../../static/css/cash-select.less";
</style>
