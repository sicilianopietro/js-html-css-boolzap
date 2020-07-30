$(document).ready(function() {

    $(".speak").click(function(){
        var valore = $("footer input").val();
        $("footer input").val("");
        var copia = $(".template .out").clone();
        copia.find(".text").append("<p>"+valore+"</p>");
        // copia.find("p").append(valore);
        $("main .main-chat.active").append(copia);
        $("main .out .text").find("p").attr("data-descr", orario());
        scrollChat();
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

    $("aside .chat .contact").click(function(){
        var index = $(this).index();
        $("main .main-chat").removeClass("active");
        $("aside .chat .contact").removeClass("active");
        $(this).addClass("active");
        $("main .main-chat").eq(index).addClass("active");
    })

    function aggiungi(){
        if(event.which == 13){
            var valore = $("footer input").val();
            $("footer input").val("");
            var copia = $(".template .out").clone();
            copia.find(".text").append("<p>"+valore+"</p>");
            // copia.find("p").append(valore);
            $("main .main-chat.active").append(copia);
            $("main .out .text").find("p").attr("data-descr", orario());
            scrollChat();
            setTimeout(reply, 1000);
        };
    }

    function scrollChat(){
        $('main').animate({
            scrollTop: $('main')[0].scrollHeight});
    }

    function reply(){

        var answerArr = [
            "ciao",
            "come stai",
            "a presto",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        ]

        var answer = $(".template .in").clone();
        answer.find(".text").append("<p>"+ answerArr[numRand(0,3)] +"</p>");
        $("main .main-chat.active").append(answer);
        $("main .in .text").find("p").attr("data-descr", orario());
        scrollChat();
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
