<template>
  <section class="container-total-box">
    <div class='aui-tab' id='tab'>
      <div class='aui-tab-item aui-active' @click='tabClickFunc(0)'>我的邀请</div>
      <div class='aui-tab-item' @click='tabClickFunc(1)'>会员邀请</div>
    </div>
    <div class='tab-div-container'>
      <div class='tab-div-first'>
        <ul class='my-invite' v-for="(itemArr,index) in items" >
          <li  class='tab-content-lis' v-for="(item,indexs) in itemArr">
            <div class='tab-content-lis-box'>
              <div class='total-cash-containers'>
                <p>姓名：<span>{{item.nickname}}</span></p>
                <p>时间：<span>{{item.create_time}}</span></p>
                <p>购买课程：<span>{{item.price}}</span></p>
                <p>状态：<span class='spanColors'>学生已上{{item.count}}节课</span></p>
              </div>
              <div class='right-avai-div'>
                <img class='total-bottom' src='static/img/avai/img2-1.svg'>
                <p class=''>{{item.p_open_price}}元</p>
              </div>
            </div>
          </li>
        </ul>
        <div class='btnMore'><button @click='ajaxTab1(1)'>下一页</button></div>
      </div>
      <div class='tab-div-second'>
        <ul class='member-invite' v-for="(siteArr,index) in sites" >
          <li  class='tab-content-lis' v-for="(site,indexs) in siteArr">
            <div class='tab-content-lis-box'>
              <div class='total-cash-containers'>
                <p>姓名：<span>{{site.nickname}}</span></p>
                <p>时间：<span>{{site.create_time}}</span></p>
                <p>状态：<span>{{site.price}}</span></p>
                <p>状态：<span class='spanColors'>学生已上{{site.p_price}}节课</span></p>
              </div>
              <div class='right-avai-div'>
                <img class='total-bottom' src='static/img/avai/img2-1.svg'>
                <p class=''>{{site.p_open_price}}元</p>
              </div>
            </div>
          </li>
        </ul>
        <div class='btnMore'><button @click='ajaxTab1(2)'>下一页</button></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'total-summary-available-cash',
    data () {
      return {
        disredsult: '',
        page_count: 1,
        per_page_count: 5,
        table_type: 1,
        dataTab: 0,
        items: [],
        sites: [],
        stuBtn: '',
        memBtn: ''
      }
    },
    mounted () {
      this.AjaxCreate()
      this.createAuis()
      document.title = '佣金奖励'
    },
    methods: {
      AjaxCreate () {
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_can_cash_commission' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
      },
      tabClickFunc (types) {
        if (types === 0) {
          // $(".tab-div-first").css("display","block").sibling().css("display","none")
          this.items = []
          this.page_count = 1
          this.table_type = 1
          this.dataTab = 0
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_can_cash_commission' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc1)
        }
        if (types === 1) {
          // $(".tab-div-second").css("display","block").sibling().css("display","none")
          this.sites = []
          this.page_count = 1
          this.table_type = 2
          this.dataTab = 0
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_can_cash_commission' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc2)
        }
      },
      ajaxTab1 (indexTab) {
        this.page_count++
        this.table_type = indexTab
        if (indexTab === 1) {
          this.dataTab = 1
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_can_cash_commission' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
        } else if (indexTab === 2) {
          this.dataTab = 2
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_can_cash_commission' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
        }
      },
      createTotalHtml (result, url, table_type, dataTab) {
        console.log(this.disredsult)
        console.log(url)
        if (this.disredsult === url) {
          return
        }
        this.disredsult = url
        // $(".tab-div-container .btnMore").html("")
        // $(".btnMore").remove()
        if (this.dataTab === 1 && this.table_type === 1) {
          this.createFunc1(result, url)
          return
        }
        if (this.dataTab === 2 && this.table_type === 2) {
          this.createFunc2(result, url)
          return
        }
        if (this.table_type === 1 && this.dataTab === 0) {
          // $(".mine-invite").html("")
          this.createFunc1(result, url)
          return
        }
        if (this.table_type === 2 && this.dataTab === 0) {
          // $(".tab-div-container ul").eq(1).html("")
          // $(".member-invite").html("")
          this.createFunc2(result, url)
          return
        }
      },
      createFunc1 (result, url) {
        this.items.push(result.child_reward.list)
        console.log(this.items)
        if (result.child_reward.list.length > 0) {
          if (result.child_reward.page_info.page_num === Math.ceil(result.child_reward.page_info.total_num / 5)) {
            this.$('.tab-div-first .btnMore').css('display', 'none')
          }
        } else {
          this.$('.tab-div-first').html('')
          this.stuBtn = '<div class=\'div-sub-img\' style=\'margin-top: 2rem;\'><img class=\'subImg\' src=\'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg\'></div>'
          this.$('.tab-div-first').html(this.stuBtn)
          this.stuBtn = ''
        }
      },
      createFunc2 (result, url) {
        this.sites.push(result.member_reward.list)
        console.log(this.sites[0])
        if (result.member_reward.list.length > 0) {
          if (result.member_reward.page_info.page_num === Math.ceil(result.member_reward.page_info.total_num / 5)) {
            this.$('.tab-div-second .btnMore').css('display', 'none')
          }
        } else {
          this.$('.tab-div-second').html('')
          this.memBtn = '<div class=\'div-sub-img\' style=\'margin-top: 2rem;\'><img class=\'subImg\' src=\'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg\'></div>'
          this.$('.tab-div-second').html(this.memBtn)
          this.memBtn = ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
