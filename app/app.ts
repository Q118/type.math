function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername')
    logPlayer(playerName);

    postScore(85, playerName);
    postScore(-5, playerName)
    // let messagesElement = document.getElementById("messages");
    // //asserting that i know the objects will deff not be null with "!"
    // messagesElement!.innerText = "Welcome to MultiMath! Starting a new game. . .";



}
//using a default value for the paramater can also make that param optional
function logPlayer(name: string = 'MultiMath Player'): void {
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

//make the playerName param optional by adding a '?' or a default value
function postScore(score: number, playerName: string = "MultiMath Player"): void {

    //assign a function type to a variable which will allow it to be assigned any function that takes in a single string paramater and returns void
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    //posting the score and handeling if there isnt anything in  there yet by user
    const scoreElement: HTMLElement | null = document.getElementById("postedScores");
    //assert its not null below:
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`)
}

document.getElementById("startGame")!.addEventListener("click", startGame);

//dont need to specify return type if on one line
let logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.log(err);
}



