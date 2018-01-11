    
    closeTips(){
      $api.remove($api.byId("tips-1"))
    },
    getUserTips (){
    var that=this
      $.ajax({
          "url": 'http://test.admin.leo1v1.com/wx_yxyx_common/top_invite_list?_agent_id=204',
          "type": "POST",
          "dataType": "jsonp",
          "data": {},
          async:true,
          success: function(result) { 
              console.log(result)
              if (result['ret'] != 0) {
                  alert(result['info'])
                  // $api.remove($api.byId("tips-1"))
              } else {
                  // 反馈成功
                  if(result.list.length!=0){
                    that.setTimes(result,0,0)
                  }else{

                  }
              }
          },
          error: function () {
              alert("网络不太通畅，请稍后再试")
          }
        });
    },
    setTimes(result,index,indexTip){
        if(index==0){
            this.marTip(result,index,indexTip)
        }else{
            var that= this
            setInterval(function(){
                that.marTip(result,index,indexTip)
            },8000)
        }
    },
    marTip(result,index,indexTip){
        if(index==0){
            index++
            this.marqueeHtml(result,index,indexTip)
            indexTip=indexTip+1
            this.setTimes(result,index,indexTip)
        }else{
            if(indexTip<=result.list.length-1){
                // 广播条
                this.marqueeHtml(result,index,indexTip)
                indexTip=indexTip+1
            }else if(indexTip>result.list.length-1){
                indexTip=0
                this.marqueeHtml(result,index,indexTip)
            }
        }
    },
    marqueeHtml(result,index,indexTip){
        var tTime=parseDate(result.list[indexTip].create_time)
        var strTip=result.list[indexTip].from_nick+"于"+tTime+"成功邀请了"+result.list[indexTip].new_nick
        // $(".aui-tips-title marquee").html(strTip)
        return this.msg=strTip
    },
    getUserInfo(){
      var that=this
        $.ajax({
          "url": 'http://test.admin.leo1v1.com/wx_yxyx_api/get_user_center_info?_agent_id=204',
          "type": "POST",
          "dataType": "jsonp",
          "data": {},
          async:true,
          success: function(result) {
              if (result['ret'] != 0) {
                  // alert(result['info']);
                  window.location.href="login.html";
              } else {
                  // 反馈成功
                  that.buildingHtml(result);
              }
          },
          error: function () {
              alert("网络不太通畅，请稍后再试");
          }
      });
    },
    buildingHtml(result){
      // 用户信息
      $(".header-user-sibling").css({'backgroundImage':'url('+result.user_info_list.wx_headimgurl+')','opacity': 0.3,'backgroundPosition':'center'});
      var strImg;
      if(result.user_info_list.agent_level_str=="水晶会员"){
          strImg="<img onclick='memberFunc(2)' src='../../static/img/index/img-diamond.svg' alt=''>";
      }
      else if(result.user_info_list.agent_level_str=="黄金会员" && result.user_info_list.test_lesson_succ_flog==1){
          strImg="<img onclick='memberFunc(11)' src='../../static/img/index/img-gold.svg' alt=''>";
      }
      else if(result.user_info_list.agent_level_str=="黄金会员" && result.user_info_list.test_lesson_succ_flog==0){
          strImg="<img onclick='memberFunc(1)' src='../../static/img/index/img-gold.svg' alt=''>";
      }
      this.wx_headimgurl=result.user_info_list.wx_headimgurl;
      this.usernick=result.user_info_list.usernick;
      $(".userTitle").html(strImg);
      this.all_money=result.user_info_list.all_money;
      this.child_all_count=result.user_info_list.child_all_count;
      var p_phone=result.user_info_list.phone;
      var wx_openid=result.user_info_list.wx_openid;
    },
    memberFunc(num){
      switch(num){
        case 1:
            window.location.href="member-gold.html";
            break;
        case 11:
            window.location.href="member-gold-trail.html";
            break;
        case 2:
            window.location.href="member-diamond.html";
            break;
        case 3:
            window.location.href="total-summary.html";
            break;
        case 4:
            window.location.href="invite-num.html";
            break;
        case 5:
            window.location.href="invite-students.html";
            break;
        case 6:
            window.location.href="invite-member.html";
            break;
        case 7:
            window.location.href="lottery-draw.html";
            break;
        case 8:
            window.location.href="more-activity.html";
            break;
        case 91:
            window.location.href="http://wx-yxyx-web.leo1v1.com/wx_yxyx_leo-Introduction/index.html";
            break;
        case 92:
            window.location.href="http://wx-yxyx-web.leo1v1.com/wx_yxyx_BoutiqueContent/index.html?p_phone="+p_phone+"&wx_openid="+wx_openid;
            break;
        case 93:
            window.location.href="http://wx-yxyx-web.leo1v1.com/wx_yxyx_student_feedback/index.html?wx_openid="+wx_openid;
            break;
        case 94:
            window.location.href="http://www.leo1v1.com/market-l/index.html";
            break;
        default:
            break;
      }
    }
  }