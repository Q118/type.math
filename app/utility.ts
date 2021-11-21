// we want to be able to use this function throughout the app without having to create new instances of the utility class so we use [static]
function getInputValue(elementID: string): string {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
  }
  
  function logger(message: string): void {
    console.log(message);
  }
  
  export { getInputValue as getValue, logger }