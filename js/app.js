var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(85, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("New game starting for player: " + name);
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
document.getElementById("startGame").addEventListener("click", startGame);
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.log(err);
}
var firstPlayer = new Player();
firstPlayer.name = "Daniel";
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map