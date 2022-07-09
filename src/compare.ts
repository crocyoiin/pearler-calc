import { getData, setData } from "./datastore";
import { item } from "./calculate";

/**
 * sortData
 * sorts data by increasing total interest, then by alphabetical order
 * @params {*} dataArray
 * @returns {*} sortedArray
 */

export function sortData(dataArray: item[]) {
	let sortedArray: item[] = dataArray;
	sortedArray.sort(function(a,b){
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
				return -1;
			}
			if (a.name.toLowerCase() > b.name.toLowerCase()) {
				return 1;
			}
			return 0;
	});

	sortedArray.sort(function(a,b) {
		return a.totalInterest - b.totalInterest;
	});
	return sortedArray; 
}

/**
 * viewData
 * Lists and prints top 5 options
 * @params sortedData array
 * @returns none
 */
export function viewData(sortedArray: item[]) {

	let outputArray: string[] = [];
	outputArray.push(`The best option is ${sortedArray[0].name}, with a total interest charged of $${Math.round(sortedArray[0].totalInterest)}.`);
    console.log(`The best option is ${sortedArray[0].name}, with a total interest charged of $${Math.round(sortedArray[0].totalInterest)}.`);

		let max = 5;
		if (sortedArray.length < 5) {
			max = sortedArray.length;
		}

    for (let i = 1; i < max; i++) {
			let percDiff = Math.round(((sortedArray[i].totalInterest / sortedArray[0].totalInterest) - 1) * 100);
			outputArray.push(`${sortedArray[i].name} is ${percDiff}% more expensive, with a total interest charged of $${Math.round(sortedArray[i].totalInterest)}.`);
			console.log(`${sortedArray[i].name} is ${percDiff}% more expensive, with a total interest charged of $${Math.round(sortedArray[i].totalInterest)}.`);
    }

	if (outputArray.length == 0) {
		outputArray.push(" ");
	}

	setData(outputArray);

}

/**
 * viewAll
 * Lists all repayment type options in order of best to worst value for money
 * @param sortedArray 
 * @return none
 */
export function viewAll(sortedArray) {
	let i = 1;
	console.log('Rank || Repayment Type || Total Interest Charged');
	console.log();

	let outputArray: string[] = [];

	for (const item of sortedArray) {
		console.log(`${i}. ${item.name}: $${item.totalInterest}`);
		outputArray.push(`${i}. ${item.name}: $${item.totalInterest}`);
		i++;
	}	
}