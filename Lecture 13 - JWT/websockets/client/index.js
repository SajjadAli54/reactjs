let user = "";

const ws = new WebSocket(`ws://localhost:8080/`);
ws.binaryType = "blob"

ws.addEventListener("open", (event) => {
    console.log("Websocket connection opened");
});
ws.addEventListener("close", (event) => {
    console.log("Websocket connection closed");
});

ws.onmessage = (message) => {
    const msgDiv = document.createElement("div");
    const reader = new FileReader()
    reader.onload = () => {
        console.log(reader.result)
        const { username, msg } = JSON.parse(reader.result);
        if (username == user) return;

        msgDiv.classList.add("receiver");
        msgDiv.innerText = `${username}: ${msg}`;
        document.getElementById("box").appendChild(msgDiv);
    }
    reader.readAsText(message.data)
};

function onClick(event) {
    event.preventDefault();

    const msgInput = document.getElementById("msg");
    const nameInput = document.getElementById("name");


    if (!user) {
        user = nameInput.value;
    }

    const data = {
        username: user,
        msg: msgInput.value
    };

    const msgDiv = document.createElement("div");
    msgDiv.innerText = `${data.username}: ${data.msg}`;
    msgDiv.classList.add("sender")
    document.getElementById("box").appendChild(msgDiv);

    ws.send(JSON.stringify(data));
    msgInput.value = "";
}
