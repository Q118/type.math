
import { Player } from './player';
import { Game } from './game';

//import and alieas the enrire module
import * as Helpers from './utility';


let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getValue('playername');

    //the Number constructor is used here
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});