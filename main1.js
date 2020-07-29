document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("footer input");
    const out = document.querySelector("main .out");

    input.addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 13) {
        let msg = input.value;
        console.log(msg);
        input.value = "";
        let element = document.createElement("div");
        element.classList.add("text")
        element.innerHTML = "<p>"+msg+"</p>";
        out.appendChild(element);
        }
    })

    var myArray = [
        {'name':'Michael', 'message':'Non poteva essere altrimenti'},
        {'name':'Mila', 'message':'Non poteva essere altrimenti'},
        {'name':'Paul', 'message':'Non poteva essere altrimenti'},
        {'name':'Dennis', 'message':'Non poteva essere altrimenti'},
        {'name':'Tim', 'message':'Non poteva essere altrimenti'},
        {'name':'Erik', 'message':'Non poteva essere altrimenti'},
    ]

    // buildChat(myArray)

    function buildChat(data){
        let chat = document.querySelector('aside .chat')

        for (let i = 0; i < data.length; i++){

            let element = document.createElement("div");
            element.classList.add("contact");

            console.log(element);
            chat.appendChild(element);

            // let contact = document.querySelector('aside .chat .contact')
            // let text = document.createElement("div");
            // text.classList.add("name");
            // console.log(text);
            // contact.appendChild(text);

            // let name = `name-${i}`
            // let message = `message-${i}`
            //
            // let row = `<span>
            //                 ${data[i].name}
            //                 ${data[i].message}
            //            </span>`
        }
    }


    var data = new Date();
    var ora = data.getHours() + ":" + data.getMinutes();






















})
