var startTime = new Date().getTime()

function onReady(){
   setInterval(orologio, 500);
}

function orologio(){
    var now = new Date().getTime()
    var elapsed = now-startTime;
    var realSeconds = Math.round(elapsed/1000);
    $(".time").html(realSeconds)
}

$(document).ready(onReady)