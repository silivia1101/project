/**
 * Created by LE on 2017/10/21.
 */
// $(".tab-content-lis-box").click(function (){
//     // console.log($(this).parent().children().eq(1).css("display"));
//     if($(this).find($(".total-top")).css("display")=="block"){
//         $(this).find($(".total-bottom")).css('display','block');
//         $(this).find($(".total-top")).css('display','none');
//         $(this).parent().children().eq(1).css('display','none');
//     }else if($(this).find($(".total-bottom")).css("display")=="block"){
//         $(this).find($(".total-top")).css('display','block');
//         $(this).parent().children().eq(1).css('display','block');
//         $(this).find($(".total-bottom")).css('display','none');
//     }
// })

function bindClickFunc(delbtn){
    // $(delbtn).parents("tr").remove();
    // console.log($(this).parent().children().eq(1).css("display"));
    if($(delbtn).find($(".total-top")).css("display")=="block"){
        $(delbtn).find($(".total-bottom")).css('display','block');
        $(delbtn).find($(".total-top")).css('display','none');
        $(delbtn).parent().children().eq(1).css('display','none');
    }else if($(delbtn).find($(".total-bottom")).css("display")=="block"){
        $(delbtn).find($(".total-top")).css('display','block');
        $(delbtn).parent().children().eq(1).css('display','block');
        $(delbtn).find($(".total-bottom")).css('display','none');
    }
}