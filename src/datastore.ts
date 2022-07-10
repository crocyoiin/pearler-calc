/*
datastore.ts
stores data of current session
*/

interface data {
    top: string[];
    all: string[];
}

let dataCalc: data = {
    top: [],
    all: [],
}

export function getData() {
    return dataCalc;
}

export function setData(newData: data) {
    dataCalc = newData;
}

export function clear() {
    dataCalc.top = [];
    dataCalc.all = [];
}

