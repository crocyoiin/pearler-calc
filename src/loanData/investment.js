import { ABSMAX, ABSMIN, investVarRate, investVarRateI, investVarRateFR} from './constants';


/**
 * type: string = name of offer
 * rate: number[] = interest rate(s) (percentage)
 * deposit: number = initial deposit?? (percentage)
 * minLoan: number = smallest amount of money that can be loaned (AUD)
 * maxLoan: number = largest amount to be borrowed (AUD)
 */

//Principal and interest rates
export let investPNI = [
    { 
        type: '3.09% p.a. Extra Investment Home Loan 30% deposit',
        rate: [3.09],
        deposit: 30,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '3.19% p.a. Extra Investment Home Loan 20% deposit',
        rate: [3.19],
        deposit: 20,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '4.29% p.a. Extra Investment Home Loan 10% deposit',
        rate: [4.29],
        deposit: 10,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: investVarRate + '% p.a. Standard Variable Rate Investment Home Loan',
        rate: [investVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '5.24% p.a. 1 Year Fixed Rate Investment Home Loan',
        rate: [5.24, investVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '6.04% p.a. 2 Year Fixed Rate Investment Home Loan',
        rate: [6.04, investVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '6.74% p.a. 3 Year Fixed Rate Investment Home Loan',
        rate: [6.74, investVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '6.94% p.a. 4 Year Fixed Rate Investment Home Loan',
        rate: [6.94, investVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '7.04% p.a. 5 Year Fixed Rate Investment Home Loan',
        rate: [7.04, investVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,

    },
    {
        type: '0.99% p.a. CommBank Green Investment Loan',
        rate: [0.99],
        deposit: 0,
        minLoan: 5000,
        maxLoan: 20000,
    },
]

// Interest only rates
export let investInterestOnly = [
    { 
        type: '3.65% p.a. Extra Home Loan 30% deposit',
        rate: [3.65],
        deposit: 30,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    { 
        type: '3.75% p.a. Extra Home Loan 20% deposit',
        rate: [3.75],
        deposit: 20,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    { 
        type: '4.85% p.a. Extra Home Loan 10% deposit',
        rate: [4.85],
        deposit: 10,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    { 
        type: investVarRateI[0] + '% p.a. Standard Variable Rate Home Loan',
        rate: investVarRateI,
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    {
        type: '5.95% p.a. 1 Year Fixed Rate Home Loan',
        rate: [5.95, investVarRateFR],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 1,
    },
    {
        type: '6.34% p.a. 2 Year Fixed Rate Home Loan',
        rate: [6.34, investVarRateFR],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 2,
    },
    {
        type: '6.84% p.a. 3 Year Fixed Rate Home Loan',
        rate: [6.84, investVarRateFR],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 3,
    },
    {
        type: '7.04% p.a. 4 Year Fixed Rate Home Loan',
        rate: [7.04, investVarRateFR],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 4,
    },
    {
        type: '7.14% p.a. 5 Year Fixed Rate Home Loan',
        rate: [7.14, investVarRateFR],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
]
