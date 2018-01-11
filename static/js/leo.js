/**
 * Created by LE on 2017/10/21.
 */
var baseUrl="http://wx-yxyx.leo1v1.com/";
// userId="?_agent_id=204";
userId="?_agent_id=54";
// inviteStu="?_agent_id=204";
inviteStu="?_agent_id=56";
var debug=false;
// var debug=true;
if(debug){
    baseUrl="http://test.admin.leo1v1.com/";
    userId="";
    inviteStu="";
}
$(function(){
    apiready = function(){
        api.parseTapmode();
    }

})

// 切换按钮
function createAui(){
    var tab = new auiTab({
        element:document.getElementById("tab"),
    },function(ret){
        console.log(ret);
        if(ret.index==1){
            $(".tab-div-first").css({"display":"block"});
            $(".tab-div-first").addClass("tab-div-boxes");
            $(".tab-div-second").css("display","none");
        }else if(ret.index==2){
            $(".tab-div-first").css("display","none");
            $(".tab-div-second").addClass("tab-div-boxes");
            $(".tab-div-second").css("display","block");
        }
        // AjaxToalFuncs(url,page_count,per_page_count);
    });
}
function createAuis(){
    var tab = new auiTab({
        element:document.getElementById("tab"),
    },function(ret){
        console.log(ret)
        if(ret.index==1){
            $(".tab-div-first").css("display","block");
            $(".tab-div-second").css("display","none");
            $(".tab-div-third").css("display","none");
        }else if(ret.index==2){
            $(".tab-div-first").css("display","none");
            $(".tab-div-third").css("display","none");
            $(".tab-div-second").css("display","block");
        }else if(ret.index==3){
            $(".tab-div-first").css("display","none");
            $(".tab-div-second").css("display","none");
            $(".tab-div-third").css("display","block");
        }
        // AjaxToalFuncs(url,page_count,per_page_count);
    });
}
function parseDate(str) {
    var strTime;
    if (typeof str == 'string') {
        var results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) *$/);
        if (results && results.length > 3)
            return strTime=parseInt(results[1])+"年"+(parseInt(results[2]))+"月"+parseInt(results[3])+"日";
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/);
        if (results && results.length > 6)
            return strTime=parseInt(results[1])+"年"+(parseInt(results[2]))+"月"+parseInt(results[3])+"日";
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,9}) *$/);
        if (results && results.length > 7)
            return strTime=parseInt(results[1])+"年"+(parseInt(results[2]))+"月"+parseInt(results[3])+"日";
    }
    return null;
}

// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });
// axios.get('/user', {
//     params: {
//         ID: 12345
//     }
//  })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

function AjaxToalFunc(url,callback){
    // var result;
    console.log(callback)
    $.ajax({
        url: url,
        type: 'post',
        // async:false,
        dataType: 'JSONP',
        data: {},
        success: function (result) {
            if (result['ret'] != 0) {
                alert(result['info']);
            } else {
                // 成功
                // createTotalHtml(result);
                callback(result)
            }
        }
    });
}

function AjaxToalFuncs(url,requestData,table_type,dataTab,callback){
    console.log(requestData);
    $.ajax({
        url: url,
        type: 'post',
        async:false,
        dataType: 'JSONP',
        data: requestData,
        success: function (result) {
            if (result['ret'] != 0) {
                alert(result['info']);
            } else {
                // 成功
                url=url+"&page_num="+requestData.page_num+"&table_type="+table_type+"&dataTab="+dataTab;
                // createTotalHtml(result,url,table_type,dataTab);
                callback(result,url,table_type,dataTab)
            }
        }
    });
}

function geturl(name) {
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
    return "";
};

