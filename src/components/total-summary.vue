<template>
  <section class='container-total-box'>
    <section class='aui-content aui-margin-t-10 aui-margin-b-10'>
      <ul class='aui-list aui-list-in'>
        <li class='aui-list-item' @click='clickFunc(1)'>
          <div class='aui-list-item-inner'>
            <div class='aui-list-item-title total-first'>
              总收入金额
            </div>
            <div class='aui-list-item-right'><span>{{all_money}}元</span><img src='static/img/total/total-arrow.svg'>
            </div>
          </div>
        </li>
        <li class='aui-list-item' @click='clickFunc(2)'>
          <div class='aui-list-item-inner'>
            <div class='aui-list-item-title total-second'>
              可提现
            </div>
            <div class='aui-list-item-right'><span>{{open_moeny}}元</span><img src='static/img/total/total-arrow.svg'>
            </div>
          </div>
        </li>
        <li class='aui-list-item' @click='clickFunc(3)'>
          <div class='aui-list-item-inner'>
            <div class='aui-list-item-title total-third'>
              已提现
            </div>
            <div class='aui-list-item-right'><span>{{all_have_cush_money}}元</span><img src='static/img/total/total-arrow.svg'>
            </div>
          </div>
        </li>
        <li class='aui-list-item' @click='clickFunc(4)'>
          <div class='aui-list-item-inner'>
            <div class='aui-list-item-title total-fouth'>
              提现中
            </div>
            <div class='aui-list-item-right'><span>{{is_cash_money}}元</span><img src='static/img/total/total-arrow.svg'>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class='cashIngBox'>
      <img src='static/img/total/total-img5.svg' alt=''>
      <p class='moneys'>{{open_moeny}}元</p>
      <p class='moneyTip'>我的可提现金额</p>
      <section class='cashIng'>
        <button class='buttons'><p>申请提现</p></button>
      </section>
    </section>
    <section class='total-footer'>
      为方便工作人员打款，每次申请都必须全部提现，每次提现到账时间为7个工作日
    </section>
  </section>
</template>

<script>
  export default {
    name: 'total-summary',
    data () {
      return {
        all_money: 0,
        open_moeny: 0,
        all_have_cush_money: 0,
        is_cash_money: 0
      }
    },
    mounted () {
      this.AjaxCreate()
      document.title = '总收入'
    },
    methods: {
      AjaxCreate () {
        this.AjaxToalFunc(this.baseUrl + 'wx_yxyx_api/my_income_info' + this.userId, this.createTotalHtml)
      },
      createTotalHtml (result) {
//      var that = this
        this.all_money = result.income_info.all_money
        this.open_moeny = result.income_info.open_moeny
        this.all_have_cush_money = result.income_info.all_have_cush_money
        this.is_cash_money = result.income_info.is_cash_money
        if (result.income_info.open_moeny === 0) {
          this.$('.buttons').css('opacity', '0.5')
        } else if (result.income_info.open_moeny < 25) {
          this.$('.buttons').css('opacity', '0.5')
        } else if (result.income_info.is_cash_money !== 0) {
          this.$('.buttons').css('opacity', '0.5')
        } else {
          this.$('.buttons').css('opacity', '1')
          this.$('.buttons').click(() => {
            this.clickFunc(5)
          })
        }
      },
      clickFunc (index) {
        switch (index) {
          case 1:
            this.$router.push('/total-summary-total')
            break
          case 2:
            this.$router.push('/total-summary-available')
            break
          case 3:
            this.$router.push('/total-summary-already')
            break
          case 4:
            this.$router.push('/total-summary-cash')
            break
          case 5:
            this.$router.push('/total-summary-select')
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
  @import "../../static/css/cash-withdrawal.less";
</style>
