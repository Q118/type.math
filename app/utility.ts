// we want to be able to use this function throughout the app without having to create new instances of the utility class so we use [static]

class Utility {
    static getInputValue(elementId: string): string {

        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

        return inputElement.value;

    }
}