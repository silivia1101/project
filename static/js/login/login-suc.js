window.onload=function(){
    var sec=3;
    getsecondFunc(sec);
}
function getsecondFunc(sec){
    if(sec>0){
        sec--;
        $(".login-container-loca span").html(sec);
        getsecondFunc(sec);
    }else{
        window.location.href="index.html";
    }
}