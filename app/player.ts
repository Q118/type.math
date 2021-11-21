//represents a player in the game
//chain of dependencie..... to keep refing like u can ref this and get person and player from it
// < reference path="person.ts" />
import { Person } from "./person";


//goit to use all the required stuff from the class but can also add additoinal stuff
export class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}
