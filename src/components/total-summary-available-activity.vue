<template>
  <section class="container-total-box">
    <p class='invite-first-num'>总数：<span>{{activity_total_money}}</span>元</p>
    <ul>
      <li class='tab-content-lis' v-for="rewarded in rewardsArr">
        <table>
          <tr>
            <td><p>活动：</p></td>
            <td><p>{{rewarded.agent_money_ex_type_str}}</p></td>
          </tr>
          <tr>
            <td><p>时间：</p></td>
            <td><p>{{rewarded.add_time}}</p></td>
          </tr>
          <tr>
            <td><p>奖励：</p></td>
            <td class='total-invite-money'><p>{{rewarded.money}}元</p></td>
          </tr>
        </table>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'total-summary-available-activity',
    data () {
      return {
        page_count: 1,
        per_page_count: 5,
        rewardsArr: [],
        stuBtn: '',
        activity_total_money: ''
      }
    },
    mounted () {
      this.AjaxCreate()
      this.createAui()
      document.title = '活动奖励'
    },
    methods: {
      AjaxCreate () {
//        var that = this
        this.$.ajax({
          url: this.baseUrl + 'wx_yxyx_api/get_activity_rewards' + this.userId,
          type: 'GET',
          // async:false,
          dataType: 'JSONP',
          data: {
            'is_cash': 2,
            'page_num': this.page_count,
            'per_page_count': this.per_page_count
          },
          success: (result) => {
            if (result['ret'] !== 0) {
              alert(result['info'])
            } else {
              // 成功
              this.createFunc1(result)
            }
          }
        })
      },
      createFunc1 (result) {
        this.activity_total_money = result.activity_total_money
        if (result.reward_list.list.length > 0) {
          this.rewardsArr = result.reward_list.list
          console.log(this.rewardsArr)
        } else {
          this.$('.container-total-box').html('')
          this.stuBtn = '<div class=\'div-sub-img\' style=\'margin-top: 2rem;\'><img class=\'subImg\' src=\'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg\'></div>'
          this.$('.container-total-box').html(this.stuBtn)
          this.stuBtn = ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
