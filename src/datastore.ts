/*
datastore.ts
stores data of current session
*/

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
}

