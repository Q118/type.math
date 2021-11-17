function startGame() {
    // starting a new game

    let playerName: string = 'Shelby'
    logPlayer(playerName);

    let messagesElement = document.getElementById("messages");
    //asserting that i know the objects will deff not be null with "!"
    messagesElement!.innerText = "Welcome to MultiMath! Starting a new game. . .";
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById("startGame")!.addEventListener("click", startGame);