<template>
  <section class="containers">
    <section class="containersBox">
      <section class="cash-banner-box">
        <section class="cash-banner">
          <img src='static/img/cash/cash-net.png'>
        </section>
      </section>
      <div class="aui-content aui-margin-b-15">
        <ul class="aui-list aui-form-list">
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                姓名
              </div>
              <div class="aui-list-item-input">
                <input type="text" class="userPayName" placeholder="请输入姓名" v-text="zfb_name">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                支付宝账号
              </div>
              <div class="aui-list-item-input">
                <input type="text" class="userPayfor" placeholder="请输入支付宝账号" v-text="zfb_account">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="cashIng">
      <button class="buttons" @click="clickFunc()"><p>确认提现</p></button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'total-summary-select-net',
    data () {
      return {
        all_money: 0,
        zfb_name: '',
        zfb_account: ''
      }
    },
    mounted () {
      this.AjaxCreate()
      document.title = '支付宝提现'
    },
    methods: {
      AjaxCreate () {
        this.AjaxToalFunc(this.baseUrl + 'wx_yxyx_api/get_agent_alipay_info' + this.userId, this.createTotalHtml)
      },
      createTotalHtml (result) {
        this.zfb_name = result.data.zfb_name
        this.zfb_account = result.data.zfb_account
      },
      clickFunc () {
//        this.zfb_name = this.$('.userPayName').val()
//        this.zfb_account = this.$('.userPayfor').val()
        if (!this.zfb_name && !this.zfb_account) {
          alert('请完善信息后提交')
        } else {
          this.Ajax()
        }
      },
      Ajax () {
        var requestData = {
          zfb_name: this.zfb_name,
          zfb_account: this.zfb_account
        }
        // alert("姓名："+zfb_name+"；支付宝账号："+zfb_account);
        this.$.ajax({
          url: this.baseUrl + 'wx_yxyx_api/update_bank_info' + this.userId,
          type: 'GET',
          // async:false,
          dataType: 'JSONP',
          data: requestData,
          success: function (result) {
            if (result['ret'] !== 0) {
              alert(result['info'])
            } else {
              // 成功
              // subBankInfo(result);
              // alert("提交成功");
              this.$router.push('/total-summary-cash')
            }
          },
          error: function () {
            alert('网络不太通畅，请稍后再试')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/cash-withdrawal.less";
</style>
