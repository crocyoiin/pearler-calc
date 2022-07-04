import { investPNI, investInterestOnly} from './loanData/investment.js';
import { ownPNI, ownInterestOnly} from './loanData/ownerOccupied.js';
import { getData, setData } from './datastore';

export interface item {
    name: string;
    totalInterest: number;
}

export function calcData (userData) {
    let dataArray: item[] = [];

    //placeholder items 
    dataArray.push({
        name: 'name',
        totalInterest: 1234,
    })

    dataArray.push({
        name: 'hyeahh money',
        totalInterest: 131313,
    })

    dataArray.push({
        name: 'debt :(',
        totalInterest: 1394,
    })

    return dataArray;

    /*
    //lol idk how switch statements work
    const method = `${userData.repaymentType}  ${userData.purpose}`;
    let rates;

    switch (method) {
        case 'PNI ownerOccupied' :
            rates = ownPNI;
            break;
        case 'interest ownerOccupied' :
            rates = ownInterestOnly;
            break;
        case 'PNI investment':
            rates = investPNI;
            break;
        case 'interest investment':
            rates = investInterestOnly;
            break;
    }
    */

    //do some math and push into dataArray???
}