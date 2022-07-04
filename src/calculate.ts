import { investPNI, investInterestOnly} from './loanData/investment';
import { ownPNI, ownInterestOnly} from './loanData/ownerOccupied';
import { getData, setData } from './datastore';

export interface item {
    name: string;
    totalInterest: number;
}

export function calculate (userData) {
    let dataArray: item[] = [];

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
        default:
            return {error : 'error'};
    }

    //do some math and push into dataArray???
    dataArray.push({
        name: 'name',
        totalInterest: 1234,
    })

    return dataArray;

}