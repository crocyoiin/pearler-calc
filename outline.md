Example datastore(s)??

===
[1] Input options

## syncInput(loanAmount, term, for, repaymentFreq)
promptsync each param? probably maybe.

let userInput = {
    loanAmount: number,
    term: number,
    for: investment/homeOwner
    repaymentFreq?: monthly/fornightly/weekly
}
 
===

- if userInput.for = investment, use data from investment.ts
- else if userInput.for = homeOwner, use data from owner_occupied.ts

then for either investment or homeowner, calculate:
principal and interest
interest only 1 year
interest only 2 years
interest only 3 years
interest only 4 years
interest only 5 years


===
[2] Calculated data array
(i have no idea what its gonna look like but comparisons will prolly be based on total interest charged)

let dataCalc = [
    {
        name: 'interest only 5 year' + '0.99% p.a. CommBank Green Loan'
        totalLoanRepayments: loanAmount + interest;
        totalInterestCharged: interest (dollar);
    },
        {
        name: 'interest only 5 year' + '0.99% p.a. CommBank Green Loan'
        totalLoanRepayments: loanAmount + interest;
        totalInterestCharged: interest (dollar);
    },
    etc.
]

===
can i do the easy stuff please lmao
[3] dataCalc sorted in increasing order based on totalInterestCharged
[4] percentage diff calculated by (item/index0) * 100

## view(dataCalc);
- {name} is the best option, with a total interest charged of ${totalInterstCharged}
- {name} is {percDiff}% more expensive, with a total interest charged of ${totalInterestCharged}
- {name} is {percDiff}% more expensive, with a total interest charged of ${totalInterestCharged}
- etc.
- probably lists only the top 5-10 options as to not clutter screen

## viewIndex(dataCalc, number);
optional thing?? smth to view details i had an idea but i forgot 

## viewAll(dataCalc);
lists all data with loop, thought it would be better to have an option to list all seperately for usability