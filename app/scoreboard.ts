import { Result } from './result';

export class Scoreboard {

    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreboard(): void {
        //this functions job is to generate the HTML representing all the resullts and putting them on the screen
        let output: string = '<h2>Scoreboard</h2>';

        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }

        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}