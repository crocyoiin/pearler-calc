import { ABSMAX, ABSMIN, ownVarRate, ownVarRateI} from './constants';

/**
 * type: string = name of offer
 * rate: number[] = interest rate(s) (percentage)
 * deposit: number = initial deposit?? (percentage)
 * minLoan: number = smallest amount of money that can be loaned (AUD)
 * maxLoan: number = largest amount to be borrowed (AUD)
 */

//Principal and interest rates
export let ownPNI = [
    { 
        type: '2.79% p.a. Extra Home Loan 30% deposit',
        rate: [2.79],
        deposit: 30,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '2.89% p.a. Extra Home Loan 20% deposit',
        rate: [2.89],
        deposit: 20,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '3.74% p.a. Extra Home Loan 10% deposit',
        rate: [3.74],
        deposit: 10,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: ownVarRate + '% p.a. Standard Variable Rate Home Loan',
        rate: [ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '4.99% p.a. 1 Year Fixed Rate Home Loan',
        rate: [4.99, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '5.79% p.a. 2 Year Fixed Rate Home Loan',
        rate: [5.79, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '6.39% p.a. 3 Year Fixed Rate Home Loan',
        rate: [6.39, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '6.59% p.a. 4 Year Fixed Rate Home Loan',
        rate: [6.59, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
    },
    {
        type: '6.69% p.a. 5 Year Fixed Rate Home Loan',
        rate: [6.69, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,

    },
    {
        type: '0.99% p.a. CommBank Green Loan',
        rate: [0.99],
        deposit: 0,
        minLoan: 5000,
        maxLoan: 20000,
    },
]

// Interest only rates
export let ownInterestOnly = [
    { 
        type: '3.35% p.a. Extra Home Loan 30% deposit',
        rate: [3.35],
        deposit: 30,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    { 
        type: '3.45% p.a. Extra Home Loan 20% deposit',
        rate: [3.45],
        deposit: 20,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    { 
        type: ownVarRateI[0] + '% p.a. Standard Variable Rate Home Loan',
        rate: ownVarRateI,
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
    {
        type: '5.94% p.a. 1 Year Fixed Rate Home Loan',
        rate: [5.94, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 1,
    },
    {
        type: '6.59% p.a. 2 Year Fixed Rate Home Loan',
        rate: [6.59, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 2,
    },
    {
        type: '6.99% p.a. 3 Year Fixed Rate Home Loan',
        rate: [6.99, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 3,
    },
    {
        type: '7.19% p.a. 4 Year Fixed Rate Home Loan',
        rate: [7.19, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 4,
    },
    {
        type: '7.29% p.a. 5 Year Fixed Rate Home Loan',
        rate: [7.29, ownVarRate],
        deposit: 0,
        minLoan: ABSMIN,
        maxLoan: ABSMAX,
        period: 5,
    },
]
