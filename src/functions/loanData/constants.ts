/**
 * constants.ts
 * constants for commbank loan repayment data, 
 * to be used in conjunction with owner_occupied.ts and investment.ts
 */

// maximum number that commbank calc lets you input
export const ABSMAX = 99999999;

// minimum loan value (many of them are 10k so just to simplify
export const ABSMIN = 10000;

// variable rate, can fluctuate so best to set as a const
export const ownVarRate = 4.6;
export const investVarRate = 5.88;

export const ownVarRateI = [5.79, 5.3];
export const investVarRateI = [6.14, 5.88];
export const investVarRateFR = 5.18
