<template>
  <div class="container-total-box">
    <div class="zp-box">
      <div class="dp-box">
        <img src="static/img/award/award-bg.svg" class="g-lottery-img">
      </div>
      <div class="zhizhen">
        <span id="cishu">0</span>次
        <!--<img src="img/award/pointer.svg">-->
        <!--<div id="cishu-text"><span id="cishu">0</span>次</div>-->
      </div>
    </div>
    <div class="btnAwardBox">
      <button class='btnAward'>抽奖</button>
    </div>
    <!--遮罩&弹框-->
    <div class="zz"></div>
    <!-- 抽到奖励弹框 -->
    <div class="jl-tk">
      <!--<p class='texts'><img src='img/award/img1.svg'></p>-->
      <!--<p class='ok-img'>知道了</p>-->
    </div>
    <div class="rule-tips">
      <h4>抽奖规则</h4>
      <ul>
        <li>1、每位会员每日有1次免费抽奖的机会</li>
        <li>2、每日邀请1名学员可额外获得1次抽奖机会；邀请1名会员可额外获得一次抽奖机会（每位学员每日最高有3次机会）</li>
        <li>3、抽奖奖励可与其他奖励一起提现，也可积累满25元后提现</li>
        <li>4、抽奖获得的现金会直接在“可提现”中，以供会员提现</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lottery-draw',
  data () {
    return {
      msg: '',
      $btn: '',
      cishu: '',
      isture: 0,
      datas: 0
    }
  },
  mounted () {
    this.AjaxToalFunc(this.baseUrl + 'wx_yxyx_api/get_daily_lottery_count' + this.userId, this.createTotalHtml)
    document.title = '每日抽奖'
//    $("body").css("background","linear-gradient(to right, #FF760C, #ff6e57)")
  },
  methods: {
    createTotalHtml (result) {
      this.$btn = this.$('.g-lottery-img') // 旋转的div
      this.cishu = result.left_daily_lottery_count // 初始次数，由后台传入
      this.$('#cishu').html(this.cishu) // 显示还剩下多少次抽奖机会
      this.isture = 0 // 是否正在抽奖
      var clickfunc = result => {
        switch (result.the_prize) {
          case 1: this.datas = 3; break
          case 2: this.datas = 6; break
          case 3: this.datas = 8; break
          case 4: this.datas = 7; break
          case 5: this.datas = 5; break
          case 6: this.datas = 2; break
          case 7: this.datas = 4; break
          case 8: this.datas = 1; break
        }
        switch (this.datas) {
          case 1:
            // rotateFunc(1, 7, '1')
            rotateFunc(1, 5, '<p class=\'texts\'><img src=\'static/img/award/img1.svg\'></p><p class=\'ok-img\'>知道了</p>')
            break
          case 2:
            rotateFunc(2, 50, '<p class=\'texts\'><img src=\'static/img/award/img05.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(2, 54, 'img/award/img05.svg')
            // rotateFunc(2, 54, '0.5')
            break
          case 3:
            rotateFunc(3, 95, '<p class=\'texts\'><img src=\'static/img/award/img-more.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(3, 98, '再接再厉')
            break
          case 4:
            rotateFunc(4, 140, '<p class=\'texts\'><img src=\'static/img/award/img08.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(4, 145, '0.8')
            break
          case 5:
            rotateFunc(5, 185, '<p class=\'texts\'><img src=\'static/img/award/img01.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(5, 190, '0.1')
            break
          case 6:
            rotateFunc(6, 230, '<p class=\'texts\'><img src=\'static/img/award/img-more.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(6, 235, '再接再厉')
            break
          case 7:
            rotateFunc(7, 275, '<p class=\'texts\'><img src=\'static/img/award/img005.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(7, 280, '0.05')
            break
          case 8:
            rotateFunc(8, 320, '<p class=\'texts\'><img src=\'static/img/award/img001.svg\'></p><p class=\'ok-img\'>知道了</p>')
            // rotateFunc(8, 320, '0.01')
            break
        }
      }
      this.$('.btnAward').click(() => {
        this.$('.zz').hide()
        if (this.isture) return // 如果在执行就退出
        this.isture = true // 标志为 在执行
        // 测试
        if (this.cishu <= 0) { // 当抽奖次数为0的时候执行
          this.$('#cishu').html(0) // 次数显示为0
          alert('没有次数了')
          this.isture = false
        } else { // 还有次数就执行
          this.cishu = this.cishu - 1 // 执行转盘了则次数减1
          if (this.cishu <= 0) {
            this.cishu = 0
          }
          this.$('#cishu').html(this.cishu)
          this.$.ajax({
            url: this.baseUrl + 'wx_yxyx_api/do_daily_lottery' + this.userId,
            type: 'GET',
            // async:false,
            dataType: 'JSONP',
            data: {},
            success: (result) => {
              if (result['ret'] !== 0) {
                alert(result['info'])
              } else {
                // 成功
                // alert("test="+result.the_prize)
                clickfunc(result)
              }
            },
            error: () => {
              alert('网络不太通畅，请稍后再试')
            }
          })
        }
      })
      var rotateFunc = function (awards, angle, text) {
        this.isture = true
        this.$btn.stopRotate()
        this.$btn.rotate({
          angle: 0, // 旋转的角度数
          duration: 4000, // 旋转时间
          animateTo: angle + 1440, // 给定的角度,让它根据得出来的结果加上1440度旋转
          callback: () => {
            this.isture = false // 标志为 执行完毕
            this.$('.jl-tk').html(text)
            this.$('.zz').show()
            this.$('.jl-tk').show()
            this.$('.ok-img').click(() => {
              this.$('.zz').hide()
              this.$('.jl-tk').hide()
            })
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/award.less";

</style>
