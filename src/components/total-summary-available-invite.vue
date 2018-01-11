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
            <li class='tab-content-lis tab-content-lis-img'  v-for="(item,indexs) in itemArr">
              <div>
                <p><span>{{item.agent_status_money}}</span>元</p>
                <p>恭喜您获得</p>
                </div>
              <p>学生姓名：<span class='stuName'>{{item.nickname}}</span></p>
              </li>
          </ul>
          <div class='btnMore'><button @click='ajaxTab1(1)'>下一页</button></div>
        </div>
      </div>
      <div class='tab-div-second'>
        <div class="tab-contents-first" v-if="siteLength==0">
          <div class='div-sub-img'><img class='subImg' src='http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg'></div>
        </div>
        <div class="tab-contents-second" v-else>
          <ul class='member-invite' v-for="(siteArr,index) in sites" >
            <li class='tab-content-lis tab-content-lis-img' v-for="(site,indexs) in siteArr" >
              <div>
                <p><span>{{site.agent_status_money}}</span>元</p>
                <p>恭喜您获得</p>
              </div>
              <p>学生姓名：<span class='stuName'>{{site.nickname}}</span></p>
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
    name: 'total-summary-available-invite',
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
        memBtn: '',
        itemLength: 0,
        siteLength: 0
      }
    },
    mounted () {
      this.AjaxCreate()
      this.createAuis()
      document.title = '邀请奖励'
    },
    methods: {
      AjaxCreate () {
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_had_invite_rewards' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
      },
      tabClickFunc (types) {
        if (types === 0) {
          this.items = []
          this.page_count = 1
          this.table_type = 1
          this.dataTab = 0
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_had_invite_rewards' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc1)
        }
        if (types === 1) {
          this.sites = []
          this.page_count = 1
          this.table_type = 2
          this.dataTab = 0
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_had_invite_rewards' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc2)
        }
      },
      ajaxTab1 (indexTab) {
        this.page_count++
        this.table_type = indexTab
        if (indexTab === 1) {
          this.dataTab = 1
          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_had_invite_rewards' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
        } else if (indexTab === 2) {
	          this.dataTab = 2
	          this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_had_invite_rewards' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
        }
      },
      createTotalHtml (result, url, table_type, dataTab) {
        console.log(this.disredsult)
        console.log(url)
        if (this.disredsult === url) {
          return
        }
        this.disredsult = url
        if (this.dataTab === 1 && this.table_type === 1) {
          this.createFunc1(result, url)
          return
        }
        if (this.dataTab === 2 && this.table_type === 2) {
          this.createFunc2(result, url)
          return
        }
        if (this.table_type === 1 && this.dataTab === 0) {
          this.createFunc1(result, url)
          return
        }
        if (this.table_type === 2 && this.dataTab === 0) {
          this.createFunc2(result, url)
          return
        }
      },
      createFunc1 (result, url) {
        this.items.push(result.my_invite.list)
        this.itemLength = result.my_invite.list.length
        console.log(this.items)
        if (result.my_invite.list.length > 0) {
          for (var i = 0; i < result.my_invite.list.length; i++) {
            // 学员
            if (result.my_invite.list[i].agent_status === '40') {
              this.$('.tab-content-lis').addClass('tab-content-lis-imgs')
            }
          }
          if (result.my_invite.page_info.page_num === Math.ceil(result.my_invite.page_info.total_num / 5)) {
            this.$('.btnMore').eq(0).css('display', 'none')
          }
        }
      },
      createFunc2 (result, url) {
        this.sites.push(result.member_invite.list)
        this.siteLength = result.member_invite.list.length
        console.log(this.sites[0])
        if (result.member_invite.list.length > 0) {
          for (var j = 0; j < result.member_invite.list.length; j++) {
            if (result.member_invite.list[j].agent_status === '40') {
              this.$('.tab-content-lis').addClass('.tab-content-lis-imgs')
            }
          }
          if (result.member_invite.page_info.page_num === Math.ceil(result.member_invite.page_info.total_num / 5)) {
            this.$('.btnMore').eq(1).css('display', 'none')
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
