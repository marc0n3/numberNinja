var startTime = new Date().getTime()

function onReady(){
   setInterval(orologio, 500);
}

function orologio(){
    var now = new Date().getTime()
    
    $(".time").html(now-startTime)
}

$(document).ready(onReady)