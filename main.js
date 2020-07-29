$(document).ready(function() {

    $("footer input").keydown(aggiungi);

    function aggiungi(){
        if(event.which == 13){
            var valore = $("footer input").val();
            $("footer input").val("");
            var copia = $(".template .out").clone();
            copia.find(".text").append("<p>"+valore+"</p>")
            $("main").append(copia);

            setTimeout(reply, 1000)

            function reply(){

                var answerArr = [
                    "ciao",
                    "come stai",
                    "a presto"
                ]

                var answer = $(".template .in").clone();
                answer.find(".text").append("<p>"+ answerArr[numRand(0,2)] +"</p>")
                $("main").append(answer);
            }
        };
    }

    function numRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }



    var data = new Date();
    var ora = data.getHours() + ":" + data.getMinutes();



});
