function sendMessage() {

    const input =
        document.getElementById("message");

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }

    const chat =
        document.getElementById("chat");


    chat.innerHTML +=
        "<p><strong>VOUS :</strong> " +
        message +
        "</p>";


    input.value = "";


    setTimeout(() => {

        chat.innerHTML +=
            "<p><strong>KAEL :</strong> " +
            "J'ai reçu votre message : " +
            message +
            "</p>";

    }, 500);

}
