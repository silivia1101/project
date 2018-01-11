<template>
  <section class="container-already-box">
    <!--<img src="img/total/already/bg.png" alt="">-->
    <section class="total-already-box">
      <img src="static/img/total/already/img1.svg" alt="">
      <div>
        <table v-if="listsArr==0">
          <img src='static/img/total/already-total.svg'>
        </table>
        <table v-else>
          <!--<div class="container-tables">-->
            <thead><tr><th>提现日期</th><th>提现金额</th><th>状态</th></tr></thead>
            <tbody>
              <tr v-for="item in items">
                <td>{{item.create_time}}</td>
                <td>￥{{item.cash}}</td>
                <td>已提现</td>
              </tr>
            </tbody>
          <!--</div>-->
        </table>
      </div>
      <div class="tables-imgbg"></div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'total-summary-already',
  data () {
    return {
      listsArr: 0,
      items: []
    }
  },
  mounted () {
    this.AjaxCreate()
    document.title = '已提现'
  },
  methods: {
    AjaxCreate () {
//      var that=this
      this.$.ajax({
        url: this.baseUrl + 'wx_yxyx_api/get_have_cash' + this.userId,
        type: 'GET',
        // async:false,
        dataType: 'JSONP',
        data: {'check_money_flag': 1},
        success: result => {
          if (result['ret'] !== 0) {
            alert(result['info'])
          } else {
            // 成功
//            that.createTotalHtml(result);
            this.listsArr = result.list.length
            this.items = result.list
          }
        },
        error: () => {
          alert('网络不太通畅,请稍后再试')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary-already.less";
</style>
