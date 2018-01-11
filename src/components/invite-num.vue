<template>
  <section class="container-total-box">
    <div class='aui-tab' id='tab'>
      <div class='aui-tab-item aui-active' @click='tabClickFunc(0)'>学员</div>
      <div class='aui-tab-item' @click='tabClickFunc(1)'>会员</div>
      <div class='aui-tab-item' @click='tabClickFunc(2)'>学员&会员</div>
    </div>
    <div class='tab-div-container'>
      <div class='tab-div-first'>
        <p class='invite-first-num'>总数：<span>{{steudent_first_num}}</span></p>
        <ul class='studentList'  v-for="(itemArr,index) in items">
          <li class='tab-content-lis' v-for="(item,index) in itemArr">
            <div class='tab-content-lis-box'>
              <div class='total-cash-containers'>
                <p>姓名：<span>{{item.nickname}}</span></p>
                <p>时间：<span>{{item.create_time}}</span></p>
                <p>状态：<span class='total-p'>
                  <span v-text="switchFunc(item.agent_status,item.agent_student_status)"></span>
                  <!--{{mine_status}}-->
                </span></p>
              </div>
            </div>
          </li>
        </ul>
        <div class='btnMore'><button @click='ajaxTab1(1)'>下一页</button></div>
      </div>
      <div class='tab-div-second'>
        <p class='invite-first-num'>总数：<span>{{member_first_num}}</span></p>
        <ul class='memberList' v-for="(siteArr,index) in sites" >
          <li  class='tab-content-lis' v-for="(site,indexs) in siteArr" @click="binkFunc('tab-content-lis',index*5+indexs,'memberList')">
            <div class='tab-content-lis-box'>
              <div class='total-cash-containers'>
                <p>姓名：<span>{{site.nickname}}</span></p>
                <p>时间：<span>{{site.create_time}}</span></p>
                <p>邀请：<span class='total-p'>{{site.second_num}}</span></p>
              </div>
              <img  v-if="site.child!=''" class='total-bottom' src='../../static/img/total/total-arrow-bottom.svg'>
              <img v-if="site.child!=''" class='total-top' src='../../static/img/total/total-arrow-top.svg'>
            </div>
            <div class='tab-content-lis-div' v-if="site.child!=''">
              <ul>
                <li v-for="(childArr,indexa) in site.child">
                  <div class='total-cash-containers-child'>
                    <p class='usernickname'>姓名：<span>{{childArr.nickname}}</span></p>
                    <p>时间：<span>{{childArr.create_time}}</span></p>
                    <p>状态：<span v-text="switchFunc(childArr.agent_status,childArr.agent_student_status)"></span>
                      <!--{{member_list_status}}-->
                      <span v-if="childArr.agent_status=='40'">{{childArr.price}}元</span></p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class='btnMore'><button @click='ajaxTab1(2)'>下一页</button></div>
      </div>
      <div class='tab-div-third'>
        <p class='invite-first-num'>总数：<span>{{student_and_member_first_num}}</span></p>
          <ul class='studentMemberList' v-for="(siteTest,index) in siteArrs">
            <li class='tab-content-lis' v-for="(siteTs,indexs) in siteTest" @click="binkFunc('tab-content-lis',index*5+indexs,'studentMemberList')">
              <div class='tab-content-lis-box'>
                <div class='total-cash-containers'>
                  <p>姓名：<span>{{siteTs.nickname}}</span></p>
                  <p>时间：<span>{{siteTs.create_time}}</span></p>
                  <p>邀请：<span class='total-p'>{{siteTs.second_num}}</span></p>
                </div>
                <img v-if="siteTs.child!=''" class='total-bottom' src='../../static/img/total/total-arrow-bottom.svg'>
                <img v-if="siteTs.child!=''" class='total-top' src='../../static/img/total/total-arrow-top.svg'>
              </div>
              <div class='tab-content-lis-div' v-if="siteTs.child!=''">
                <ul>
                  <li v-for="(childTest,index) in siteTs.child">
                    <div class='total-cash-containers-child'>
                      <p class='usernickname'>姓名：<span>{{childTest.nickname}}</span></p>
                      <p>时间：<span>{{childTest.create_time}}</span></p>
                      <p>状态：<span v-text="switchFunc(childTest.agent_status,childTest.agent_student_status)"></span>
                        <!--{{childTest.agent_status}}-->
                        <span v-if="childTest.agent_status=='40'">{{childTest.price}}元</span></p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        <div class='btnMore'><button @click='ajaxTab1(3)'>下一页</button></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'invite-num',
  data () {
    return {
      disredsult: '',
      page_count: 1,
      per_page_count: 5,
      table_type: 1,
      dataTab: 0,
      steudent_first_num: 0,
      member_first_num: 0,
      student_and_member_first_num: 0,
      items: [],
      sites: [],
      siteArrs: [],
      mine_status: '',
//      member_list_status: '',
//      stuMem_status: '',
      stuBtn: '',
      tests: '',
      baseUrl: 'http://wx-yxyx.leo1v1.com/',
			userId: '?_agent_id=54'
    }
  },
  mounted () {
    this.AjaxCreate()
    document.title = '邀请个数'
  },
  methods: {
    AjaxCreate () {
      this.createAuis()
      this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
    },
    binkFunc (tabs, index, tabss) {
      this.tests = $('.' + tabss + ' .' + tabs).eq(index)
      console.log(this.tests)
      this.bindClickFunc(this.tests)
//        this.switchFunc()
    },
    tabClickFunc (types) {
      if (types === 0) {
        // $(".tab-div-first").css("display","block").sibling().css("display","none")
        this.items = []
        this.page_count = 1
        this.table_type = 1
        this.dataTab = 0
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc1)
      }
      if (types === 1) {
        // $(".tab-div-second").css("display","block").sibling().css("display","none")
        this.sites = []
        this.page_count = 1
        this.table_type = 2
        this.dataTab = 0
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc2)
      }
      if (types === 2) {
        // $(".tab-div-third").css("display","block").sibling().css("display","none")
        this.siteArrs = []
        this.page_count = 1
        this.table_type = 3
        this.dataTab = 0
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createFunc3)
      }
    },
    ajaxTab1 (indexTab) {
      this.page_count++
      this.table_type = indexTab
      if (indexTab === 1) {
        this.dataTab = 1
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
      } else if (indexTab === 2) {
        this.dataTab = 2
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
      } else if (indexTab === 3) {
        this.dataTab = 3
        this.AjaxToalFuncs(this.baseUrl + 'wx_yxyx_api/get_invite_type_list' + this.userId, {'page_num': this.page_count, 'per_page_count': this.per_page_count, 'table_type': this.table_type}, this.table_type, this.dataTab, this.createTotalHtml)
      }
    },
    createTotalHtml (result, url, tabletypes, dataTab) {
      console.log(this.disredsult)
      this.table_type = tabletypes
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
      if (this.dataTab === 3 && this.table_type === 3) {
        this.createFunc3(result, url)
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
      if (this.table_type === 3 && this.dataTab === 0) {
        this.createFunc3(result, url)
//      return
      }
    },
    createFunc1 (result, url) {
      this.steudent_first_num = result.steudent_first_num
      this.items.push(result.student_list.list)
      console.log(this.items)
      if (result.student_list.list.length > 0) {
        for (var i = 0; i < result.student_list.list.length; i++) {
//          this.mine_status = this.switchFunc(result.student_list.list[i].agent_status,result.student_list.list[i].agent_student_status)
          // 学员
          if (result.student_list.list[i].agent_status === '40') {
            $('.total-p').addClass('.total-invite-money')
          }
        }
        if (result.student_list.page_info.page_num === result.student_list.page_info.total_num / 5) {
          $('.tab-div-first .btnMore').css('display', 'none')
        }
      } else {
        $('.invite-first-num').eq(0).html('')
        this.stuBtn = '<div class=\'div-sub-img\'><img class=\'subImg\' src=\'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/img-que.svg\'></div>'
        $('.tab-div-first').html(this.stuBtn)
        this.stuBtn = ''
      }
    },
    createFunc2 (result, url) {
      this.member_first_num = result.member_first_num
      this.sites.push(result.member_list.list)
      console.log(this.sites[0])
      if (result.member_list.list.length > 0) {
        if (result.member_list.page_info.page_num === result.member_list.page_info.total_num / 5) {
          $('.tab-div-second .btnMore').css('display', 'none')
        }
      } else {
        $('.invite-first-num').eq(1).html('')
        this.memBtn = '<div class=\'div-sub-img\'><img class=\'subImg\' src=\'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg\'></div>'
        $('.memberList').html(this.memBtn)
        this.memBtn = ''
      }
    },
    createFunc3 (result, url) {
      this.student_and_member_first_num = result.student_and_member_first_num
      this.siteArrs.push(result.student_and_member_list.list)
      if (result.student_and_member_list.list.length > 0) {
        for (var k = 0; k < result.student_and_member_list.list.length; k++) {
          if (result.student_and_member_list.list[k].child.length === 0) {
            continue
          }
          for (var m = 0; m < result.student_and_member_list.list[k].child.length; m++) {
//            this.stuMem_status=this.switchFunc(result.student_and_member_list.list[k].child[m].agent_status,result.student_and_member_list.list[k].child[m].agent_student_status);
//            this.member_status = result.student_and_member_list.list[k].child[m].agent_status
          }
        }
        if (result.student_and_member_list.page_info.page_num === result.student_and_member_list.page_info.total_num / 5) {
          $('.tab-div-third .btnMore').css('display', 'none')
        }
      } else {
        $('.invite-first-num').eq(2).html('')
        this.stuMemBtn = '<div class=\'div-sub-img\'><img class=\'subImg\' src=\'http://wx-yxyx-web.leo1v1.com/wx-yxyx-new-second/img/total/img-que.svg\'></div>'
        $('.studentMemberList').html(this.stuMemBtn)
        this.stuMemBtn = ''
      }
    },
    switchFunc (test, strstatus) {
      if (test === '0') {
        return '已邀请'
      }
      if (test === '2') {
        return '未接通'
      }
      if (test === '10') {
        return '课程老师已联系学员'
      }
      if (test === '20' && strstatus === '100') {
        return '课程老师已联系学员[无意向]'
      }
      if (test === '20') {
        return '课程老师已联系学员[预约成功]'
      }
      if (test === '30' && strstatus === '100') {
        return '学员已上完测评课[无意向]'
      }
      if (test === '30') {
        return '学员已上完测评课'
      }
      if (test === '40') {
        return '成功购课'
      }
    },
    bindClickFunc (delbtn) {
      console.log($(delbtn).children().eq(1).html())
      console.log($(delbtn).children().eq(1).css('display'))
      if ($(delbtn).find($('.total-top')).css('display') === 'block') {
        $(delbtn).find($('.total-bottom')).css('display', 'block')
        $(delbtn).find($('.total-top')).css('display', 'none')
        $(delbtn).children().eq(1).css('display', 'none')
      } else if ($(delbtn).find($('.total-bottom')).css('display') === 'block') {
        $(delbtn).find($('.total-top')).css('display', 'block')
        $(delbtn).children().eq(1).css('display', 'block')
        $(delbtn).find($('.total-bottom')).css('display', 'none')
      }
    },
    AjaxToalFuncs (url, requestData, table_type, dataTab, callback) {
	    console.log(requestData)
	    $.ajax({
	        url: url,
	        type: 'post',
	        async:false,
	        dataType: 'JSONP',
	        data: requestData,
	        success: result => {
	            if (result['ret'] !== 0) {
	                alert(result['info'])
	            } else {
	                // 成功
	                url = url + '&page_num=' + requestData.page_num + '&table_type=' + table_type + '&dataTab=' + dataTab
	                // createTotalHtml(result,url,table_type,dataTab);
	                callback(result, url, table_type, dataTab)
	            }
	        }
	    })
		},
		createAuis(){
	    var tab = new auiTab({
	        element: document.getElementById('tab'),
	    },function (ret) {
	        console.log(ret)
	        if (ret.index === 1) {
	            $('.tab-div-first').css('display', 'block')
	            $('.tab-div-second').css('display', 'none')
	            $('.tab-div-third').css('display', 'none')
	        } else if (ret.index === 2) {
	            $('.tab-div-first').css('display', 'none')
	            $('.tab-div-third').css('display', 'none')
	            $('.tab-div-second').css('display', 'block')
	        } else if (ret.index === 3) {
	            $('.tab-div-first').css('display', 'none')
	            $('.tab-div-second').css('display', 'none')
	            $('.tab-div-third').css('display', 'block')
	        }
	        // AjaxToalFuncs(url,page_count,per_page_count);
	    })
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/css/total-summary.less";
</style>
