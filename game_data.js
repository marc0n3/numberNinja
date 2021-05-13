var model = {
    level: null,
    score: 0,
    startTime: new Date().getTime(),
    intervalTimer: null,
};

function getElNumber(numberEl) {
    return parseInt(numberEl.textContent)
}

function onClick(e) {
    var clickedElement = e.currentTarget;
    var clickedNumber = getElNumber(clickedElement);
    //alert(numero);
    $(clickedElement).addClass("clicked")

    var isOk = true;
    $(".numbers li.clicked").each(
        function (ind, otherNumberEl) {
        if (getElNumber(otherNumberEl) > clickedNumber) {
            //se anche solo uno è minore, ho sbagliato
            isOk = false;
        }
    }
    )
    M.Toast.dismissAll();
    if (isOk) {
        model.score += 100;
        //aggiorno lo score dal modello
        $(".score").html(model.score);
        M.toast({ html: 'Ben fatto!', classes: "okAlert" })
    } else {
        M.toast({ html: 'Sbagliato', classes: "koAlert" })
    }

    testEnded()
}

function testEnded() {
    //controllo se ci sono elementi non cliccati
    if (!$(".numbers li:not(.clicked)").length) {
        const endTime = new Date().getTime();
        clearInterval(model.intervalTimer);

        $('.modal').modal("open");

    }
}

function inizializza(level) {
    model.level = level;
    var numberOfItems = Math.pow(level + 2, 2);




    //metto al numbers un numero di colonne pari a level+2
    $(".numbers").css("grid-template-columns", "repeat(" + (level + 2) + ",1fr")

    //cerca l'elemento numbers e per ogni livello di difficoltà, aggiunge 10 numeri casuali tra 1 e 10000



    for (let index = 0; index < numberOfItems; index++) {

        var number = $("<li ><svg viewbox='0 0 96 64' preserverAspectRatio='xMidYMid meet'><text text-anchor='middle'  alignment-baseline='central ' x='50%' y='50%'>" + (index + 1) + "</text></svg></li>");



        number.css("order", Math.round(Math.random() * 10))

        number.on("click", onClick);

        $(".numbers").append(number)


    }
    model.intervalTimer = setInterval(timer, 500);

    $('.modal').modal();

}

function timer() {
    $(".time").html(Math.round((new Date().getTime() - model.startTime) / 1000))
}


$(document).ready(
    function () {
        let searchParams = new URLSearchParams(window.location.search)
        if (searchParams.has("level")) {
            inizializza(parseInt(searchParams.get("level")));
        }
        else {
            inizializza(1);
        }
    }
)
