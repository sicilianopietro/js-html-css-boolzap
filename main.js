$(document).ready(function() {

    // INVIO MESSAGGI CON IL CLICK
    $(".speak").click(function(){
        if($("footer input").val().length > 0 && !($("footer input").val() == 0)){
            aggiungi();
            setTimeout(reply, 1000);
        }
    })

    //  INVIO MESSAGGI CON IL TASTO INVIA
    $("footer input").keydown(function(){
        if(event.which == 13 && $(this).val().length > 0 && !($(this).val() == 0)){
            aggiungi();
            setTimeout(reply, 1000);
        }
    });

    // CAMBIO DI ICONE PER L'INVIO DEI MESSAGGI
    $("footer input").focus(function(){
        $("footer .speak i:nth-of-type(1)").hide();
        $("footer .speak i:nth-of-type(2)").show();
    })

    $("footer input").focusout(function(){
        $("footer .speak i:nth-of-type(1)").show();
        $("footer .speak i:nth-of-type(2)").hide();
    })

    // AGGIUNGERE ORARIO
    $("aside .chat .contact .text .name span:nth-of-type(2)").append(getTime());
    $("header .contact span:nth-of-type(2)").append(getTime());

    // SELEZIONARE LA CHAT
    $("aside .chat .contact").click(function(){

        $("main .main-chat").removeClass("active");
        $("aside .chat .contact").removeClass("active");
        $(this).addClass("active");
        $("main .main-chat").eq($(this).index()).addClass("active");

        $("header .contact span:nth-of-type(1)").text($("aside .chat .contact.active .text .name span:nth-of-type(1)").text());
        $("header img").attr("src",$("aside .chat .contact.active .icon img").attr("src"));
        $("header .contact span:nth-of-type(2)").show();

        scrollChat()
        startChat();
    })

    // RICERCA DEI CONTATTI
    $("aside .searchbar input").keyup(function(){

        var search = $(this).val().toLowerCase();

        // SEARCH CICLO FOR
        // var contact = $("aside .chat .contact");
        //
        // for (var i = 0; i < contact.length; i++){
        //     var a = contact.eq(i).find(".text .name span:nth-of-type(1)");
        //     console.log(a.html());
        //     if(a.html().toLowerCase().indexOf(search) > -1) {
        //         contact.eq(i).show()
        //     } else {
        //         contact.eq(i).hide()
        //     }
        // }

        // SEARCH EACH()
        $("aside .chat .contact").each(function(){
            var that = $(this);
            if ($(this).find(".name span:nth-of-type(1)").text().toLowerCase().includes(search)){
                that.show();
            }else {
                that.hide();
            }
        })
    })

    function startChat(){
        $("main").addClass("active");
        $("header").addClass("active");
        $("footer").addClass("active");
        $(".start").addClass("hidden");
    }

    function aggiungi(){
        var valore = $("footer input").val();
        $("footer input").val("");
        var copia = $(".template .out").clone();
        copia.find(".text p").append(valore.trim());
        $("main .main-chat.active").append(copia);
        $("main .out .text").find("p").attr("data-descr", getTime());
        $("aside .chat .contact.active .text .name").find("span:nth-of-type(2)").text(getTime());

        $("aside .chat .contact.active .text .message").find("span").text($("main .main-chat.active .out:last-of-type .text p").text())

        scrollChat();
    }

    function reply(){

        var answerArr = [
            "ciao",
            "come stai",
            "a presto",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
        ]

        var answer = $(".template .in").clone();
        answer.find(".text p").append(answerArr[numRand(0,3)]);
        $("main .main-chat.active").append(answer);
        $("main .in .text").find("p").attr("data-descr", getTime());

        $("header .contact").find("span:nth-of-type(2)").text("Ultimo accesso oggi alle ore " + getTime());
        $("aside .chat .contact.active .text .name").find("span:nth-of-type(2)").text(getTime());

        $("aside .chat .contact.active .text .message").find("span").text($("main .main-chat.active .in:last-of-type .text p").text())

        scrollChat();
    }

    function scrollChat(){
        $('main').animate({scrollTop: $('main')[0].scrollHeight},0);
    }

    function numRand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function getTime(){
        var time = new Date();
        time = `${time.getHours()}:${time.getMinutes() < 10 ? "0" : ""}${time.getMinutes()}`;
        return time;
    }
});
