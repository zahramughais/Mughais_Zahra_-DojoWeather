function dismiss(){
    var cookie = document.querySelector("#cookie");
    cookie.remove();
}
function CtoF (c){
    var f = Math.floor((c * 9/5) + 32);
    return f;
}
function FtoC (f){
    var c = Math.floor((f - 32) * 5/9);
    return c;
}
var allTemp = document.querySelectorAll(".hottest span, .coldest span");

function tempConv(element) {
    if (element.value == "F"){
        for (var i = 0; i < allTemp.length; i++){
            allTemp[i].innerText = CtoF(allTemp[i].innerText);
        }
    } else {
        for (var i = 0; i < allTemp.length; i++){
            allTemp[i].innerText = FtoC(allTemp[i].innerText);
        }
    }
}