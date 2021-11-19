function startGame() {
    // starting a new game

    let playerName: string = 'Shelby'
    logPlayer(playerName);

    let messagesElement = document.getElementById("messages");
    //asserting that i know the objects will deff not be null with "!"
    messagesElement!.innerText = "Welcome to MultiMath! Starting a new game. . .";
}

function logPlayer(name: string): void {
    console.log(`New game starting for player: ${name}`)
}


function getInputValue(elementId: string): string | undefined {
    //add assertiong that the element is the more specific HTMLINputELement type
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === "") {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string): void {
    //posting the score and handeling if there isnt anything in  there yet by user
    const scoreElement: HTMLElement | null = document.getElementById("postedScores");
    scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById("startGame")!.addEventListener("click", startGame);
