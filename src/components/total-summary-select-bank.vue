<template>
  <section class="containers">
    <section class="containersBox">
      <section class="cash-banner-box">
        <section class="cash-banner">
          <img src='static/img/cash/cash-bank.png'>
        </section>
      </section>
      <div class="aui-content aui-margin-b-15">
        <ul class="aui-list aui-form-list">
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                持卡人
              </div>
              <div class="aui-list-item-input">
                <input type="text" class="cardUserName" placeholder="请输入姓名" v-text="bank_account">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                身份证号
              </div>
              <div class="aui-list-item-input">
                <input type="text" @blur="cardIdFunc(1)" class="cardUserId" placeholder="请输入身份证号" v-text="idcard">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                银行卡类型
              </div>
              <div class="aui-list-item-input">
                <select class="cardUserType"  v-model="selected">
                  <option v-for="item in items" v-bind:value="item.value">{{item.value}}</option>
                  <!--<option value="0">选择银行卡类型</option>-->
                  <!--<option value="中国建设银行">中国建设银行</option>-->
                  <!--<option value="中国工商银行">中国工商银行</option>-->
                  <!--<option value="中国农业银行">中国农业银行</option>-->
                  <!--<option value="交通银行">交通银行</option>-->
                  <!--<option value="招商银行">招商银行</option>-->
                  <!--<option value="中国银行">中国银行</option>-->
                </select>
                <!--<input type="text" placeholder="选择银行卡类型">-->
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                支行名称
              </div>
              <div class="aui-list-item-input">
                <input type="text" class="cardUserBankName" placeholder="请输入支行名称" v-text="bank_address">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                开户省
              </div>
              <div class="aui-list-item-input">
                <input type="text" class="cardUserBankProvince" placeholder="请输入开户省" v-text="bank_province">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                开户市
              </div>
              <div class="aui-list-item-input">
                <input type="text" class="cardUserBankCity" placeholder="请输入开户市" v-text="bank_city">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                卡号
              </div>
              <div class="aui-list-item-input">
                <input type="number" class="cardUserNum" placeholder="请输入银行卡号" v-text="bankcard">
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                预留手机号
              </div>
              <div class="aui-list-item-input">
                <input type="number" @blur="cardIdFunc(2)" class="cardUserPhone" placeholder="请输入预留手机号" v-text="bank_phone">
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
  name: 'total-summary-select-bank',
  data () {
    return {
      all_money: 0,
      bank_account: '',
      idcard: '',
      bank_address: '',
      bank_province: '',
      bank_city: '',
      bankcard: '',
      bank_phone: '',
      bank_type: '',
      requestData: {},
      items: [
        {
          value: '中国建设银行'
        },
        {
          value: '中国工商银行'
        },
        {
          value: '中国农业银行'
        },
        {
          value: '交通银行'
        },
        {
          value: '招商银行'
        },
        {
          value: '中国银行'
        }
      ],
      selected: '中国建设银行'
    }
  },
  mounted () {
    this.AjaxCreate()
    document.title = '银行卡提现'
  },
  methods: {
    AjaxCreate () {
      this.AjaxToalFunc(this.baseUrl + 'wx_yxyx_api/get_agent_bank_info' + this.userId, this.createTotalHtml)
    },
    createTotalHtml (result) {
      this.bank_account = result.data.bank_account
      this.idcard = result.data.idcard
      this.bank_address = result.data.bank_address
      this.bank_province = result.data.bank_province
      this.bank_city = result.data.bank_city
      this.bankcard = result.data.bankcard
      this.bank_phone = result.data.bank_phone
      if (result.data.bank_type) {
        this.bank_type = result.data.bank_type
      }
    },
    cardIdFunc (test) {
      if (test === 1) {
        this.idcard = this.$('.cardUserId').val()
        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if (!reg.test(this.idcard)) {
//          $('.cardUserId').val("");
//          this.idcard = ''
          alert('请输入合法的身份证号')
        }
      }
      if (test === 2) {
        this.bank_phone = this.$('.cardUserPhone').val()
        var phoneReg = /(^1\d{10}$)/
        // |(^+1\d{10}$)
        if (!phoneReg.test(this.bank_phone)) {
//          $('.cardUserPhone').val("");
          this.bank_phone = ''
          alert('请输入合法的手机号')
        }
      }
    },
    clickFunc () {
//      var bank_account=$(".cardUserName").val();
//      var idcard=$(".cardUserId").val();
//      var bank_address=$(".cardUserBankName").val();
//      var bank_province=$(".cardUserBankProvince").val();
//      var bank_city=$(".cardUserBankCity").val();
//      var bankcard=$(".cardUserNum").val();
//      var bank_phone=$(".cardUserPhone").val();
//      var bank_type=$(".cardUserType").val();
      if (!this.bank_account && !this.idcard && !this.bank_address && !this.bank_province && !this.bank_city && !this.bankcard && !this.bank_phone && !this.bank_type) {
        alert('请完善信息后提交')
      } else {
        this.Ajax()
      }
    },
    Ajax () {
      this.requestData = {
        bank_account: this.bank_account,
        idcard: this.idcard,
        bank_address: this.bank_address,
        bank_province: this.bank_province,
        bank_city: this.bank_city,
        bankcard: this.bankcard,
        bank_phone: this.bank_phone,
        bank_type: this.bank_type
      }
      alert('持卡人：' + this.bank_account + '；身份证号：' + this.idcard + '；支行名称：' + this.bank_address + '；开户省：' + this.bank_province + '；开户市：' + this.bank_city + '；卡号bankcard：' + this.bankcard + '；预留手机号：' + this.bank_phone + '；银行卡类型：' + this.bank_type)
//      this.$.ajax({
//        url: this.baseUrl + 'wx_yxyx_api/update_bank_info' + this.userId,
//        type: 'GET',
//        // async:false,
//        dataType: 'JSONP',
//        data: this.requestData,
//        success: (result) => {
//          if (result['ret'] !== 0) {
//            alert(result['info'])
//          } else {
//            // 成功
//            // subBankInfo(result);
//            // alert("提交成功");
//            this.$router.push('/total-summary-cash')
//          }
//        },
//        error: () => {
//          alert('网络不太通畅，请稍后再试')
//        }
//      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/cash-withdrawal.less";
</style>
