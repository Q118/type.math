function startGame() {
    // starting a new game
    let messagesElement = document.getElementById("messages");
    //asserting that i know the objects will deff not be null with "!"
    messagesElement!.innerText = "Welcome to MultiMath! Starting a new game. . .";
}

document.getElementById("startGame")!.addEventListener("click", startGame);