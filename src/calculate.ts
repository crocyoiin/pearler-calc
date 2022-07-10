import { investPNI, investInterestOnly} from './loanData/investment.js';
import { ownPNI, ownInterestOnly} from './loanData/ownerOccupied.js';
import { getData, setData } from './datastore';
import { isImportEqualsDeclaration } from 'typescript';
import { useDebugValue } from 'react';

export interface item {
    name: string;
    totalInterest: number;
    totalPayed: number,
    monthlyRepayment: number;
    PNIRepayment?: number;
}

function monthlyLoanAmount(loanAmount: number, loanTerm: number, rate: number) {
    return loanAmount * ((rate*((1+rate)**(loanTerm * 12))) / (((1+rate)**(loanTerm * 12))-1));
}

export function calcData (userData) { 
    let dataArray: item[] = [];
    console.log(userData);
    if (userData.repaymentType == 'PNI') {
        if (userData.purpose == 'ownerOccupied') {
            for (let i of ownPNI) {
                let monthly = monthlyLoanAmount(userData.loanAmount, userData.loanTerm, i.rate[0] / 100 / 12);
                console.log(`PNI OWNER ${monthly}`);
                dataArray.push ({
                    name: i.type,
                    totalInterest: (monthly * 12 * userData.loanTerm) - userData.loanAmount,
                    totalPayed: (monthly * 12 * userData.loanTerm),
                    monthlyRepayment: monthly
                });
            }
        } else {
            for (let i of investPNI) {
                let monthly = monthlyLoanAmount(userData.loanAmount, userData.loanTerm, i.rate[0] / 100 / 12);
                console.log(`PNI INVEST ${monthly}`);
                dataArray.push ({
                    name: i.type,
                    totalInterest: (monthly * 12 * userData.loanTerm) - userData.loanAmount,
                    totalPayed: (monthly * 12 * userData.loanTerm),
                    monthlyRepayment: monthly
                });
            }
        }
    } else {
        if (userData.purpose == 'ownerOccupied') {
            for (let i of ownInterestOnly) {
                let monthly = monthlyLoanAmount(userData.loanAmount, userData.loanTerm - 5, i.rate[0] / 100);
                console.log(`INTEREST OWNER`);
                dataArray.push ({
                    name: i.type,
                    totalInterest: monthly * 12 * (userData.loanTerm - 5) + userData.loanAmount * i.rate[0] / 100 - userData.loanAmount,
                    totalPayed: monthly * 12 * (userData.loanTerm - 5) + userData.loanAmount * i.rate[0] / 100,
                    monthlyRepayment: monthly,
                    PNIRepayment: userData.loanAmount * i.rate[0] / 100 / 12,
                });
            }
        } else {
            for (let i of investInterestOnly) {
                let monthly = monthlyLoanAmount(userData.loanAmount, userData.loanTerm - 5, i.rate[0] / 100);
                console.log(`INTEREST INVEST`);
                dataArray.push ({
                    name: i.type,
                    totalInterest: monthly * 12 * (userData.loanTerm - 5) + userData.loanAmount * i.rate[0] / 100 - userData.loanAmount,
                    totalPayed: monthly * 12 * (userData.loanTerm - 5) + userData.loanAmount * i.rate[0] / 100,
                    monthlyRepayment: monthly,
                    PNIRepayment: userData.loanAmount * i.rate[0] / 100 / 12,
                });
            }
        }
    }

    return dataArray;
}