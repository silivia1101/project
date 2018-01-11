<template>
  <section class="container-total-box">
    <div class='aui-tab' id='tab'>
      <div class='aui-tab-item aui-active' @click='tabClickFunc(0)'>我的邀请</div>
      <div class='aui-tab-item' @click='tabClickFunc(1)'>会员邀请</div>
    </div>
    <div class='tab-div-container'>
      <div class='tab-div-first'>
        <div class="tab-contents-first" v-if="itemLength==0">
          <div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>
        </div>
        <div v-else>
          <ul class='my-invite' v-for="(itemArr,index) in items" >
            <li  class='tab-content-lis' v-for="(item,indexs) in itemArr" @click="binkFunc('tab-content-lis',index*5+indexs,'my-invite')">
              <div class='tab-content-lis-box'>
                <div class='total-cash-containers'>
                  <p>姓名：<span>{{item.nickname}}</span></p>
                  <p>时间：<span>{{item.create_time}}</span></p>
                  <p>购买课程：<span>{{item.price}}</span></p>
                  <p>收入：<span class='spanColors'>{{item.p_price}}元</span></p>
                </div>
                <img class='total-bottom' src='../../static/img/total/total-arrow-bottom.svg'>
                <img class='total-top' src='../../static/img/total/total-arrow-top.svg'>
              </div>
              <div class='tab-content-lis-div'>
                <img :src='switchFunc(item.count)'>
                <p>上满两节课可提现20%，上满8节课可全部提现</p>
              </div>
            </li>
          </ul>
          <div class='btnMore'><button @click='ajaxTab1(1)'>下一页</button></div>
        </div>
      </div>
      <div class='tab-div-second'>
        <div class="tab-contents-first" v-if="siteLength==0">
          <div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>
        </div>
        <div v-else>
          <ul class='member-invite' v-for="(siteArr,index) in sites" >
            <li  class='tab-content-lis' v-for="(site,indexs) in siteArr" @click="binkFunc('tab-content-lis',index*5+indexs,'member-invite')">
              <div class='tab-content-lis-box'>
                <div class='total-cash-containers'>
                  <p>姓名：<span>{{site.nickname}}</span></p>
                  <p>时间：<span>{{site.create_time}}</span></p>
                  <p>状态：<span>{{site.price}}</span></p>
                  <p>收入：<span class='spanColors'>{{site.p_price}}元</span></p>
                </div>
                <img class='total-bottom' src='../../static/img/total/total-arrow-bottom.svg'>
                <img class='total-top' src='../../static/img/total/total-arrow-top.svg'>
              </div>
              <div class='tab-content-lis-div'>
                <img :src='switchFunc(site.count)'>
                <p>上满两节课可提现20%，上满8节课可全部提现</p>
              </div>
            </li>
          </ul>
          <div class='btnMore'><button @click='ajaxTab1(2)'>下一页</button></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'total-summary-total-cash',
    data () {
      return {
        disredsult: '',
        page_count: 1,
        per_page_count: 5,
        table_type: 1,
        dataTab: 0,
        items: [],
        sites: [],
        mine_status: '',
        member_list_status: '',
        itemLength: 0,
        siteLength: 0
      }
    },
    mounted () {
      this.AjaxCreate()
      this.createAui()
      document.title = '佣金奖励'
    },
    methods: {
      AjaxCreate () {
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_commission_reward' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
      },
      binkFunc (tabs, index, tabss) {
        var that = $('.' + tabss + ' .' + tabs).eq(index)
        console.log(that)
        this.bindClickFunc(that)
      },
      tabClickFunc (types) {
        if (types === 0) {
          // $(".tab-div-first").css("display","block").sibling().css("display","none")
          this.items = []
          this.page_count = 1
          this.table_type = 1
          this.dataTab = 0
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_commission_reward' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc1)
        }
        if (types === 1) {
          // $(".tab-div-second").css("display","block").sibling().css("display","none")
          this.sites = []
          this.page_count = 1
          this.table_type = 2
          this.dataTab = 0
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_commission_reward' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc2)
        }
      },
      ajaxTab1 (indexTab) {
        this.page_count++
        this.table_type = indexTab
        if (indexTab === 1) {
          this.dataTab = 1
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_commission_reward' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
        } else if (indexTab === 2) {
          this.dataTab = 2
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_commission_reward' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
        }
      },
      createTotalHtml (result, url, table_type, dataTab) {
        console.log(this.disredsult)
        console.log(url)
        if (this.disredsult === url) {
          return
        }
        this.disredsult = url

        // $(".tab-div-container .btnMore").html("");
        // $(".btnMore").remove();
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
        this.itemLength = result.child_reward.list.length
        console.log(this.items)
        if (result.child_reward.list.length > 0) {
          if (result.child_reward.page_info.page_num === Math.ceil(result.child_reward.page_info.total_num / 5)) {
            this.$('.tab-div-first .btnMore').css('display', 'none')
          }
        }
      },
      createFunc2 (result, url) {
        this.sites.push(result.member_reward.list)
        this.siteLength = result.member_reward.list.length
        console.log(this.sites[0])
        if (result.member_reward.list.length > 0) {
          if (result.member_reward.page_info.page_num === Math.ceil(result.member_reward.page_info.total_num / 5)) {
            this.$('.tab-div-second .btnMore').css('display', 'none')
          }
        }
      },
      switchFunc (test)  {
        // alert(test)
        switch (test) {
          case 0:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img0.png'
	          break
          case 1:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img1.png'
	          break
          case 2:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img2.png'
	          break
          case 3:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img3.png'
	          break
          case 4:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img4.png'
	          break
          case 5:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img5.png'
	          break
          case 6:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img6.png'
	          break
          case 7:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img7.png'
	          break
          case 8:
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img8.png'
	          break
          case '0':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img0.png'
	          break
          case '1':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img1.png'
	          break
          case '2':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img2.png'
	          break
          case '3':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img3.png'
	          break
          case '4':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img4.png'
	          break
          case '5':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img5.png'
	          break
          case '6':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img6.png'
	          break
          case '7':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img7.png'
	          break
          case '8':
	          return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img8.png'
	          break
          default:
          	return 'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/total/cash/img8.png'
        		break
        }
      },
      bindClickFunc (delbtn) {
        console.log(this.$(delbtn).children().eq(1).html())
        console.log(this.$(delbtn).children().eq(1).css('display'))
        if (this.$(delbtn).find(this.$('.total-top')).css('display') === 'block') {
          this.$(delbtn).find(this.$('.total-bottom')).css('display', 'block')
          this.$(delbtn).find(this.$('.total-top')).css('display', 'none')
          this.$(delbtn).children().eq(1).css('display', 'none')
        } else if (this.$(delbtn).find(this.$('.total-bottom')).css('display') === 'block') {
          this.$(delbtn).find(this.$('.total-top')).css('display', 'block')
          this.$(delbtn).children().eq(1).css('display', 'block')
          this.$(delbtn).find(this.$('.total-bottom')).css('display', 'none')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
