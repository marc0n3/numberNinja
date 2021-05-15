var startTime = new Date().getTime()

function inizializza(level){
    var numberOfItems = Math.pow(level+2,2);
 

    $(".numbers").css("grid-template-columns","repeat("+(level+2)+",1fr)")

    for( var index = 0 ; index < numberOfItems; index++){
        var numero = 1 + index;
        var numberEl = $("<li>"+numero+"</li>");

        numberEl.on("click",onClick)

        $(".numbers").append(numberEl)
    }
}

function onClick(){
    alert("cliccato!!!!!")
}

function onReady(){
   setInterval(orologio, 500);

   inizializza(1);
}

function orologio(){
    var now = new Date().getTime()
    var elapsed = now-startTime; 
    var realSeconds = Math.round(elapsed/1000);
    $(".time").html(realSeconds)
}

$(document).ready(onReady)