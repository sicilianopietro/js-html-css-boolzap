$(document).ready(function() {

    $(".speak").click(function(){
        var valore = $("footer input").val();
        $("footer input").val("");
        var copia = $(".template .out").clone();
        copia.find(".text").append("<p>"+valore+"</p>");
        $("main").append(copia);
        setTimeout(reply, 1000);
    })

    $("footer input").keydown(aggiungi);

    $("footer input").focus(function(){
        $("footer .speak i:nth-of-type(1)").hide();
        $("footer .speak i:nth-of-type(2)").show();
    })
    $("footer input").focusout(function(){
        $("footer .speak i:nth-of-type(1)").show();
        $("footer .speak i:nth-of-type(2)").hide();
    })

    $("aside .chat .text .name").append("<span>" + orario() + "</span>");
    $("header .contact").find("span:nth-of-type(2)").append(orario());

    function aggiungi(){
        if(event.which == 13){
            var valore = $("footer input").val();
            $("footer input").val("");
            var copia = $(".template .out").clone();
            copia.find(".text").append("<p>"+valore+"</p>");
            $("main").append(copia);

            setTimeout(reply, 1000)
        };
    }

    function reply(){

        var answerArr = [
            "ciao",
            "come stai",
            "a presto"
        ]

        var answer = $(".template .in").clone();
        answer.find(".text").append("<p>"+ answerArr[numRand(0,2)] +"</p>");
        $("main").append(answer);
    }

    function numRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function addZero(i) {
        if (i < 10) {
        i = "0" + i;
    }
    return i;
    }

    function orario(){
        var data = new Date();
        var ora = data.getHours() + ":" + addZero(data.getMinutes());
        return ora;
    }
});
