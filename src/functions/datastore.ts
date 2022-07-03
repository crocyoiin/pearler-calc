/*
datastore.ts
stores data of current session
*/

let userInput = {

}

let dataCalc = [

]

export function getData() {
    return dataCalc;
}

export function setData(newData) {
    dataCalc = newData;
}

export function clear() {
    dataCalc = [];
    userInput = {};
}

export function getInput() {
    return userInput;
}

export function setInput(newInput) {
    userInput = newInput;
}
