var startTime = new Date().getTime();
var score = 0;

function inizializza(level){
    var numberOfItems = Math.pow(level+2,2);
 

    $(".numbers").css("grid-template-columns","repeat("+(level+2)+",1fr)")

    for( var index = 0 ; index < numberOfItems; index++){
        var numero = 1 + index;
        var numberEl = $("<li>"+numero+"</li>");

        numberEl.on("click",onClick);

        numberEl.css("order",Math.round(Math.random()*100))

        $(".numbers").append(numberEl)
    }
}

function getNumber(el){
    return parseInt(el.textContent)
}

function onClick(e){
    var element = e.currentTarget;
    $(element).addClass("clicked");

    var clickedNumber = getNumber(element)

    var isOk = true;

    $(".numbers .clicked").each(function(index, clickedEl){
        var otherClicked = getNumber(clickedEl);
        if (clickedNumber<otherClicked){
            isOk=false;
        }
    });

    if(isOk){
      score = score + 100;
      $(".score").html(score);
      M.toast({html:"Bravissimo!!!"})
    }else{
        M.toast({html:"Gradoni!!!"})
    }
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